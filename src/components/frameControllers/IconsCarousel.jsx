import React from 'react';
import styled from 'styled-components';

import { useRecoilState } from 'recoil';

import { stageBgImageRef, selectedIconRef } from '../recoil/themes';
import { stageBgImageRef2, selectedIconRef2 } from '../recoil/themes2'; //eslint-disable-line
import { checkedStripInStore } from '../recoil/root';

const CarouselContainer = styled.div`
  background-color: #000000;
`;

const Carousel = ({ frames, setSelectedFrame }) => {
  const [stageBgImage, setStageBgImage] = useRecoilState(stageBgImageRef); //eslint-disable-line
  const [iconRef, setIconRef] = useRecoilState(selectedIconRef); //eslint-disable-line
  const [iconRef2, setIconRef2] = useRecoilState(selectedIconRef2); //eslint-disable-line
  const [checkedStrip] = useRecoilState(checkedStripInStore); //eslint-disable-line

  const handleSelectIcon = (e) => {
    let newImg = document.createElement('img');
    newImg.crossOrigin = 'AnonymousIcon';
    newImg.height = 90;
    newImg.width = 90;
    newImg.src = e;
    if (!!checkedStrip) {
      setIconRef(e);
    } else {
      setIconRef2(e);
    }

    setSelectedFrame(newImg);
  };

  return (
    <CarouselContainer>
      {Object.keys(frames).map((key) => (
        <span
          key={key}
          onClick={() => handleSelectIcon(frames[key])}
          onKeyDown={() => handleSelectIcon(frames[key])}
          role="button"
          tabIndex={0}
        >
          <img
            src={frames[key]}
            alt="some alt text"
            style={{ width: '50px', height: '50px', margin: '10px' }}
          />
        </span>
      ))}
    </CarouselContainer>
  );
};

export default Carousel;
