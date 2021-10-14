import React from 'react';
import WordMeaning from './WordMeaning';
import { Meaning } from '../../../app/domain/wordData';

type WordMeaningsProps = {
  meanings: Meaning[];
}

const WordMeanings = ({ meanings }: WordMeaningsProps): JSX.Element => {
  const wordMeaningEls = meanings.map((meaning, i) => <WordMeaning key={`word-meaning-${i}`} {...{ meaning }}/>)
  return <div className="word__meanings">{wordMeaningEls}</div>;
};

export default WordMeanings;