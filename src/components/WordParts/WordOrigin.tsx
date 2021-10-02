import React, { FC } from 'react';
import { Origin } from '../../domain/wordData'

type WordOriginTypes = {
  origin: Origin
}

const WordOrigin: FC<WordOriginTypes> = ({origin}) => {
  return <div className="word__origin">{origin}</div>
}

export default WordOrigin;