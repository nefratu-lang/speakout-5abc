
export enum SlideType {
  COVER = 'COVER',
  OBJECTIVES = 'OBJECTIVES',
  ICE_BREAKER = 'ICE_BREAKER',
  READING = 'READING',
  COMPREHENSION_TF = 'COMPREHENSION_TF',
  COMPREHENSION_MC = 'COMPREHENSION_MC',
  GRAMMAR = 'GRAMMAR',
  GRAMMAR_BANK = 'GRAMMAR_BANK',
  GRAMMAR_ANALYSIS = 'GRAMMAR_ANALYSIS',
  DRILL = 'DRILL',
  SPEAKING = 'SPEAKING',
  MEDIA = 'MEDIA',
  MATCHING = 'MATCHING',
  CHECKLIST = 'CHECKLIST',
  QA = 'QA',
  SCRAMBLE = 'SCRAMBLE', 
  DEBRIEF = 'DEBRIEF',
  IMPERATIVES = 'IMPERATIVES',
  MISSION_LOG = 'MISSION_LOG',
  VERB_CHALLENGE = 'VERB_CHALLENGE',
  DAILY_REPORT = 'DAILY_REPORT',
  READING_CHALLENGE = 'READING_CHALLENGE',
  RADAR_SCAN = 'RADAR_SCAN',
  LEGEND_DOSSIER = 'LEGEND_DOSSIER', // New Interactive Activity
  GRAMMAR_RECAP = 'GRAMMAR_RECAP',
  TACTICAL_DRILL = 'TACTICAL_DRILL',
  CLASSROOM_GAME = 'CLASSROOM_GAME'
}

export interface Vocabulary {
  word: string;
  definition: string;
}

export interface KeyPoint {
  title: string;
  content: string;
  position: 'left' | 'right';
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content: any; 
}

export interface ScrambleItem {
  id: number;
  parts: string[]; 
  correctSentence: string;
}

export interface DebriefItem {
  text: string;
  reflection: string;
}

export interface VerbChallengeItem {
  base: string;
  past: string;
  type: 'regular' | 'irregular';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
