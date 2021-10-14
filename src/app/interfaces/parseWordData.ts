import { getWordData } from '../application/getWordData';
import { WordData } from '../domain/wordData';

export const parseWordData = async (word: string): Promise<WordData[] | undefined> => {
  const res = await getWordData(word, fetch);
  if (res?.ok) return res.json();
  return;
};