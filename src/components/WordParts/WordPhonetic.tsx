import React, { MouseEventHandler } from 'react';
import styled from '@mui/system/styled';
import { Phonetic, Phonetics } from '../../app/domain/wordData';
import { Typography } from '@mui/material';

type CardPhoneticProps = {
	phonetic: Phonetic;
	phonetics: Phonetics;
};

const StyledCardPhonetic = styled('div')({
	'.word__phonetic': {
		color: '#333',
		fontSize: '1.25em',
	},

	'.word__alternate-phonetics': {
		display: 'flex',
		color: '#333',

		'.alternate-phonetic': {
			textDecoration: 'underline',

			'&:hover': {
				textDecoration: 'none',
				cursor: 'pointer',
			}
		}
	}
});

const CardPhoneticContainer = ({
	phonetic,
	phonetics,
}: CardPhoneticProps): JSX.Element => {
	const playAudio: MouseEventHandler<HTMLDivElement> = (event) => {
		const target = event.currentTarget;
		const audioEl: HTMLMediaElement | null = target.querySelector(
			'.alternate-phonetic__audio'
		);
		if (audioEl) audioEl.play();
	};

	const alternatePhonetics = phonetics.map(({ text, audio }, i) => {
		const audioLink = `https:${audio}`;
		if (text && audio) {
			return (
				<div
					key={i}
					onClick={playAudio}
					className="alternate-phonetic"
					title="Click to play audio">
					<Typography className="alternate-phonetic__text">{text}</Typography>
					<audio className="alternate-phonetic__audio">
						<source src={audioLink} type="audio/mp3" />
					</audio>
				</div>
			);
		}
	});

	return (
		<StyledCardPhonetic className="word__phonetics">
			<Typography className="word__phonetic" title="Main phonetic">
				{phonetic}
			</Typography>
			<div className="word__alternate-phonetics">{alternatePhonetics}</div>
		</StyledCardPhonetic>
	);
};

export default CardPhoneticContainer;
