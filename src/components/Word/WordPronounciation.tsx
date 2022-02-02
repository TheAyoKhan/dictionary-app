import React from 'react';
import Typography from '@mui/material/Typography';
import { PartOfSpeech, Pronounciations } from '../../app/domain/wordData';

type WordPronounciationProps = {
	pronounciations: Pronounciations;
};

const WordPronounciation = ({
	pronounciations,
}: WordPronounciationProps): JSX.Element => {
	return 'all' in pronounciations ? (
		<Typography className="word__pronounciations--all">
			{pronounciations.all}
		</Typography>
	) : (
		<div className="word__pronounciationss">
			{Object.keys(pronounciations).map((partOfSpeech: PartOfSpeech) => {
				return (
					<div
						className="word__pronounciations--specific"
						key={`pronounciation-${partOfSpeech}`}>
						<Typography className="word__pronounciations--specific__partOfSpeech">
							{pronounciations[partOfSpeech]}
						</Typography>
						<Typography className="word__pronounciations--specific__pronounciation">
							{pronounciations[partOfSpeech]}
						</Typography>
					</div>
				);
			})}
		</div>
	);
};

export default WordPronounciation;
