import React, { FC, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { Phonetic, Phonetics } from '../../app/domain/wordData';

type CardPhoneticTypes = {
  phonetic: Phonetic;
  phonetics: Phonetics;
}

const StyledCardPhonetic = styled.div`
  .word__phonetic {
    color: #333;
    font-size: 1.25rem;
  }

  .word__alternate-phonetics {
    display: flex;
    color: #333;

    .alternate-phonetic {
      text-decoration: underline;

      &:hover {
        text-decoration: none;
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
        <div key={i} onClick={playAudio} className="alternate-phonetic" title="Click to play audio">
          <span className="alternate-phonetic__text">{text}</span>
          <audio className="alternate-phonetic__audio">
            <source src={audioLink} type="audio/mp3"/>
          </audio> 
        </div>
      );
    };
  })

  return (
    <StyledCardPhonetic className="word__phonetics">
      <span className="word__phonetic" title="Main phonetic">{phonetic}</span>
      <div className="word__alternate-phonetics">
        {alternatePhonetics}
      </div>
    </StyledCardPhonetic>
  )
}

export default CardPhoneticContainer;