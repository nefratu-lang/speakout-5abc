export const ReadingChallengeSlide: React.FC<{ data: SlideData }> = ({ data }) => {
    const [inputs, setInputs] = useState<Record<number, string>>({});
    const [submitted, setSubmitted] = useState(false);
    
    // Ses Kontrolü İçin State ve Ref
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const toggleAudio = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="h-full flex flex-col bg-slate-950 text-slate-100 overflow-y-auto custom-scrollbar">
            {/* Ses Dosyası Elementi - /media/namik.mp3 yolunu kullanır */}
            <audio 
                ref={audioRef} 
                src="/media/namik.mp3" 
                onEnded={() => setIsPlaying(false)} 
            />

            <div className="w-full bg-slate-900 border-b border-white/10 p-6 sticky top-0 z-20 flex justify-between items-center shadow-2xl">
                <h2 className="text-3xl font-black font-mono text-red-600 uppercase tracking-widest animate-pulse">{data.title}</h2>
                
                <div className="flex items-center gap-4">
                    {/* Ses Çalar Butonu - Play/Pause Kontrolü */}
                    <button 
                        onClick={toggleAudio}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-black font-mono transition-all uppercase tracking-widest border-2 ${
                            isPlaying 
                            ? 'bg-amber-600 border-amber-400 text-slate-900 shadow-[0_0_20px_rgba(245,158,11,0.4)]' 
                            : 'bg-slate-800 border-slate-600 text-white hover:bg-slate-700'
                        }`}
                    >
                        {isPlaying ? (
                            <>
                                <span className="animate-pulse">⏸</span> PAUSE
                            </>
                        ) : (
                            <>
                                <span>▶️</span> LISTEN
                            </>
                        )}
                    </button>

                    <button onClick={() => setSubmitted(true)} className="bg-red-700 text-white font-black font-mono py-3 px-8 rounded-xl shadow-lg hover:bg-red-600 transition-all uppercase tracking-widest border-2 border-red-500">
                        DECODE INTEL
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto w-full p-6 md:p-12 space-y-10 pb-32">
                <div className="bg-slate-900/50 p-10 md:p-16 rounded-3xl font-serif text-2xl md:text-3xl leading-[2] text-slate-200 shadow-2xl border border-white/5 backdrop-blur-xl relative">
                    <div className="absolute top-0 right-10 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-full font-mono font-black text-xs uppercase tracking-[0.5em]">Classified Log</div>
                    <h3 className="text-sm font-mono text-blue-500 mb-8 uppercase tracking-[0.4em] border-b border-white/10 pb-4">PART 1: THE NAMIK EKIN CHRONICLES</h3>
                    
                    {data.content.parts[0].textSegments.map((seg: string, i: number) => (
                        <React.Fragment key={i}>
                            {seg}
                            {data.content.parts[0].gaps.find((g: any) => g.id === i + 1) && (
                                <span className="relative group inline-block mx-2">
                                    <input 
                                        type="text" 
                                        value={inputs[i+1] || ""} 
                                        onChange={(e) => setInputs({...inputs, [i+1]: e.target.value})} 
                                        className={`w-48 bg-slate-950 border-b-4 text-center py-1 outline-none font-mono text-2xl transition-all font-black ${submitted ? (inputs[i+1]?.toLowerCase().trim() === data.content.parts[0].gaps.find((g:any)=>g.id===i+1).answer.toLowerCase() ? 'text-green-500 border-green-500 bg-green-900/20' : 'text-red-500 border-red-600 bg-red-900/20') : 'border-white/20 focus:border-blue-500'}`} 
                                    />
                                    {submitted && inputs[i+1]?.toLowerCase().trim() !== data.content.parts[0].gaps.find((g:any)=>g.id===i+1).answer.toLowerCase() && (
                                        <span className="absolute -bottom-10 left-0 text-xs text-red-500 font-mono font-black uppercase bg-slate-950 px-3 py-1.5 rounded-xl border border-red-900 shadow-2xl z-20 whitespace-nowrap">
                                            {data.content.parts[0].gaps.find((g:any)=>g.id===i+1).answer}
                                        </span>
                                    )}
                                </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};
