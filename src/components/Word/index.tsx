import Typography from '@mui/material/Typography';
import React from 'react';
import { Result, Pronounciations } from '../../app/domain/wordData';
import WordPronounciation from './WordPronounciation';
import WordResult from './WordResult';

type WordProps = {
	word: string;
	results?: Result[];
	pronounciations?: Pronounciations;
};

const Word = ({ word, results, pronounciations }: WordProps): JSX.Element => {
	const wordResultEls = results?.length ? (
		results.map((result, i) => (
			<WordResult result={result} key={`${word}-result-${i}`} />
		))
	) : (
		<Typography>Sorry, no result data</Typography>
	);

	return (
		<div className="word">
			<Typography variant="h6" className="word__text">
				{word}
			</Typography>
			{wordResultEls}
			{pronounciations && <WordPronounciation {...{ pronounciations }} />}
		</div>
	);
};

export default Word;
