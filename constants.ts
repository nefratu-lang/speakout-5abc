import { SlideType, SlideData } from './types';

// İMPORTLARI SİL! (Bunlara gerek kalmadı)
// import imgDecision from ...  <-- SİL

// Yolları "/media/..." şeklinde "String" olarak yaz.
// Başına "/" koymak "public klasöründen al" demektir.

const imgDecision = '/media/reading1.jpg';
const imgArrival = '/media/reading2.jpg';
const imgTraining = '/media/reading3.jpg';
const imgOath = '/media/reading4.jpg';

export const LESSON_TITLE = "UNIT 5: FROM CANDIDATE TO SAILOR";

// ... (Metinler aynı kalsın) ...

export const SLIDES: SlideData[] = [
  { 
    id: 0, 
    type: SlideType.COVER, 
    title: "PHASE 1: THE DECISION", 
    subtitle: "Preparation & Exams", 
    content: { 
      backgroundImage: imgDecision, 
      videoBg: '/media/gemiler.mp4' // Videoyu da böyle yapıştır
    } 
  },
  // ... diğerleri zaten yukarıdaki değişkenleri kullanıyor, sorun yok.
];
