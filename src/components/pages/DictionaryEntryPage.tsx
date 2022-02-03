import React, { useEffect, useState } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { parseWordData } from '../../app/interfaces/parseWordData';
import Loading from '../Loading';
import styled from '@mui/system/styled';
import { WordData } from '../../app/domain/wordData';
import Word from '../Word';

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
	const [wordData, setWordData] = useState<WordData | undefined | null>(
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

	return (
		<StyledWordPage className="Word-Page">
			{wordData ? (
				<Word
					{...{
						word: wordData?.word,
						results: wordData?.results,
						pronounciations: wordData?.pronounciations,
					}}
				/>
			) : wordData === null ? (
				<Redirect to="/no-entry-found" />
			) : (
				<Loading />
			)}
		</StyledWordPage>
	);
};

export default DictionaryEntryPage;
