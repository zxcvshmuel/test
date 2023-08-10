import React from 'react';

import { useRecoilState } from 'recoil';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { IMAGE_WIDTH, IMAGE_HEIGHT } from '../../config/config';
import {
  topImageSize as topImageSizeInStore,
  middleImageSize as middleImageSizeInStore,
  bottomImageSize as bottomImageSizeInStore,
  scaleSquare as scaleSquareInStore,
  scaleCircle as scaleCircleInStore,
  scaleStar as scaleStarInStore,
  scaleHeart as scaleHeartInStore,
  imageShape as shape,
  outerRadiusStar,
} from '../recoil/themes';
import {
  topImageSize2 as topImageSizeInStore2,
  middleImageSize2 as middleImageSizeInStore2,
  bottomImageSize2 as bottomImageSizeInStore2,
  scaleSquare2 as scaleSquareInStore2,
  scaleCircle2 as scaleCircleInStore2,
  scaleStar2 as scaleStarInStore2,
  scaleHeart2 as scaleHeartInStore2,
  imageShape2 as shape2,
  outerRadiusStar2,
} from '../recoil/themes2';

import { checkedStripInStore } from '../recoil/root';
import { useEffect } from 'react';

const Container1 = styled.div`
  ${tw`
 mt-3
 py-2
 bg-frame-xgray
 rounded-lg
`}
`;

const Section1 = styled.div`
  ${tw`
    flex
    gap-4
  `}
  position: relative;
`;

const Heading1 = styled.h1`
  ${tw`
  font-normal
  pl-4
  text-center
  mt-2
  text-color-bright
 `}
  font-size: 1.5rem;
`;

const Description = styled.div`
  ${tw`
  w-3/4
  text-sm
  text-frame-gray
  font-normal
  col-span-2
  py-2
  pl-4
  text-right
  mb-2
  leading-4
  `}
`;

const ButtonContainer = styled.span`
  ${tw`
    pl-0
  `}
`;

const Button = styled.button`
  ${tw`
    font-normal
    mb-2
    rounded-full
    h-12 w-12
    justify-center
    bg-color-bright
    border-none
    outline-none
  `}
`;

const Upload = ({
  setUploadedImage,
  setUploadedImageTwo,
  setUploadedImageThree,
  setUploadedImage2,
  setUploadedImageTwo2,
  setUploadedImageThree2,
  setHeight,
  setWidth,
  index,
  setNoImage,
}) => {
  let imageIndex = '';
  switch (index) {
    case 'top':
      imageIndex = 'עליונה';
      break;
    case 'middle':
      imageIndex = 'אמצעית';
      break;
    case 'bottom':
      imageIndex = 'תחתונה';
      break;
    default:
      imageIndex = '';
  }

  const [topImageSize, setTopImageSize] = useRecoilState(topImageSizeInStore); //eslint-disable-line
  const [middleImageSize, setMiddleImageSize] = useRecoilState(middleImageSizeInStore); //eslint-disable-line
  const [bottomImageSize, setBottomImageSize] = useRecoilState(bottomImageSizeInStore); //eslint-disable-line
  const [topImageSize2, setTopImageSize2] = useRecoilState(topImageSizeInStore2); //eslint-disable-line
  const [middleImageSize2, setMiddleImageSize2] = useRecoilState(middleImageSizeInStore2); //eslint-disable-line
  const [bottomImageSize2, setBottomImageSize2] = useRecoilState(bottomImageSizeInStore2); //eslint-disable-line

  const [scaleSquare, setScaleSquare] = useRecoilState(scaleSquareInStore); //eslint-disable-line
  const [scaleCircle, setScaleCircle] = useRecoilState(scaleCircleInStore); //eslint-disable-line
  const [scaleStar, setScaleStar] = useRecoilState(scaleStarInStore); //eslint-disable-line
  const [scaleHeart, setScaleHeart] = useRecoilState(scaleHeartInStore); //eslint-disable-line
  const [scaleSquare2, setScaleSquare2] = useRecoilState(scaleSquareInStore2); //eslint-disable-line
  const [scaleCircle2, setScaleCircle2] = useRecoilState(scaleCircleInStore2); //eslint-disable-line
  const [scaleStar2, setScaleStar2] = useRecoilState(scaleStarInStore2); //eslint-disable-line
  const [scaleHeart2, setScaleHeart2] = useRecoilState(scaleHeartInStore2); //eslint-disable-line

  const [imageShape, setImageShape] = useRecoilState(shape); //eslint-disable-line
  const [imageShape2, setImageShape2] = useRecoilState(shape2); //eslint-disable-line
  const [radiusOutStar, setRadiusOutStar] = useRecoilState(outerRadiusStar); //eslint-disable-line
  const [radiusOutStar2, setRadiusOutStar2] = useRecoilState(outerRadiusStar2); //eslint-disable-line

  const [checkedStrip] = useRecoilState(checkedStripInStore);

  useEffect(() => {
    if (!!checkedStrip) {
      setRadiusOutStar(410);
    } else {
      setRadiusOutStar2(410);
    }
    //eslint-disable-next-line
  }, [
    topImageSize,
    topImageSize2,
    middleImageSize,
    middleImageSize2,
    bottomImageSize,
    bottomImageSize2,
  ]);

  const onInputClick = (event) => {
    event.target.value = '';
  };

  return (
    <Container1>
      <Heading1>{`העלאת תמונות ${imageIndex}`}</Heading1>
      <Section1>
        <Description>לחץ על האייקון לבחור תמונה - יש לבחור 3 תמונות</Description>
        {/* <Description>{`T height: ${topImageSize.height} width: ${topImageSize.width}`}</Description>
        <Description>{`M height: ${middleImageSize.height} width: ${middleImageSize.width}`}</Description>
        <Description>{`B height: ${bottomImageSize.height} width: ${bottomImageSize.width}`}</Description> */}
        <div>
          <ButtonContainer>
            <Button>
              <label htmlFor={`contained-button-file-${index}`}>
                <FontAwesomeIcon icon={faUpload} style={{ color: '#000', fontSize: '23px' }} />
              </label>
            </Button>
          </ButtonContainer>

          <input
            multiple
            type="file"
            accept="image/*" //png
            style={{
              opacity: 0,
              height: 80,
              width: 80,
              cursor: 'pointer',
              position: 'absolute',
              top: -20,
              right: 0,
            }}
            id={`contained-button-file-${index}`}
            onChange={(e) => {
              if (e.target.files.length === 3) {
                if (!!checkedStrip) {
                  setUploadedImage(URL.createObjectURL(e.target.files[0]));
                  setUploadedImageTwo(URL.createObjectURL(e.target.files[1]));
                  setUploadedImageThree(URL.createObjectURL(e.target.files[2]));
                } else {
                  setUploadedImage2(URL.createObjectURL(e.target.files[0]));
                  setUploadedImageTwo2(URL.createObjectURL(e.target.files[1]));
                  setUploadedImageThree2(URL.createObjectURL(e.target.files[2]));
                }
                const i = new Image();
                const i2 = new Image();
                const i3 = new Image();

                i.onload = function () {
                  //eslint-disable-next-line
                  if (!!checkedStrip) {
                    let maxWidth = IMAGE_WIDTH;
                    let ratioTop = i.width / i.height;

                    if (imageShape === 'circle') {
                      maxWidth = IMAGE_WIDTH;
                      ratioTop = 1;
                    }

                    i.width = maxWidth;
                    // i.height = Math.round(maxWidth / ratioTop);
                    i.height = IMAGE_HEIGHT;

                    setTopImageSize({
                      // height: Math.round(maxWidth / ratioTop), width: maxWidth
                      height: IMAGE_HEIGHT,
                      width: maxWidth,
                    });

                    setScaleSquare(50);
                    // setScaleCircle(100);
                    setScaleHeart(((IMAGE_WIDTH * 3) / i.width) * 250);
                    setScaleStar(150);
                    // setRadiusOutStar(470);
                  } else {
                    let maxWidth = IMAGE_WIDTH;
                    let ratioTop = i.width / i.height;

                    if (imageShape2 === 'circle') {
                      maxWidth = IMAGE_WIDTH;
                      ratioTop = 1;
                    }
                    i.width = maxWidth;
                    // i.height = Math.round(maxWidth / ratioTop);
                    i.height = IMAGE_HEIGHT;

                    setTopImageSize2({
                      // height: Math.round(maxWidth / ratioTop), width: maxWidth
                      height: IMAGE_HEIGHT,
                      width: maxWidth,
                    });

                    setScaleSquare2(50);
                    // setScaleCircle2(100);
                    setScaleHeart2(((IMAGE_WIDTH * 3) / i.width) * 250);
                    setScaleStar2(150);
                    // setRadiusOutStar2(470);
                  }

                  // setNoImage(false);
                };

                i2.onload = function () {
                  if (!!checkedStrip) {
                    let maxWidth = IMAGE_WIDTH;

                    let ratioMiddle = i2.width / i2.height;

                    if (imageShape === 'circle') {
                      maxWidth = IMAGE_WIDTH;
                      ratioMiddle = 1;
                    }
                    i2.width = maxWidth;
                    // i2.height = Math.round(maxWidth / ratioMiddle);
                    i2.height = IMAGE_HEIGHT;

                    setMiddleImageSize({
                      // height: Math.round(maxWidth / ratioMiddle),
                      height: IMAGE_HEIGHT,
                      width: maxWidth,
                    });

                    setScaleSquare(50);
                    // setScaleCircle(100);
                    setScaleHeart(((IMAGE_WIDTH * 3) / i.width) * 250);
                    setScaleStar(150);
                    // setRadiusOutStar(475);
                  } else {
                    let maxWidth = IMAGE_WIDTH;

                    let ratioMiddle = i2.width / i2.height;

                    if (imageShape2 === 'circle') {
                      maxWidth = IMAGE_WIDTH;
                      ratioMiddle = 1;
                    }

                    i2.width = maxWidth;
                    // i2.height = Math.round(maxWidth / ratioMiddle);
                    i2.height = IMAGE_HEIGHT;

                    setMiddleImageSize2({
                      // height: Math.round(maxWidth / ratioMiddle),
                      height: IMAGE_HEIGHT,
                      width: maxWidth,
                    });

                    setScaleSquare2(50);
                    // setScaleCircle2(100);
                    setScaleHeart2(((IMAGE_WIDTH * 3) / i.width) * 250);
                    setScaleStar2(150);
                    // setRadiusOutStar2(475);
                  }
                };
                i3.onload = function () {
                  if (!!checkedStrip) {
                    let maxWidth = IMAGE_WIDTH;

                    let ratioBottom = i3.width / i3.height;
                    setBottomImageSize({
                      // height: Math.round(maxWidth / ratioBottom),
                      height: IMAGE_HEIGHT,
                      width: maxWidth,
                    });

                    if (imageShape === 'circle') {
                      maxWidth = IMAGE_WIDTH;
                      ratioBottom = 1;
                    }

                    i2.width = maxWidth;
                    // i2.height = Math.round(maxWidth / ratioBottom);
                    i2.height = IMAGE_HEIGHT;

                    setBottomImageSize({
                      // height: Math.round(maxWidth / ratioBottom),
                      height: IMAGE_HEIGHT,
                      width: maxWidth,
                    });

                    setScaleSquare(50);
                    // setScaleCircle(100);
                    setScaleHeart(((IMAGE_WIDTH * 3) / i.width) * 250);
                    setScaleStar(150);
                    // setRadiusOutStar(480);
                  } else {
                    let maxWidth = IMAGE_WIDTH;

                    let ratioBottom = i3.width / i3.height;

                    if (imageShape2 === 'circle') {
                      maxWidth = IMAGE_WIDTH;
                      ratioBottom = 1;
                    }

                    i2.width = maxWidth;
                    // i2.height = Math.round(maxWidth / ratioBottom);
                    i2.height = IMAGE_HEIGHT;

                    setBottomImageSize2({
                      // height: Math.round(maxWidth / ratioBottom),
                      height: IMAGE_HEIGHT,
                      width: maxWidth,
                    });

                    setScaleSquare2(50);
                    // setScaleCircle2(100);
                    setScaleHeart2(((IMAGE_WIDTH * 3) / i.width) * 250);
                    setScaleStar2(150);
                    // setRadiusOutStar2(480);
                  }
                };

                i.src = URL.createObjectURL(e.target.files[0]);
                i2.src = URL.createObjectURL(e.target.files[1]);
                i3.src = URL.createObjectURL(e.target.files[2]);
              } else {
                alert('יש לבחור 3 תמונות');
              }
            }}
            onClick={onInputClick}
          />
        </div>
      </Section1>
    </Container1>
  );
};

export default Upload;
