import React, { useEffect, useState } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { parseWordData } from '../../app/interfaces/parseWordData';
import { WordData } from '../../app/domain/wordData';
import Loading from '../Loading';
import Word from '../WordParts/Word';
import styled from '@mui/system/styled';

const StyledWordPage = styled('div')(({ theme }) => ({
	padding: theme.spacing(1),
	display: 'grid',
	flexDirection: 'column',
	placeItems: 'center',

	'.word': {
		marginBottom: theme.spacing(3),

		'&:last-child': {
			marginBottom: 0,
		},
	},
}));

const DictionaryEntryPage = (): JSX.Element => {
	const [wordData, setWordData] = useState<WordData[] | undefined | null>(
		undefined
	);

	const match = useRouteMatch<{ requestedWord: string }>(
		'/dictionary/:requestedWord'
	);

	const { requestedWord } = match?.params ?? {};

	useEffect(() => {
		if (requestedWord) {
			(async () => {
				const data = await parseWordData(requestedWord);
				setWordData(data || null);
			})();
		} else setWordData(null);

		document.title = `${requestedWord} - AyoDictionary`;
	}, [requestedWord]);

	const wordDataEls = wordData ? (
		wordData.map((data, i) => <Word {...data} key={i} />)
	) : (
		<Loading />
	);

	return (
		<StyledWordPage className="Word-Page">
			{wordData ? (
				wordDataEls
			) : wordData === null ? (
				<Redirect to="/" />
			) : (
				<Loading />
			)}
		</StyledWordPage>
	);
};

export default DictionaryEntryPage;
