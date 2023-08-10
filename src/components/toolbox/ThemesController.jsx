import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

import ThemesSelector from '../ThemesSelector';

const Container2 = styled.div`
  ${tw`
  mt-3
  bg-frame-xgray
  rounded-lg
  pt-2
`}
`;

const Heading1 = styled.h1`
  ${tw`

  text-2xl
  text-color-bright
  font-normal


  text-center
  mb-2
`}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Section1 = styled.div`
  ${tw`
  flex
  `}
`;

const Section2 = styled.div`
  ${tw`
    pt-0
    px-1
    md:grid grid-cols-1 auto-cols-max
    `}
`;

const CarouselC = styled.h1`
  ${tw`
    mt-5
`}
  margin: 0px, 0px;
  padding: 2px;
  overflow-y: auto;
  white-space: nowrap;
  max-width: 100%;
  max-height: 200px;
`;

const ThemesController = () => {
  return (
    <Container2>
      <Section1>
        <Heading1>עיצובים שמורים</Heading1>
      </Section1>
      <ThemesSelector />
      <Section2 style={{ paddingBottom: '20px' }}>
        <CarouselC></CarouselC>
      </Section2>
    </Container2>
  );
};

export default ThemesController;
