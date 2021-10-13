export type Word = string;

export type Phonetic = string;

export type Phonetics = {
  text: string;
  audio: string;
}[]

export type Origin = string;

export type PartOfSpeech = string;

export type Definition = {
  definition: string;
  example: string;
  synonyms: string[];
  antonyms: string[];
}

export type Meaning = {
  partOfSpeech: PartOfSpeech;
  definitions: Definition[]
}

export type WordData = {
  word: Word;
  phonetic: Phonetic;
  phonetics: Phonetics;
  origin: Origin;
  meanings: Meaning[];
}
