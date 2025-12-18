
import { GoogleGenAI } from "@google/genai";

/**
 * Generates a tutor response based on lesson context and user query.
 * Follows the correct initialization and property access rules for @google/genai.
 */
export const generateTutorResponse = async (userMessage: string, context: string) => {
    // Guidelines: Create a new instance right before making an API call.
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: `Current Lesson Context:\n${context}\n\nStudent's Inquiry: ${userMessage}`,
            config: {
                systemInstruction: "You are 'Captain AI', a senior naval instructor helping Petty Officer candidates master Past Simple grammar. Provide concise, professional, and encouraging answers related to the naval lesson context. Use military terminology appropriately.",
                temperature: 0.7,
            },
        });
        
        // Guidelines: Use the .text property directly.
        return response.text || "No response received from comms.";
    } catch (error) {
        console.error("AI Tutor Signal Error:", error);
        return "Communications interrupted. Please re-send your inquiry.";
    }
};

/**
 * Generates audio buffer from text using the Gemini TTS model.
 */
export const generateSpeech = async (text: string): Promise<AudioBuffer | null> => {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-preview-tts",
            contents: [{ parts: [{ text }] }],
            config: {
                responseModalities: ['AUDIO' as any],
                speechConfig: {
                    voiceConfig: {
                        prebuiltVoiceConfig: { voiceName: 'Kore' },
                    },
                },
            },
        });

        const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
        if (!base64Audio) return null;

        const outputAudioContext = new (window.AudioContext || (window as any).webkitAudioContext)({sampleRate: 24000});

        // Guidelines: Manual Base64 decode
        const decode = (base64: string) => {
            const binaryString = atob(base64);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes;
        };

        // Guidelines: Decode raw PCM audio data
        const decodeAudioData = async (data: Uint8Array, ctx: AudioContext, sampleRate: number, numChannels: number): Promise<AudioBuffer> => {
            const dataInt16 = new Int16Array(data.buffer);
            const frameCount = dataInt16.length / numChannels;
            const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);
            for (let channel = 0; channel < numChannels; channel++) {
                const channelData = buffer.getChannelData(channel);
                for (let i = 0; i < frameCount; i++) {
                    channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
                }
            }
            return buffer;
        };

        return await decodeAudioData(decode(base64Audio), outputAudioContext, 24000, 1);
    } catch (e) {
        console.error("Audio Generation Failure:", e);
        return null;
    }
};
