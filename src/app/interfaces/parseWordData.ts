import { getWordData } from '../application/getWordData';
import { WordData } from '../domain/wordData';

export const parseWordData = async (word: string): Promise<WordData[] | undefined> => {
  const data = await getWordData(word, fetch);
  if (data?.ok) return data.json();
  return;
};