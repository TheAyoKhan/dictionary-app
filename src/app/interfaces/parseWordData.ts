import { getWordData, Requester } from '../application/getWordData';
import { WordData } from '../domain/wordData';
import axios, { AxiosResponse } from 'axios';

export const parseWordData = async (
	word: string
): Promise<WordData | undefined> => {
	const options = {
		headers: {
			'X-RapidAPI-Key': process.env.WORDS_API_KEY,
		},
	};

	const res = await getWordData(
		'https://wordsapiv1.p.rapidapi.com/words',
		word,
		options,
		axios.get as Requester<AxiosResponse>
	);
	if (res?.status === 200) return res.data;
	return;
};
