import React, { useEffect, useState } from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { parseWordData } from '../../app/interfaces/parseWordData';
import { WordData } from '../../app/domain/wordData';
import Loading from '../Loading';
import Word from '../WordParts/Word';
import styled from 'styled-components';

const StyledWordPage = styled.div`
	padding: 0.5em;
	display: grid;
	flex-direction: column;
	place-items: center;

	.word {
		margin-bottom: 1.5em;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

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
