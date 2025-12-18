// ... (Diğer importlar ve bileşenler aynı kalacak)

// --- Reading Slide (Updated with Zoom/Lightbox) ---
export const ReadingSlide: React.FC<{ data: SlideData }> = ({ data }) => {
  const [activeVocab, setActiveVocab] = useState<Vocabulary | null>(null);
  const [foundCount, setFoundCount] = useState(0);
  // YENİ: Zoom durumunu kontrol eden state
  const [isZoomed, setIsZoomed] = useState(false);
  
  const totalVerbs = useMemo(() => {
    return (data.content.text.match(/\*\*/g) || []).length / 2;
  }, [data.content.text]);

  const isComplete = foundCount === totalVerbs && totalVerbs > 0;

  // Reset logic when slide changes
  useEffect(() => {
    setFoundCount(0);
    setActiveVocab(null);
    setIsZoomed(false); // Slide değişince zoom'u kapat
  }, [data.id]);

  const paragraphs = data.content.text.split(/\n\s*\n/);
  
  return (
    <div key={data.id} className="h-full w-full flex flex-col md:flex-row bg-white overflow-hidden animate-in fade-in duration-500">
      <div className="flex-1 flex flex-col relative h-1/2 md:h-full overflow-y-auto border-r border-slate-200 custom-scrollbar">
          <div className="p-4 border-b border-slate-200 bg-slate-50 sticky top-0 z-20 flex justify-between items-center px-6 shadow-sm">
             <div>
                <h2 className="text-2xl font-black font-mono text-slate-900 uppercase tracking-tighter">{data.title}</h2>
                <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-0.5">Find and click all Past Tense verbs in the text!</p>
             </div>
             <div className={`transition-all duration-500 px-4 py-2 rounded-xl font-mono font-black shadow-lg flex flex-col items-center min-w-[120px] ${isComplete ? 'bg-green-600 scale-105' : 'bg-blue-600'}`}>
                <span className="text-[10px] uppercase opacity-80">{isComplete ? 'Area Secured' : 'Past Actions'}</span>
                <span className="text-xl flex items-center gap-2">
                    {foundCount} / {totalVerbs}
                    {isComplete && <span className="text-white animate-in zoom-in">✓</span>}
                </span>
             </div>
          </div>
          <div className="p-6 md:p-16 flex-1 font-serif text-xl md:text-4xl leading-[1.8] text-slate-800 space-y-12">
             {paragraphs.map((para: string, idx: number) => (
                <div key={idx} className="relative pl-10 border-l-8 border-slate-100 hover:border-blue-600 transition-colors">
                    <p><ReadingParser text={para} onVerbFound={() => setFoundCount(c => c + 1)} /></p>
                </div>
             ))}
          </div>
          <div className="p-4 bg-slate-50 border-t border-slate-200 sticky bottom-0 z-20">
              <div className="flex gap-2 overflow-x-auto pb-2 px-2 custom-scrollbar">
                  {data.content.vocabulary?.map((v: Vocabulary, idx: number) => (
                      <button key={idx} onClick={() => setActiveVocab(v)} className="whitespace-nowrap px-5 py-2.5 bg-white border-2 border-slate-200 text-slate-800 text-sm font-mono font-black rounded-xl shadow-sm hover:border-blue-600 hover:text-blue-700 transition-all active:scale-95">
                          {v.word}
                      </button>
                  ))}
              </div>
               {activeVocab && (
                   <div className="absolute bottom-full left-0 right-0 bg-white border-t-8 border-blue-600 p-8 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] z-30 animate-in slide-in-from-bottom-5">
                       <div className="flex justify-between items-start max-w-3xl mx-auto">
                           <div>
                               <span className="text-blue-600 font-mono text-[10px] uppercase font-black tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Intel Definition</span>
                               <div className="font-black text-slate-900 text-3xl mt-3">{activeVocab.word}</div>
                               <div className="text-slate-700 text-xl italic mt-4 leading-relaxed font-serif bg-slate-50 p-4 rounded-xl border-l-4 border-slate-200">{activeVocab.definition}</div>
                           </div>
                           <button onClick={() => setActiveVocab(null)} className="text-2xl bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-50 hover:text-red-600 transition-colors shadow-inner">✕</button>
                       </div>
                   </div>
               )}
          </div>
      </div>
      
      {/* Sağ Taraf - Görsel Alanı (GÜNCELLENDİ) */}
      <div 
        className="flex-1 h-1/2 md:h-full relative bg-slate-200 overflow-hidden group cursor-pointer"
        onClick={() => setIsZoomed(true)} // Tıklayınca zoom aç
      >
          {/* object-cover yerine object-contain kullanabiliriz ama modal daha iyi. Şimdilik cover kalsın ama tıklanabilir olduğunu gösterelim */}
          <img src={data.content.backgroundImage} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[8s] ease-out" alt="Visual Recon" />
          
          {/* Zoom İkonu (Kullanıcıya tıklanabileceğini gösterir) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-black/30 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-50 group-hover:scale-100 border-2 border-white/50">
             <span className="text-3xl">🔍</span>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-slate-950/20 pointer-events-none"></div>
          <div className="absolute bottom-6 right-6 text-white text-[10px] font-mono opacity-50 uppercase tracking-widest pointer-events-none">Visual Recon Area // TAP TO ENLARGE</div>
      </div>

      {/* YENİ: Tam Ekran Modal (Lightbox) */}
      {isZoomed && (
        <div 
            className="fixed inset-0 z-[9999] bg-slate-950/95 flex items-center justify-center p-4 md:p-10 cursor-zoom-out animate-in fade-in duration-200 backdrop-blur-md"
            onClick={(e) => {
                e.stopPropagation();
                setIsZoomed(false);
            }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <img 
                    src={data.content.backgroundImage} 
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border-4 border-slate-800" 
                    alt="Full Screen Intel" 
                />
                <div className="absolute bottom-4 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-mono pointer-events-none">
                    TAP ANYWHERE TO CLOSE
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
