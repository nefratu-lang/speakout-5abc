// services/geminiService.ts içeriğini bu şekilde güncelleyin:

/**
 * API trafiğini kesmek için statik hale getirildi.
 */
export const generateTutorResponse = async (userMessage: string, context: string) => {
    // API çağrısı tamamen kaldırıldı.
    return "Sistem şu anda statik moddadır. Canlı AI desteği devre dışı bırakılmıştır.";
};

/**
 * Ses üretimini (TTS) devre dışı bırakır.
 */
export const generateSpeech = async (text: string): Promise<AudioBuffer | null> => {
    // API çağrısı kaldırıldı, her zaman null döner.
    return null;
};
