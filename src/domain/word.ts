export type Phonetic = {
  text: string;
  audio: string;
}

export type PartOfSpeech = "noun" | "verb" | "intransitive verb" | "adjective" | "exlamation" | "prefix" | "suffix" | "combining form";

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

export type Word = {
  word: string;
  phonetic: string;
  phonetics: Phonetic[];
  origin: string;
  meanings: Meaning[];
}
