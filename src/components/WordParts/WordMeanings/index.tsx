import React, { FC } from 'react';
import WordMeaning from './WordMeaning';
import { Meaning } from '../../../app/domain/wordData';

type WordMeaningsTypes = {
  meanings: Meaning[];
}

const WordMeanings: FC<WordMeaningsTypes> = ({ meanings }) => {
  const wordMeaningEls = meanings.map((meaning, i) => <WordMeaning key={`word-meaning-${i}`} {...{ meaning }}/>)
  return <div className="word__meanings">{wordMeaningEls}</div>;
};

export default WordMeanings;