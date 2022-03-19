import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography';

type WordAntonymProps = {
	antonyms: string[];
};

const StyledWordAntonym = styled('div')({
	display: 'flex',
	flexDirection: 'column',

	'.word__antonym': {
		color: '#111',
		textDecoration: 'none',

		'&:hover': {
			textDecoration: 'underline',
		},
	},
});

const WordAntonym = ({ antonyms }: WordAntonymProps): JSX.Element => {
	const antonymEls = antonyms.map((antonym) => (
		<Link
			to={`/dictionary/${antonym}`}
			className="word__antonym"
			key={`word__antonym-${antonym}`}>
			{antonym}
		</Link>
	));

	return (
		<StyledWordAntonym className="word__antonym">
			<Typography variant="h6" className="antonyms-title">
				Antonyms
			</Typography>
			{antonymEls}
		</StyledWordAntonym>
	);
};

export default WordAntonym;
