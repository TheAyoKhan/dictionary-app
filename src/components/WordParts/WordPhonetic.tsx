import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Phonetic, Phonetics } from '../../domain/wordData';

type CardPhoneticTypes = {
  phonetic: Phonetic;
  phonetics: Phonetics;
}

const StyledCardPhonetic = styled.div`
  .phonetic {
    color: #333;
    font-size: 1.25rem;
  }

  .alternate-phonetics {
    display: flex;
    flex-direction: column;
    color: #444;

    > .alternate-phonetic {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

const CardPhoneticContainer: FC<CardPhoneticTypes> = ({ phonetic, phonetics }) => {
  const playAudio: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.currentTarget;
    const audioEl: HTMLMediaElement | null = target.querySelector(".alternate-phonetic__audio");
    if (audioEl) audioEl.play();
  };

  const alternatePhonetics = phonetics.map(({text, audio}, i) => {
    const audioLink = `https:${audio}`;
    if (text && audio) {
      return (
        <div key={i} onClick={playAudio} className="alternate-phonetic">
          <span className="alternate-phonetic__text">{text}</span>
          <audio className="alternate-phonetic__audio">
            <source src={audioLink} type="audio/mp3"/>
          </audio> 
        </div>
      );
    };
  })

  return (
    <StyledCardPhonetic className="phonetics">
      <span className="phonetic">{phonetic}</span>
      <div className="alternate-phonetics">
        {alternatePhonetics}
      </div>
    </StyledCardPhonetic>
  )
}

export default CardPhoneticContainer;