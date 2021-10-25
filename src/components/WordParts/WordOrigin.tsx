import React from 'react';
import { Origin } from '../../app/domain/wordData';

type WordOriginProps = {
	origin: Origin;
};

const WordOrigin = ({ origin }: WordOriginProps): JSX.Element => {
	return <div className="word__origin">{origin}</div>;
};

export default WordOrigin;
