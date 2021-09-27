import { WordData } from '../domain/wordData'

export const getWordData = async (word: string): Promise<WordData[] | null> => {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else return null;
}