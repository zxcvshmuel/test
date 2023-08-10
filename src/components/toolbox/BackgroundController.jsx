import React, { useState, useEffect } from 'react'; //eslint-disable-line
// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import Switch from 'react-switch';
import FramesCarousel from '../frameControllers/FrameCarousel';
import { patterns as frameData } from '../../config/frameData';

const PATTERNS = {
  p1: frameData.patterns.p1,
  p2: frameData.patterns.p2,
  p3: frameData.patterns.p3,
  p4: frameData.patterns.p4,
  p5: frameData.patterns.p5,
  p6: frameData.patterns.p6,
  p7: frameData.patterns.p7,
  p8: frameData.patterns.p8,
  p9: frameData.patterns.p9,
  p10: frameData.patterns.p10,
  p11: frameData.patterns.p11,
  p12: frameData.patterns.p12,
  p13: frameData.patterns.p13,
  p14: frameData.patterns.p14,
  p15: frameData.patterns.p15,
  p16: frameData.patterns.p16,
  p17: frameData.patterns.p17,
  p18: frameData.patterns.p18,
  p19: frameData.patterns.p19,
  p20: frameData.patterns.p20,
  p21: frameData.patterns.p21,
  p22: frameData.patterns.p22,
  p23: frameData.patterns.p23,
  p24: frameData.patterns.p24,
  p25: frameData.patterns.p25,
  p26: frameData.patterns.p26,
  p27: frameData.patterns.p27,
  p28: frameData.patterns.p28,
  p29: frameData.patterns.p29,
  p30: frameData.patterns.p30,
  p31: frameData.patterns.p31,
  p32: frameData.patterns.p32,
  // p33: frameData.patterns.p33,
  // p34: frameData.patterns.p34,
  // p35: frameData.patterns.p35,
  // p36: frameData.patterns.p36,
  // p37: frameData.patterns.p37,
  // p38: frameData.patterns.p38,
  // p39: frameData.patterns.p39,
};

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
  w-3/4
  text-2xl
  text-color-bright
  font-normal
  col-span-2
  pb-2
  pl-4
  text-left
  mb-2
`}
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

const Toggle = styled.div`
  ${tw`
     pl-5
     pt-1.5
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
// const FormFillup = styled.input`
//   width: 93%;
//   padding: 12px 13px;
//   margin: auto;
//   margin-bottom: 10px;
//   display: inline-block;
//   border: 1px solid #666666;
//   border-radius: 4px;
//   box-sizing: border-box;
//   background-color: #333333;
//   color: #666666;
//   font-size: 1rem;
// `;

const BackgroundController = ({
  stageBgColor,
  setStageBgColor,
  colorOrImage,
  setColorOrImage,
  setSelectedFrame,
}) => {
  const toggleColorOrImage = () => {
    if (colorOrImage) {
      // setSelectedFrame(null);
      setColorOrImage(!colorOrImage);
    }
    setColorOrImage(!colorOrImage);
  };

  useEffect(() => {}, []);

  return (
    <Container2>
      <Section1>
        <Heading1>צבע</Heading1>
        <label htmlFor="material-switch">
          <Toggle>
            <Switch
              checked={!colorOrImage}
              onChange={toggleColorOrImage}
              onColor="#666666"
              onHandleColor="#ffffff"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              height={13}
              width={30}
              className="react-switch"
              id="material-switch"
            />
          </Toggle>
        </label>
      </Section1>
      {!colorOrImage && (
        <Section2>
          <span style={{ color: 'white ', fontSize: '18px' }}>לחץ על מנת לשנות צבע רקע</span>

          <input
            type="color"
            accept="color"
            value={stageBgColor}
            style={{
              width: '200px',
              height: '30px',
              backgroundColor: 'transparent',
              borderWidth: 0,
              cursor: 'pointer',
            }}
            id={'custom-color-stage-bg'}
            onChange={(e) => setStageBgColor(e.target.value)}
          />
        </Section2>
      )}

      <Section1 style={{ paddingTop: '25px' }}>
        <Heading1>רקעים</Heading1>
        <label htmlFor="material-switch">
          <Toggle>
            <Switch
              checked={colorOrImage}
              onChange={toggleColorOrImage}
              onColor="#666666"
              onHandleColor="#ffffff"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              height={13}
              width={30}
              className="react-switch"
              id="material-switch"
            />
          </Toggle>
        </label>
      </Section1>
      {colorOrImage && (
        <Section2 style={{ paddingBottom: '20px' }}>
          <CarouselC>
            <FramesCarousel frames={PATTERNS} setSelectedFrame={setSelectedFrame} />
          </CarouselC>
        </Section2>
      )}
    </Container2>
  );
};

export default BackgroundController;
