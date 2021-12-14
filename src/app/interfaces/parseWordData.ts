import { getWordData } from '../application/getWordData';
import { WordData } from '../domain/wordData';

export const parseWordData = async (
	word: string
): Promise<WordData[] | undefined> => {
	const res = await getWordData(
		'https://api.dictionaryapi.dev/api/v2/entries/en',
		word,
		fetch
	);
	if (res?.ok) return res.json();
	return;
};
