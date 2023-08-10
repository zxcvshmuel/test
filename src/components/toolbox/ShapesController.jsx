import React from 'react';

import { useRecoilState } from 'recoil';
import { scaleCircleMin, scaleCircleMax, offsetMin, offsetMax } from '../../config/config';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import {
  imageShape as shape,
  scaleSquare as scaleSquareInStore,
  scaleCircle as scaleCircleInStore,
  scaleStar as scaleStarInStore,
  scaleHeart as scaleHeartInStore,
  scaleHamsa as scaleHamsaInStore,
  scaleSquareInner as scaleSquareInnerInStore,
  scaleCircleInner as scaleCircleInnerInStore,
  scaleStarInner as scaleStarInnerInStore,
  scaleHeartInner as scaleHeartInnerInStore,
  scaleHamsaInner as scaleHamsaInnerInStore,
  offsetXCircle as offsetXCircleInStore,
  offsetYCircle as offsetYCircleInStore,
  offsetXHeart as offsetXHeartInStore,
  offsetYHeart as offsetYHeartInStore,
  offsetXStar as offsetXStarInStore,
  offsetYStar as offsetYStarInStore,
  innerRadiusStar as innerRadiusStarInStore,
  outerRadiusStar as outerRadiusStarInStore,
  offsetXHamsa as offsetXHamsaInStore,
  offsetYHamsa as offsetYHamsaInStore,
} from '../recoil/themes';
import {
  imageShape2 as shape2,
  scaleSquare2 as scaleSquareInStore2,
  scaleCircle2 as scaleCircleInStore2,
  scaleStar2 as scaleStarInStore2,
  scaleHeart2 as scaleHeartInStore2,
  scaleHamsa2 as scaleHamsaInStore2,
  scaleSquareInner2 as scaleSquareInnerInStore2,
  scaleCircleInner2 as scaleCircleInnerInStore2,
  scaleStarInner2 as scaleStarInnerInStore2,
  scaleHeartInner2 as scaleHeartInnerInStore2,
  scaleHamsaInner2 as scaleHamsaInnerInStore2,
  offsetXCircle2 as offsetXCircleInStore2,
  offsetYCircle2 as offsetYCircleInStore2,
  offsetXHeart2 as offsetXHeartInStore2,
  offsetYHeart2 as offsetYHeartInStore2,
  offsetXStar2 as offsetXStarInStore2,
  offsetYStar2 as offsetYStarInStore2,
  innerRadiusStar2 as innerRadiusStarInStore2,
  outerRadiusStar2 as outerRadiusStarInStore2,
  offsetXHamsa2 as offsetXHamsaInStore2,
  offsetYHamsa2 as offsetYHamsaInStore2,
} from '../recoil/themes2';

import { checkedStripInStore } from '../recoil/root';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';

import ThemesSelector from '../ThemesSelector'; //eslint-disable-line

const Container2 = styled.div`
  ${tw`
  mt-3
  bg-frame-xgray
  rounded-lg
  pt-2

`}

  padding: 10px;
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
//eslint-disable-next-line
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

const ShapesController = () => {
  const [imageShape, setImageShape] = useRecoilState(shape);
  const [imageShape2, setImageShape2] = useRecoilState(shape2);

  const [scaleSquare, setScaleSquare] = useRecoilState(scaleSquareInStore); //eslint-disable
  const [scaleCircle, setScaleCircle] = useRecoilState(scaleCircleInStore); //eslint-disable
  const [scaleStar, setScaleStar] = useRecoilState(scaleStarInStore); //eslint-disable
  const [scaleHeart, setScaleHeart] = useRecoilState(scaleHeartInStore); //eslint-disable-line
  const [scaleHamsa, setScaleHamsa] = useRecoilState(scaleHamsaInStore); //eslint-disable-line

  const [scaleSquare2, setScaleSquare2] = useRecoilState(scaleSquareInStore2); //eslint-disable
  const [scaleCircle2, setScaleCircle2] = useRecoilState(scaleCircleInStore2); //eslint-disable
  const [scaleStar2, setScaleStar2] = useRecoilState(scaleStarInStore2); //eslint-disable
  const [scaleHeart2, setScaleHeart2] = useRecoilState(scaleHeartInStore2); //eslint-disable-line
  const [scaleHamsa2, setScaleHamsa2] = useRecoilState(scaleHamsaInStore2); //eslint-disable-line

  const [scaleSquareInner, setScaleSquareInner] = useRecoilState(scaleSquareInnerInStore); //eslint-disable-line
  const [scaleCircleInner, setScaleCircleInner] = useRecoilState(scaleCircleInnerInStore); //eslint-disable-line
  const [scaleStarInner, setScaleStarInner] = useRecoilState(scaleStarInnerInStore); //eslint-disable-line
  const [scaleHeartInner, setScaleHeartInner] = useRecoilState(scaleHeartInnerInStore); //eslint-disable-line
  const [scaleHamsaInner, setScaleHamsaInner] = useRecoilState(scaleHamsaInnerInStore); //eslint-disable-line

  const [scaleSquareInner2, setScaleSquareInner2] = useRecoilState(scaleSquareInnerInStore2); //eslint-disable-line
  const [scaleCircleInner2, setScaleCircleInner2] = useRecoilState(scaleCircleInnerInStore2); //eslint-disable-line
  const [scaleStarInner2, setScaleStarInner2] = useRecoilState(scaleStarInnerInStore2); //eslint-disable-line
  const [scaleHeartInner2, setScaleHeartInner2] = useRecoilState(scaleHeartInnerInStore2); //eslint-disable-line
  const [scaleHamsaInner2, setScaleHamsaInner2] = useRecoilState(scaleHamsaInnerInStore2); //eslint-disable-line

  const [offsetXCircle, setOffsetXCircle] = useRecoilState(offsetXCircleInStore); //eslint-disable-line
  const [offsetYCircle, setOffsetYCircle] = useRecoilState(offsetYCircleInStore); //eslint-disable-line
  const [offsetXStar, setOffsetXStar] = useRecoilState(offsetXStarInStore); //eslint-disable-line
  const [offsetYStar, setOffsetYStar] = useRecoilState(offsetYStarInStore); //eslint-disable-line
  const [offsetXHeart, setOffsetXHeart] = useRecoilState(offsetXHeartInStore); //eslint-disable-line
  const [offsetYHeart, setOffsetYHeart] = useRecoilState(offsetYHeartInStore); //eslint-disable-line
  const [offsetXHamsa, setOffsetXHamsa] = useRecoilState(offsetXHamsaInStore); //eslint-disable-line
  const [offsetYHamsa, setOffsetYHamsa] = useRecoilState(offsetYHamsaInStore); //eslint-disable-line

  const [offsetXCircle2, setOffsetXCircle2] = useRecoilState(offsetXCircleInStore2); //eslint-disable-line
  const [offsetYCircle2, setOffsetYCircle2] = useRecoilState(offsetYCircleInStore2); //eslint-disable-line
  const [offsetXStar2, setOffsetXStar2] = useRecoilState(offsetXStarInStore2); //eslint-disable-line
  const [offsetYStar2, setOffsetYStar2] = useRecoilState(offsetYStarInStore2); //eslint-disable-line
  const [offsetXHeart2, setOffsetXHeart2] = useRecoilState(offsetXHeartInStore2); //eslint-disable-line
  const [offsetYHeart2, setOffsetYHeart2] = useRecoilState(offsetYHeartInStore2); //eslint-disable-line
  const [offsetXHamsa2, setOffsetXHamsa2] = useRecoilState(offsetXHamsaInStore2); //eslint-disable-line
  const [offsetYHamsa2, setOffsetYHamsa2] = useRecoilState(offsetYHamsaInStore2); //eslint-disable-line

  const [innerRadiusStar, setInnerRadiusStar] = useRecoilState(innerRadiusStarInStore); //eslint-disable-line
  const [outerRadiusStar, setOuterRadiusStar] = useRecoilState(outerRadiusStarInStore); //eslint-disable-line
  const [innerRadiusStar2, setInnerRadiusStar2] = useRecoilState(innerRadiusStarInStore2); //eslint-disable-line
  const [outerRadiusStar2, setOuterRadiusStar2] = useRecoilState(outerRadiusStarInStore2); //eslint-disable-line

  const [checkedStrip] = useRecoilState(checkedStripInStore);



  const handleChooseShape = (shape) => {
    setImageShape(shape);
  };
  const handleChooseShape2 = (shape) => {
    setImageShape2(shape);
  };

  return (
    <Container2>
      <Section1>
        <Heading1>
          <span
            style={{
              fontSize: '20px',
            }}
          >
            צורות
          </span>
        </Heading1>
      </Section1>

      <Section2 style={{ paddingBottom: '20px' }}>
        <button
          onClick={() =>
            !!checkedStrip ? handleChooseShape('square') : handleChooseShape2('square')
          }
          style={{
            opacity:
              !!checkedStrip && imageShape === 'square'
                ? 0.7
                : !checkedStrip && imageShape2 === 'square'
                ? 0.7
                : 1,
            fontSize: '12px',
          }}
        >
          ריבוע
        </button>
        <button
          onClick={() =>
            !!checkedStrip ? handleChooseShape('circle') : handleChooseShape2('circle')
          }
          style={{
            opacity:
              !!checkedStrip && imageShape === 'circle'
                ? 0.7
                : !checkedStrip && imageShape2 === 'circle'
                ? 0.7
                : 1,
            fontSize: '12px',
          }}
        >
          עיגול
        </button>
        {/* <button
          onClick={() => (!!checkedStrip ? handleChooseShape('star') : handleChooseShape2('star'))}
          style={{
            opacity:
              !!checkedStrip && imageShape === 'star'
                ? 0.7
                : !checkedStrip && imageShape2 === 'star'
                ? 0.7
                : 1,
            fontSize: '12px',
          }}
        >
          כוכב
        </button> */}
        <button
          onClick={() =>
            !!checkedStrip ? handleChooseShape('heart') : handleChooseShape2('heart')
          }
          style={{
            opacity:
              !!checkedStrip && imageShape === 'heart'
                ? 0.7
                : !checkedStrip && imageShape2 === 'heart'
                ? 0.7
                : 1,
            fontSize: '12px',
          }}
        >
          לב
        </button>
        {/* <button
          onClick={() =>
            !!checkedStrip ? handleChooseShape('hamsa') : handleChooseShape2('hamsa')
          }
          style={{
            opacity:
              !!checkedStrip && imageShape === 'hamsa'
                ? 0.7
                : !checkedStrip && imageShape2 === 'hamsa'
                ? 0.7
                : 1,
            fontSize: '12px',
          }}
        >
          חמסה
        </button> */}

        <div
          style={{
            padding: '0 10px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            // minHeight: 150,
          }}
        >
          {!!checkedStrip ? (
            imageShape === 'square' ? (
              <div style={{ margin: '8px 0' }}>
                <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                <Slider value={scaleSquare} onChange={(v) => setScaleSquare(v)} min={0} max={50} />
              </div>
            ) : imageShape === 'circle' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                  <Slider
                    value={scaleCircle}
                    onChange={(v) => setScaleCircle(v)}
                    min={scaleCircleMin}
                    max={scaleCircleMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    {' '}
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleCircleInner}
                    onChange={(v) => setScaleCircleInner(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXCircle}
                    onChange={(v) => setOffsetXCircle(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYCircle}
                    onChange={(v) => setOffsetYCircle(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
              </>
            ) : imageShape === 'star' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                  <Slider value={scaleStar} onChange={(v) => setScaleStar(v)} min={0} max={1000} />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    {' '}
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleStarInner}
                    onChange={(v) => setScaleStarInner(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXStar}
                    onChange={(v) => setOffsetXStar(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYStar}
                    onChange={(v) => setOffsetYStar(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    רדיוס פנימי
                  </p>
                  <Slider
                    value={innerRadiusStar}
                    onChange={(v) => setInnerRadiusStar(v)}
                    min={200}
                    max={800}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    רדיוס חיצוני
                  </p>
                  <Slider
                    value={outerRadiusStar}
                    onChange={(v) => setOuterRadiusStar(v)}
                    min={200}
                    max={800}
                  />
                </div>
              </>
            ) : imageShape === 'heart' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    {' '}
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleHeart}
                    onChange={(v) => setScaleHeart(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                  <Slider
                    value={scaleHeartInner}
                    onChange={(v) => setScaleHeartInner(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXHeart}
                    onChange={(v) => setOffsetXHeart(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYHeart}
                    onChange={(v) => setOffsetYHeart(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
              </>
            ) : imageShape === 'hamsa' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                  <Slider
                    value={scaleHamsa}
                    onChange={(v) => setScaleHamsa(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    {' '}
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleHamsaInner}
                    onChange={(v) => setScaleHamsaInner(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXHamsa}
                    onChange={(v) => setOffsetXHamsa(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYHamsa}
                    onChange={(v) => setOffsetYHamsa(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
              </>
            ) : null
          ) : !checkedStrip ? (
            imageShape2 === 'square' ? (
              <div style={{ margin: '8px 0' }}>
                <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                <Slider
                  value={scaleSquare2}
                  onChange={(v) => setScaleSquare2(v)}
                  min={0}
                  max={50}
                />
              </div>
            ) : imageShape2 === 'circle' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                  <Slider
                    value={scaleCircle2}
                    onChange={(v) => setScaleCircle2(v)}
                    min={0}
                    max={200}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    {' '}
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleCircleInner2}
                    onChange={(v) => setScaleCircleInner2(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXCircle2}
                    onChange={(v) => setOffsetXCircle2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYCircle2}
                    onChange={(v) => setOffsetYCircle2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
              </>
            ) : imageShape2 === 'star' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                  <Slider
                    value={scaleStar2}
                    onChange={(v) => setScaleStar2(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    {' '}
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleStarInner2}
                    onChange={(v) => setScaleStarInner2(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXStar2}
                    onChange={(v) => setOffsetXStar2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYStar2}
                    onChange={(v) => setOffsetYStar2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    רדיוס פנימי
                  </p>
                  <Slider
                    value={innerRadiusStar2}
                    onChange={(v) => setInnerRadiusStar2(v)}
                    min={200}
                    max={800}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    רדיוס חיצוני
                  </p>
                  <Slider
                    value={outerRadiusStar2}
                    onChange={(v) => setOuterRadiusStar2(v)}
                    min={200}
                    max={800}
                  />
                </div>
              </>
            ) : imageShape2 === 'heart' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}> סקאלה</p>
                  <Slider
                    value={scaleHeart2}
                    onChange={(v) => setScaleHeart2(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleHeartInner2}
                    onChange={(v) => setScaleHeartInner2(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXHeart2}
                    onChange={(v) => setOffsetXHeart2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYHeart2}
                    onChange={(v) => setOffsetYHeart2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
              </>
            ) : imageShape2 === 'hamsa' ? (
              <>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>סקאלה</p>
                  <Slider
                    value={scaleHamsa2}
                    onChange={(v) => setScaleHamsa2(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>
                    {' '}
                    סקאלה פנימית
                  </p>
                  <Slider
                    value={scaleHamsaInner2}
                    onChange={(v) => setScaleHamsaInner2(v)}
                    min={0}
                    max={1000}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי x</p>
                  <Slider
                    value={offsetXHamsa2}
                    onChange={(v) => setOffsetXHamsa2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
                <div style={{ margin: '8px 0' }}>
                  <p style={{ color: 'white', marginBottom: '5px', fontSize: '14px' }}>מילוי y</p>
                  <Slider
                    value={offsetYHamsa2}
                    onChange={(v) => setOffsetYHamsa2(v)}
                    min={offsetMin}
                    max={offsetMax}
                  />
                </div>
              </>
            ) : null
          ) : null}
        </div>
      </Section2>
    </Container2>
  );
};

export default ShapesController;
