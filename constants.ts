import { SlideType, SlideData } from './types';

// --- GÖRSEL VE VİDEO IMPORTLARI ---
// Dosyaların 'media' klasöründe ve constants.ts ile aynı seviyede olduğunu varsayıyoruz.
import imgDecision from './media/reading1.jpg';
import imgArrival from './media/reading2.jpg';
import imgTraining from './media/reading3.jpg';
import imgOath from './media/reading4.jpg';
import videoGemiler from './media/gemiler.mp4'; 

export const LESSON_TITLE = "UNIT 5: FROM CANDIDATE TO SAILOR";

const TEXT_SCENE_1 = `Last year, Mustafa **decided** to change his life. He **wanted** to join the Navy. First, he **studied** hard for the MSÜ exams. It **was** difficult, but he **passed** the tests. Then, he **exercised** every day for the sports interview. He **passed** the health checks too. He **was** officially a 'Candidate'.`;
const TEXT_SCENE_2 = `After that, he **travelled** to Yalova. He **arrived** at the school gate early in the morning. The sun **was** bright. He **checked** his documents and **entered** the campus with other candidates. He **was** nervous, but he **believed** in himself. The journey **started** here.`;
const TEXT_SCENE_3 = `The 'Adaptation Training' **started**. Mustafa **worked** hard with his friends. They **cleaned** the dorms and **listened** to their commanders. He **learned** discipline. He **walked** for kilometers and **stayed** strong. He **was** not just a candidate anymore; he **was** a 'Recruit'.`;
const TEXT_SCENE_4 = `Finally, the uniforms **arrived**. But there **was** a funny problem! Mustafa's uniform **was** too big (XL), and his friend's uniform **was** too small (S). Nobody **had** the right size! It **was** chaotic. Everyone **swapped** jackets and trousers. They **fixed** the problem together. Then, they **looked** perfect. They **took** the oath and **became** sailors.`;

export const SLIDES: SlideData[] = [
  { 
    id: 0, 
    type: SlideType.COVER, 
    title: "PHASE 1: THE DECISION", 
    subtitle: "Preparation & Exams", 
    content: { 
      backgroundImage: imgDecision, 
      videoBg: videoGemiler
    } 
  },
  { 
    id: 1, 
    type: SlideType.OBJECTIVES, 
    title: "MISSION BRIEFING", 
    subtitle: "LESSON PLAN & TACTICAL TARGETS", 
    content: { 
      videoBg: "https://assets.mixkit.co/videos/preview/mixkit-submarine-underwater-exploring-the-ocean-floor-34440-large.mp4",
      objectives: [
        "Master Past Simple with Regular Verbs (+ed)",
        "Read and understand a military transformation story",
        "Decode past events in chronological order",
        "Formulate 'Wh-' questions for investigation",
        "Practice negative structures using 'didn't'"
      ],
      expectedOutcomes: [
        "Identifying -ed verb patterns in professional texts",
        "Successful completion of the SAT Legend verification",
        "Achieving the rank of Petty Officer (A2 Level)"
      ],
      grammar: [
        "Affirmative: Subject + Verb + ed",
        "Negative: Subject + didn't + Base Verb",
        "Question: Did + Subject + Base Verb?"
      ]
    } 
  },
  { id: 2, type: SlideType.READING, title: "PHASE 1: THE DECISION", subtitle: "Preparation & Exams", content: { 
    backgroundImage: imgDecision, 
    phase: 1, 
    totalPhases: 4, 
    vocabulary: [
      { word: "decide (v.)", definition: "to choose something after thinking about it carefully" }, 
      { word: "study (v.)", definition: "to spend time learning about a subject" }, 
      { word: "pass (v.)", definition: "to succeed in an exam or a test" }, 
      { word: "difficult (adj.)", definition: "not easy; needing a lot of effort" },
      { word: "officially (adv.)", definition: "in an open and formal way" },
      { word: "candidate (n.)", definition: "a person who is trying to get a job or position" }
    ], 
    text: TEXT_SCENE_1 
  } },
  { id: 3, type: SlideType.READING, title: "PHASE 2: THE ARRIVAL", subtitle: "Yalova Naval School", content: { 
    backgroundImage: imgArrival, 
    phase: 2, 
    totalPhases: 4, 
    vocabulary: [
      { word: "arrive (v.)", definition: "to reach a place at the end of a journey" }, 
      { word: "gate (n.)", definition: "a large door used to enter a walled area" }, 
      { word: "nervous (adj.)", definition: "feeling worried or afraid about something" }, 
      { word: "believe (v.)", definition: "to feel sure that something is true" },
      { word: "journey (n.)", definition: "the act of travelling from one place to another" },
      { word: "early (adv.)", definition: "near the beginning of a period of time" }
    ], 
    text: TEXT_SCENE_2 
  } },
  { id: 4, type: SlideType.READING, title: "PHASE 3: TRANSFORMATION", subtitle: "Intibak Training", content: { 
    backgroundImage: imgTraining, 
    phase: 3, 
    totalPhases: 4, 
    vocabulary: [
      { word: "discipline (n.)", definition: "the practice of training people to obey rules" }, 
      { word: "clean (v.)", definition: "to remove dirt or marks from something" }, 
      { word: "commander (n.)", definition: "a person who is in charge of a military group" }, 
      { word: "stay (v.)", definition: "to continue to be in a particular state" },
      { word: "strong (adj.)", definition: "having great physical power or ability" },
      { word: "recruit (n.)", definition: "a person who has just joined the armed forces" }
    ], 
    text: TEXT_SCENE
