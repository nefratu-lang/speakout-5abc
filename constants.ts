import { SlideType, SlideData } from './types';

// --- BURASI DEĞİŞTİ: String yerine Import yapıyoruz ---
import imgDecision from './components/media/reading1.jpg';
import imgArrival from './components/media/reading2.jpg';
import imgTraining from './components/media/reading3.jpg';
import imgOath from './components/media/reading4.jpg';
// Videoyu da import ediyoruz
import videoGemiler from './components/media/gemiler.mp4'; 

export const LESSON_TITLE = "UNIT 5: FROM CANDIDATE TO SAILOR";

// ... (TEXT_SCENE değişkenleri aynı kalabilir) ...

export const SLIDES: SlideData[] = [
  { 
    id: 0, 
    type: SlideType.COVER, 
    title: "PHASE 1: THE DECISION", 
    subtitle: "Preparation & Exams", 
    content: { 
      backgroundImage: imgDecision, // Artık import edilen değişkeni kullanıyoruz
      videoBg: videoGemiler         // Videoyu da değişkenden alıyoruz
    } 
  },
  // ...
  { 
    id: 2, 
    type: SlideType.READING, 
    // ...
    content: { 
      backgroundImage: imgDecision, // String değil değişken
      // ...
    } 
  },
  { 
    id: 3, 
    type: SlideType.READING, 
    // ...
    content: { 
      backgroundImage: imgArrival, // Değişken
      // ...
    } 
  },
  { 
    id: 4, 
    type: SlideType.READING, 
    // ...
    content: { 
      backgroundImage: imgTraining, // Değişken
      // ...
    } 
  },
  { 
    id: 5, 
    type: SlideType.READING, 
    // ...
    content: { 
      backgroundImage: imgOath, // Değişken
      // ...
    } 
  },
  // ... diğerleri aynı kalabilir
];
