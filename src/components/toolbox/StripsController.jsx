import React from 'react';

import { useRecoilState } from 'recoil';

import { profile as profileInStore } from '../recoil/root';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

const Container2 = styled.div`
  ${tw`
  mt-3

  rounded-lg
  pt-2

`}
  padding: 10px;
  width: 100%;
  max-height: 150px;
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
  flex-direction: column;
`;

const ShapesController = ({ header }) => {
  // const [stripsRemaining] = useRecoilState(numberOfStripToUseInStore);
  const [profile] = useRecoilState(profileInStore);

  const stripsRemaining = profile?.doc?.leftStrips;

  return (
    <Container2>
      <Section1>
        <Heading1> {`שלום ${profile?.doc?.name}`} </Heading1>
        <Heading1>כמות {header} לשימוש</Heading1>
        <Heading1>
          <span
            style={{
              color:
                parseInt(stripsRemaining) > 100
                  ? 'lightgreen'
                  : parseInt(stripsRemaining) > 30
                  ? 'orange'
                  : 'red',
            }}
          >
            <b>{stripsRemaining}</b>
          </span>
        </Heading1>
      </Section1>
    </Container2>
  );
};

export default ShapesController;
