import React, { useState, useRef } from 'react';

/// Components
import { Stage, Layer, Image, Group, Rect } from 'react-konva'; //eslint-disable-line
import { useRecoilState } from 'recoil';

import TransformableText from './TransformableText';
import TransformableImage from './TransformableImage';
import TransformableIcon from './TransformableIcon';
import TransformableLogo from './TransformableLogo';

import {
  positionImageTopX as positionImageTopXInStore,
  positionImageTopY as positionImageTopYInStore,
  positionImageMiddleX as positionImageMiddleXInStore,
  positionImageMiddleY as positionImageMiddleYInStore,
  positionImageBottomX as positionImageBottomXInStore,
  positionImageBottomY as positionImageBottomYInStore,
  iconPositionX as iconPositionXInStore,
  iconPositionY as iconPositionYInStore,
  datePositionX as datePositionXInStore,
  datePositionY as datePositionYInStore,
  celebratorsPositionX as celebratorsPositionXInStore,
  celebratorsPositionY as celebratorsPositionYInStore,
  thirdTextPositionX as thirdTextPositionXInStore,
  thirdTextPositionY as thirdTextPositionYInStore,
  celebratorsNamesFontSize as celebratorsNamesFontSizeInStore,
  dateFontSize as dateFontSizeInStore,
  thirdTextFontSize as thirdTextFontSizeInStore,
  imageShape as shape,
  cleanImages,
  grayscaleFilter,
  topImageSize as topImageSizeInStore,
  middleImageSize as middleImageSizeInStore,
  bottomImageSize as bottomImageSizeInStore,
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
  offsetXHamsa as offsetXHamsaInStore,
  offsetYHamsa as offsetYHamsaInStore,
  innerRadiusStar as innerRadiusStarInStore,
  outerRadiusStar as outerRadiusStarInStore,
  //
  logoHeight as logoHeightState,
  logoWidth as logoWidthState,
  logoPositionX as logoPositionXState,
  logoPositionY as logoPositionYState,
  //
  selectId,
  selectId1,
} from '../recoil/themes';
import {
  positionImageTopX2 as positionImageTopXInStore2,
  positionImageTopY2 as positionImageTopYInStore2,
  positionImageMiddleX2 as positionImageMiddleXInStore2,
  positionImageMiddleY2 as positionImageMiddleYInStore2,
  positionImageBottomX2 as positionImageBottomXInStore2,
  positionImageBottomY2 as positionImageBottomYInStore2,
  iconPositionX2 as iconPositionXInStore2,
  iconPositionY2 as iconPositionYInStore2,
  datePositionX2 as datePositionXInStore2,
  datePositionY2 as datePositionYInStore2,
  celebratorsPositionX2 as celebratorsPositionXInStore2,
  celebratorsPositionY2 as celebratorsPositionYInStore2,
  thirdTextPositionX2 as thirdTextPositionXInStore2,
  thirdTextPositionY2 as thirdTextPositionYInStore2,
  celebratorsNamesFontSize2 as celebratorsNamesFontSizeInStore2,
  dateFontSize2 as dateFontSizeInStore2,
  thirdTextFontSize2 as thirdTextFontSizeInStore2,
  imageShape2 as shape2,
  cleanImages2,
  grayscaleFilter2,
  topImageSize2 as topImageSizeInStore2,
  middleImageSize2 as middleImageSizeInStore2,
  bottomImageSize2 as bottomImageSizeInStore2,
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
  offsetXHamsa2 as offsetXHamsaInStore2,
  offsetYHamsa2 as offsetYHamsaInStore2,
  innerRadiusStar2 as innerRadiusStarInStore2,
  outerRadiusStar2 as outerRadiusStarInStore2,
  //
  logoHeight2 as logoHeightState2,
  logoWidth2 as logoWidthState2,
  logoPositionX2 as logoPositionXState2,
  logoPositionY2 as logoPositionYState2,
  //
  stageBgImage2,
  selectId2,
  selectId12,
} from '../recoil/themes2';

import { ecoMode } from '../recoil/root';

const CanvasStage = ({
  stageRef,
  //
  checkedStrip,
  userName,
  guildName,
  thirdTextText,
  userName2,
  guildName2,
  thirdTextText2,
  //
  checked,
  checkedGuild,
  checkedThirdText,
  checked2,
  checkedGuild2,
  checkedThirdText2,
  //
  imageTop,
  imageMiddle,
  imageBottom,
  imageTop2,
  imageMiddle2,
  imageBottom2,
  //
  imageLogo,
  imageLogo2,
  //
  // bgColor,
  // bgColorGuild,
  fontFamily,
  fontColor,
  fontFamilyGuild,
  fontColorGuild,
  fontFamilyThirdText,
  fontColorThirdText,
  fontFamily2,
  fontColor2,
  fontFamilyGuild2,
  fontColorGuild2,
  fontFamilyThirdText2,
  fontColorThirdText2,
  //
  celebratorTextIsBold,
  celebratorTextIsUnderline,
  dateTextIsBold,
  dateTextIsUnderline,
  thirdTextIsBold,
  thirdTextIsUnderline,
  celebratorTextIsBold2,
  celebratorTextIsUnderline2,
  dateTextIsBold2,
  dateTextIsUnderline2,
  thirdTextIsBold2,
  thirdTextIsUnderline2,
  //
  width,
  height,
  SelectedIcon,
  stageBgColor,
  selectedFrame,
  colorOrImage,
  SelectedIcon2,
  stageBgColor2,
  // selectedFrame2,
  colorOrImage2,
}) => {
  const [imagePositionX, setimagePositionX] = useRecoilState(positionImageTopXInStore);
  const [imagePositionY, setimagePositionY] = useRecoilState(positionImageTopYInStore);
  const [imageMiddlePositionX, setmageMiddlePositionX] = useRecoilState(
    positionImageMiddleXInStore
  );
  const [imageMiddlePositionY, setmageMiddlePositionY] = useRecoilState(
    positionImageMiddleYInStore
  );
  const [imageBottomPositionX, setmageBottomPositionX] = useRecoilState(
    positionImageBottomXInStore
  );
  const [imageBottomPositionY, setmageBottomPositionY] = useRecoilState(
    positionImageBottomYInStore
  );

  const [imagePositionX2, setimagePositionX2] = useRecoilState(positionImageTopXInStore2);
  const [imagePositionY2, setimagePositionY2] = useRecoilState(positionImageTopYInStore2);
  const [imageMiddlePositionX2, setmageMiddlePositionX2] = useRecoilState(
    positionImageMiddleXInStore2
  );
  const [imageMiddlePositionY2, setmageMiddlePositionY2] = useRecoilState(
    positionImageMiddleYInStore2
  );
  const [imageBottomPositionX2, setmageBottomPositionX2] = useRecoilState(
    positionImageBottomXInStore2
  );
  const [imageBottomPositionY2, setmageBottomPositionY2] = useRecoilState(
    positionImageBottomYInStore2
  );
  //

  const [iconPositionX, seticonPositionX] = useRecoilState(iconPositionXInStore);
  const [iconPositionY, seticonPositionY] = useRecoilState(iconPositionYInStore);

  const [datePositionX, setdatePositionX] = useRecoilState(datePositionXInStore);
  const [datePositionY, setdatePositionY] = useRecoilState(datePositionYInStore);

  const [thirdTextPositionX, setthirdTextPositionX] = useRecoilState(thirdTextPositionXInStore);
  const [thirdTextPositionY, setthirdTextPositionY] = useRecoilState(thirdTextPositionYInStore);

  const [celebratorsPositionX, setcelebratorsPositionX] = useRecoilState(
    celebratorsPositionXInStore
  );
  const [celebratorsPositionY, setcelebratorsPositionY] = useRecoilState(
    celebratorsPositionYInStore
  );
  const [celebratorsNamesFontSize] = useRecoilState(celebratorsNamesFontSizeInStore);
  const [dateFontSize] = useRecoilState(dateFontSizeInStore); //eslint-disable-line
  const [thirdTextFontSize] = useRecoilState(thirdTextFontSizeInStore); //eslint-disable-line

  const [iconPositionX2, seticonPositionX2] = useRecoilState(iconPositionXInStore2);
  const [iconPositionY2, seticonPositionY2] = useRecoilState(iconPositionYInStore2);

  const [datePositionX2, setdatePositionX2] = useRecoilState(datePositionXInStore2);
  const [datePositionY2, setdatePositionY2] = useRecoilState(datePositionYInStore2);

  const [thirdTextPositionX2, setthirdTextPositionX2] = useRecoilState(thirdTextPositionXInStore2);
  const [thirdTextPositionY2, setthirdTextPositionY2] = useRecoilState(thirdTextPositionYInStore2);

  const [celebratorsPositionX2, setcelebratorsPositionX2] = useRecoilState(
    celebratorsPositionXInStore2
  );
  const [celebratorsPositionY2, setcelebratorsPositionY2] = useRecoilState(
    celebratorsPositionYInStore2
  );
  const [celebratorsNamesFontSize2] = useRecoilState(celebratorsNamesFontSizeInStore2);
  const [dateFontSize2] = useRecoilState(dateFontSizeInStore2); //eslint-disable-line
  const [thirdTextFontSize2] = useRecoilState(thirdTextFontSizeInStore2); //eslint-disable-line

  //
  const [noImage] = useRecoilState(cleanImages); //eslint-disable-line
  const [imageShape] = useRecoilState(shape); //eslint-disable-line
  const [grayscale] = useRecoilState(grayscaleFilter); //eslint-disable-line

  const [topImageSize] = useRecoilState(topImageSizeInStore); //eslint-disable-line
  const [middleImageSize] = useRecoilState(middleImageSizeInStore); //eslint-disable-line
  const [bottomImageSize] = useRecoilState(bottomImageSizeInStore); //eslint-disable-line
  const [noImage2] = useRecoilState(cleanImages2); //eslint-disable-line
  const [imageShape2] = useRecoilState(shape2); //eslint-disable-line
  const [grayscale2] = useRecoilState(grayscaleFilter2); //eslint-disable-line

  const [topImageSize2] = useRecoilState(topImageSizeInStore2); //eslint-disable-line
  const [middleImageSize2] = useRecoilState(middleImageSizeInStore2); //eslint-disable-line
  const [bottomImageSize2] = useRecoilState(bottomImageSizeInStore2); //eslint-disable-line
  //
  const [scaleSquare] = useRecoilState(scaleSquareInStore); //eslint-disable-line
  const [scaleCircle] = useRecoilState(scaleCircleInStore); //eslint-disable-line
  const [scaleStar] = useRecoilState(scaleStarInStore); //eslint-disable-line
  const [scaleHeart] = useRecoilState(scaleHeartInStore); //eslint-disable-line
  const [scaleHamsa] = useRecoilState(scaleHamsaInStore); //eslint-disable-line

  const [scaleSquareInner] = useRecoilState(scaleSquareInnerInStore); //eslint-disable-line
  const [scaleCircleInner] = useRecoilState(scaleCircleInnerInStore); //eslint-disable-line
  const [scaleStarInner] = useRecoilState(scaleStarInnerInStore); //eslint-disable-line
  const [scaleHeartInner] = useRecoilState(scaleHeartInnerInStore); //eslint-disable-line
  const [scaleHamsaInner] = useRecoilState(scaleHamsaInnerInStore); //eslint-disable-line

  //eslint-disable-next-line
  const [logoPositionX, setLogoPositionX] = useRecoilState(logoPositionXState);
  //eslint-disable-next-line
  const [logoPositionY, setLogoPositionY] = useRecoilState(logoPositionYState);

  const [scaleSquare2] = useRecoilState(scaleSquareInStore2); //eslint-disable-line
  const [scaleCircle2] = useRecoilState(scaleCircleInStore2); //eslint-disable-line
  const [scaleStar2] = useRecoilState(scaleStarInStore2); //eslint-disable-line
  const [scaleHeart2] = useRecoilState(scaleHeartInStore2); //eslint-disable-line
  const [scaleHamsa2] = useRecoilState(scaleHamsaInStore2); //eslint-disable-line

  const [scaleSquareInner2] = useRecoilState(scaleSquareInnerInStore2); //eslint-disable-line
  const [scaleCircleInner2] = useRecoilState(scaleCircleInnerInStore2); //eslint-disable-line
  const [scaleStarInner2] = useRecoilState(scaleStarInnerInStore2); //eslint-disable-line
  const [scaleHeartInner2] = useRecoilState(scaleHeartInnerInStore2); //eslint-disable-line
  const [scaleHamsaInner2] = useRecoilState(scaleHamsaInnerInStore2); //eslint-disable-line
  //
  const [offsetXCircle] = useRecoilState(offsetXCircleInStore); //eslint-disable-line
  const [offsetYCircle] = useRecoilState(offsetYCircleInStore); //eslint-disable-line
  const [offsetXStar] = useRecoilState(offsetXStarInStore); //eslint-disable-line
  const [offsetYStar] = useRecoilState(offsetYStarInStore); //eslint-disable-line
  const [offsetXHeart] = useRecoilState(offsetXHeartInStore); //eslint-disable-line
  const [offsetYHeart] = useRecoilState(offsetYHeartInStore); //eslint-disable-line
  const [offsetXHamsa] = useRecoilState(offsetXHamsaInStore); //eslint-disable-line
  const [offsetYHamsa] = useRecoilState(offsetYHamsaInStore); //eslint-disable-line
  const [innerRadiusStar] = useRecoilState(innerRadiusStarInStore); //eslint-disable-line
  const [outerRadiusStar] = useRecoilState(outerRadiusStarInStore); //eslint-disable-line

  const [offsetXCircle2] = useRecoilState(offsetXCircleInStore2); //eslint-disable-line
  const [offsetYCircle2] = useRecoilState(offsetYCircleInStore2); //eslint-disable-line
  const [offsetXStar2] = useRecoilState(offsetXStarInStore2); //eslint-disable-line
  const [offsetYStar2] = useRecoilState(offsetYStarInStore2); //eslint-disable-line
  const [offsetXHeart2] = useRecoilState(offsetXHeartInStore2); //eslint-disable-line
  const [offsetYHeart2] = useRecoilState(offsetYHeartInStore2); //eslint-disable-line
  const [offsetXHamsa2] = useRecoilState(offsetXHamsaInStore2); //eslint-disable-line
  const [offsetYHamsa2] = useRecoilState(offsetYHamsaInStore2); //eslint-disable-line
  const [innerRadiusStar2] = useRecoilState(innerRadiusStarInStore2); //eslint-disable-line
  const [outerRadiusStar2] = useRecoilState(outerRadiusStarInStore2); //eslint-disable-line
  //eslint-disable-next-line
  const [logoPositionX2, setLogoPositionX2] = useRecoilState(logoPositionXState2);
  //eslint-disable-next-line
  const [logoPositionY2, setLogoPositionY2] = useRecoilState(logoPositionYState2);

  //
  const [selectedFrame2] = useRecoilState(stageBgImage2); //eslint-disable-line

  const rect = [
    {
      x: 50,
      y: 50,
      id: 'rect1',
    },
    {
      x: 100,
      y: 100,
      id: 'rect2',
    },
    {
      x: 75,
      y: 75,
      id: 'rect3',
    },
  ];
  const rect2 = [
    {
      x: 50,
      y: 50,
      id: 'rect1',
    },
    {
      x: 100,
      y: 100,
      id: 'rect2',
    },
    {
      x: 75,
      y: 75,
      id: 'rect3',
    },
  ];

  const renderImgTop = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImgTop',
    },
  ];
  const renderImgMiddle = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImgMiddle',
    },
  ];
  const renderImgBottom = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: 'renderImgBottom',
    },
  ];
  const renderIcon = [
    {
      x: iconPositionX,
      y: iconPositionY,
      id: 'renderIcon',
    },
  ];
  const renderLogo = [
    {
      x: logoPositionX,
      y: logoPositionY,
      id: 'renderLogo',
    },
  ];
  const renderImgTop2 = [
    {
      x: imagePositionX2,
      y: imagePositionY2,
      id: 'renderImgTop2',
    },
  ];
  const renderImgMiddle2 = [
    {
      x: imagePositionX2,
      y: imagePositionY2,
      id: 'renderImgMiddle2',
    },
  ];
  const renderImgBottom2 = [
    {
      x: imagePositionX2,
      y: imagePositionY2,
      id: 'renderImgBottom2',
    },
  ];
  const renderIcon2 = [
    {
      x: iconPositionX2,
      y: iconPositionY2,
      id: 'renderIcon2',
    },
  ];
  const renderLogo2 = [
    {
      x: logoPositionX2,
      y: logoPositionY2,
      id: 'renderLogo2',
    },
  ];

  const [tranImgTop, setTranImgTop] = useState(renderImgTop);
  const [tranImgMiddle, setTranImgMiddle] = useState(renderImgMiddle);
  const [tranImgBottom, setTranImgBottom] = useState(renderImgBottom);
  const [tranIcon, setTranIcon] = useState(renderIcon);
  const [tranLogo, setTranLogo] = useState(renderLogo);

  const [selectedId1, selectShape1] = useRecoilState(selectId1);
  const [selectedId, selectShape] = useRecoilState(selectId);
  const [rectangles, setRectangles] = useState(rect);

  const [tranImgTop2, setTranImgTop2] = useState(renderImgTop2);
  const [tranImgMiddle2, setTranImgMiddle2] = useState(renderImgMiddle2);
  const [tranImgBottom2, setTranImgBottom2] = useState(renderImgBottom2);
  const [tranIcon2, setTranIcon2] = useState(renderIcon2);
  const [tranLogo2, setTranLogo2] = useState(renderLogo2);

  const [selectedId12, selectShape12] = useRecoilState(selectId12);
  const [selectedId2, selectShape2] = useRecoilState(selectId2);
  const [rectangles2, setRectangles2] = useState(rect2);

  const [logoHeight, setLogoHeight] = useRecoilState(logoHeightState); //eslint-disable-line
  const [logoHeight2, setLogoHeight2] = useRecoilState(logoHeightState2); //eslint-disable-line
  const [logoWidth, setLogoWidth] = useRecoilState(logoWidthState); //eslint-disable-line
  const [logoWidth2, setLogoWidth2] = useRecoilState(logoWidthState2); //eslint-disable-line

  const [isEcoMode] = useRecoilState(ecoMode); //


  const checkDeselect = () => {
    selectShape1(null);
    selectShape(null);
  };

  const checkDeselect2 = () => {
    selectShape12(null);
    selectShape2(null);
  };

  const groupRef1 = useRef();
  const groupRef2 = useRef();
  // const rectRef1 = useRef();
  const rectRef2 = useRef();

  return (
    <>
      <Stage ref={stageRef} width={600} height={900} x={0} y={0}>
        {!!checkedStrip ? (
          <>
            <Layer>
              <Group
                ref={groupRef1}
                // clipX={0}
                // clipY={0}
                // clipWidth={300}
                // clipHeight={900}
                x={0}
                y={0}
                height={900}
                width={300}
              >
                <Rect
                  x={0}
                  y={0}
                  width={1200}
                  height={3600}
                  scale={{
                    x: 0.25,
                    y: 0.25,
                  }}
                  fillPatternRepeat="repeat"
                  // fill={stageBgColor}
                  {...(!!colorOrImage && { fillPatternImage: selectedFrame })}
                  {...(!colorOrImage && { fill: stageBgColor })}
                />
                {imageTop && (
                  <TransformableImage
                    image={imageTop}
                    // imageWidth={imageRenderWidth}
                    // imageHeight={imageRenderHeight}
                    imageSize={topImageSize}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    isSelected={renderImgTop[0].id === selectedId1}
                    onSelect={() => {
                      if (renderImgTop[0].id !== selectedId1) {
                        selectShape1(renderImgTop[0].id);
                      } else {
                        selectShape1(null);
                      }
                    }}
                    onChange={(newAttrs) => {
                      setimagePositionX(newAttrs.x);
                      setimagePositionY(newAttrs.y);
                      const imgs = tranImgTop.slice();
                      imgs[0] = newAttrs;
                      setTranImgTop(imgs);
                    }}
                    initPosX={imagePositionX}
                    initPosY={imagePositionY}
                    noImage={noImage}
                    shape={imageShape}
                    grayscale={grayscale}
                    scaleCircle={scaleCircle}
                    scaleSquare={scaleSquare}
                    scaleHeart={scaleHeart}
                    offsetXHeart={offsetXHeart}
                    offsetYHeart={offsetYHeart}
                    scaleStar={scaleStar}
                    offsetXCircle={offsetXCircle}
                    offsetYCircle={offsetYCircle}
                    offsetXStar={offsetXStar}
                    offsetYStar={offsetYStar}
                    innerRadiusStar={innerRadiusStar}
                    outerRadiusStar={outerRadiusStar}
                    offsetXHamsa={offsetXHamsa}
                    offsetYHamsa={offsetYHamsa}
                    scaleHamsa={scaleHamsa}
                    scaleSquareInner={scaleSquareInner}
                    scaleCircleInner={scaleCircleInner}
                    scaleStarInner={scaleStarInner}
                    scaleHamsaInner={scaleHamsaInner}
                    scaleHeartInner={scaleHeartInner}

                    // setInitPosX={setimagePositionX}
                    // setInitPosY={setimagePositionY}
                  />
                )}

                {imageMiddle && (
                  <TransformableImage
                    image={imageMiddle}
                    // imageWidth={imageRenderWidth}
                    // imageHeight={imageRenderHeight}
                    imageSize={middleImageSize}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    isSelected={renderImgMiddle[0].id === selectedId1}
                    onSelect={() => {
                      if (renderImgMiddle[0].id !== selectedId1) {
                        selectShape1(renderImgMiddle[0].id);
                      } else {
                        selectShape1(null);
                      }
                    }}
                    onChange={(newAttrs) => {
                      setmageMiddlePositionX(newAttrs.x);
                      setmageMiddlePositionY(newAttrs.y);
                      const imgs = tranImgMiddle.slice();
                      imgs[0] = newAttrs;
                      setTranImgMiddle(imgs);
                    }}
                    initPosX={imageMiddlePositionX}
                    initPosY={imageMiddlePositionY}
                    noImage={noImage}
                    shape={imageShape}
                    grayscale={grayscale}
                    scaleCircle={scaleCircle}
                    scaleSquare={scaleSquare}
                    scaleHeart={scaleHeart}
                    offsetXHeart={offsetXHeart}
                    offsetYHeart={offsetYHeart}
                    scaleStar={scaleStar}
                    offsetXCircle={offsetXCircle}
                    offsetYCircle={offsetYCircle}
                    offsetXStar={offsetXStar}
                    offsetYStar={offsetYStar}
                    innerRadiusStar={innerRadiusStar}
                    outerRadiusStar={outerRadiusStar}
                    offsetXHamsa={offsetXHamsa}
                    offsetYHamsa={offsetYHamsa}
                    scaleHamsa={scaleHamsa}
                    scaleSquareInner={scaleSquareInner}
                    scaleCircleInner={scaleCircleInner}
                    scaleStarInner={scaleStarInner}
                    scaleHamsaInner={scaleHamsaInner}
                    scaleHeartInner={scaleHeartInner}
                    // setInitPosX={setmageMiddlePositionX}
                    // setInitPosY={setmageMiddlePositionY}
                  />
                )}

                {imageBottom && (
                  <TransformableImage
                    image={imageBottom}
                    // imageWidth={imageRenderWidth}
                    // imageHeight={imageRenderHeight}
                    imageSize={bottomImageSize}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    isSelected={renderImgBottom[0].id === selectedId1}
                    onSelect={() => {
                      if (renderImgBottom[0].id !== selectedId1) {
                        selectShape1(renderImgBottom[0].id);
                      } else {
                        selectShape1(null);
                      }
                    }}
                    onChange={(newAttrs) => {
                      setmageBottomPositionX(newAttrs.x);
                      setmageBottomPositionY(newAttrs.y);
                      const imgs = tranImgBottom.slice();
                      imgs[0] = newAttrs;
                      setTranImgBottom(imgs);
                    }}
                    initPosX={imageBottomPositionX}
                    initPosY={imageBottomPositionY}
                    noImage={noImage}
                    shape={imageShape}
                    grayscale={grayscale}
                    scaleCircle={scaleCircle}
                    scaleSquare={scaleSquare}
                    scaleHeart={scaleHeart}
                    offsetXHeart={offsetXHeart}
                    offsetYHeart={offsetYHeart}
                    scaleStar={scaleStar}
                    offsetXCircle={offsetXCircle}
                    offsetYCircle={offsetYCircle}
                    offsetXStar={offsetXStar}
                    offsetYStar={offsetYStar}
                    innerRadiusStar={innerRadiusStar}
                    outerRadiusStar={outerRadiusStar}
                    offsetXHamsa={offsetXHamsa}
                    offsetYHamsa={offsetYHamsa}
                    scaleHamsa={scaleHamsa}
                    scaleSquareInner={scaleSquareInner}
                    scaleCircleInner={scaleCircleInner}
                    scaleStarInner={scaleStarInner}
                    scaleHamsaInner={scaleHamsaInner}
                    scaleHeartInner={scaleHeartInner}
                    // setInitPosX={setmageBottomPositionX}
                    // setInitPosY={setmageBottomPositionY}
                  />
                )}
                {SelectedIcon && (
                  <TransformableIcon
                    image={SelectedIcon}
                    // imageWidth={iconRenderWidth}
                    // imageHeight={iconRenderHeight}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    isSelected={renderIcon[0].id === selectedId1}
                    onSelect={() => {
                      selectShape1(renderIcon[0].id);
                    }}
                    onChange={(newAttrs) => {
                      seticonPositionX(newAttrs.x);
                      seticonPositionY(newAttrs.y);
                      const imgs = tranIcon.slice();
                      imgs[0] = newAttrs;
                      setTranIcon(imgs);
                    }}
                    initPosX={iconPositionX}
                    initPosY={iconPositionY}
                    // setInitPosX={seticonPositionX}
                    // setInitPosY={seticonPositionY}
                  />
                )}
                {imageLogo && (
                  <TransformableLogo
                    image={imageLogo}
                    imageWidth={logoWidth}
                    imageHeight={logoHeight}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    isSelected={renderLogo[0].id === selectedId1}
                    onSelect={() => {
                      selectShape1(renderLogo[0].id);
                    }}
                    onChange={(newAttrs) => {
                      setLogoPositionX(newAttrs.x);
                      setLogoPositionY(newAttrs.y);
                      const imgs = tranLogo.slice();
                      imgs[0] = newAttrs;
                      setTranLogo(imgs);
                    }}
                    initPosX={logoPositionX}
                    initPosY={logoPositionY}
                  />
                )}

                {/* {true && ( */}
                {!!userName?.length && (
                  <TransformableText
                    // eslint-disable-next-line react/no-array-index-key

                    name={userName}
                    // colour={bgColor}
                    fontFamily={fontFamily}
                    // alignment={alignment}
                    fontColor={fontColor}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    // fontStyle="bold"
                    fontSize={celebratorsNamesFontSize}
                    shapeProps={rect[0]}
                    isSelected={rect[0].id === selectedId}
                    onSelect={() => {
                      selectShape(rect[0].id);
                    }}
                    onChange={(newAttrs) => {
                      setcelebratorsPositionX(newAttrs.x);
                      setcelebratorsPositionY(newAttrs.y);
                      const rects = rectangles.slice();
                      rects[0] = newAttrs;
                      setRectangles(rects);
                    }}
                    isUnderline={celebratorTextIsUnderline}
                    isBold={celebratorTextIsBold}
                    initPosX={celebratorsPositionX}
                    initPosY={celebratorsPositionY}
                  />
                )}
                {/* )} */}
                {/* {true && ( */}
                {!!guildName?.length && (
                  <TransformableText
                    // eslint-disable-next-line react/no-array-index-key
                    name={guildName}
                    // colour={bgColorGuild}
                    fontFamily={fontFamilyGuild}
                    // alignment={alignment}
                    fontColor={fontColorGuild}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    // fontStyle="normal"
                    fontSize={dateFontSize}
                    shapeProps={rect[1]}
                    isSelected={rect[1].id === selectedId}
                    onSelect={() => {
                      selectShape(rect[1].id);
                    }}
                    onChange={(newAttrs) => {
                      setdatePositionX(newAttrs.x);
                      setdatePositionY(newAttrs.y);
                      const rects = rectangles.slice();
                      rects[1] = newAttrs;
                      setRectangles(rects);
                    }}
                    isBold={dateTextIsBold}
                    isUnderline={dateTextIsUnderline}
                    initPosX={datePositionX}
                    initPosY={datePositionY}
                  />
                )}
                {/* )} */}

                {/* {true && ( */}
                {!!thirdTextText?.length && (
                  <TransformableText
                    // eslint-disable-next-line react/no-array-index-key

                    name={thirdTextText}
                    // colour={bgColor}
                    fontFamily={fontFamilyThirdText}
                    // alignment={alignment}
                    fontColor={fontColorThirdText}
                    onMouseDown={checkDeselect}
                    onTouchStart={checkDeselect}
                    // fontStyle="bold"
                    fontSize={thirdTextFontSize}
                    shapeProps={rect[2]}
                    isSelected={rect[2].id === selectedId}
                    onSelect={() => {
                      selectShape(rect[2].id);
                    }}
                    onChange={(newAttrs) => {
                      setthirdTextPositionX(newAttrs.x);
                      setthirdTextPositionY(newAttrs.y);
                      const rects = rectangles.slice();
                      rects[2] = newAttrs;
                      setRectangles(rects);
                    }}
                    isBold={thirdTextIsBold}
                    isUnderline={thirdTextIsUnderline}
                    initPosX={thirdTextPositionX}
                    initPosY={thirdTextPositionY}
                  />
                )}
                {/* )} */}
              </Group>
              {!isEcoMode && (
                <Group
                  ref={groupRef2}
                  clipX={0}
                  clipY={0}
                  clipWidth={300}
                  clipHeight={900}
                  height={900}
                  width={300}
                  x={300}
                  y={0}
                >
                  <Rect
                    ref={rectRef2}
                    x={0}
                    y={0}
                    width={1200}
                    height={3600}
                    scale={{
                      x: 0.25,
                      y: 0.25,
                    }}
                    fillPatternRepeat="repeat"
                    // fill={stageBgColor}
                    // {...(!!colorOrImage2
                    //   ? { fillPatternImage: selectedFrame2 }
                    //   : { fill: stageBgColor2 })}
                    // // {...(!colorOrImage2 && )}

                    {...(!!colorOrImage2 && { fillPatternImage: selectedFrame2 })}
                    {...(!colorOrImage2 && { fill: stageBgColor2 })}
                  />
                  {imageTop2 && (
                    <TransformableImage
                      image={imageTop2}
                      imageSize={topImageSize2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      isSelected={renderImgTop2[0].id === selectedId12}
                      onSelect={() => {
                        if (renderImgTop2[0].id !== selectedId12) {
                          selectShape12(renderImgTop2[0].id);
                        } else {
                          selectShape12(null);
                        }
                      }}
                      onChange={(newAttrs) => {
                        setimagePositionX2(newAttrs.x);
                        setimagePositionY2(newAttrs.y);
                        const imgs = tranImgTop2.slice();
                        imgs[0] = newAttrs;
                        setTranImgTop2(imgs);
                      }}
                      initPosX={imagePositionX2}
                      initPosY={imagePositionY2}
                      noImage={noImage2}
                      shape={imageShape2}
                      grayscale={grayscale2}
                      scaleCircle={scaleCircle2}
                      scaleSquare={scaleSquare2}
                      scaleHeart={scaleHeart2}
                      offsetXHeart={offsetXHeart2}
                      offsetYHeart={offsetYHeart2}
                      scaleStar={scaleStar2}
                      offsetXCircle={offsetXCircle2}
                      offsetYCircle={offsetYCircle2}
                      offsetXStar={offsetXStar2}
                      offsetYStar={offsetYStar2}
                      innerRadiusStar={innerRadiusStar2}
                      outerRadiusStar={outerRadiusStar2}
                      offsetXHamsa={offsetXHamsa2}
                      offsetYHamsa={offsetYHamsa2}
                      scaleHamsa={scaleHamsa2}
                      scaleSquareInner={scaleSquareInner2}
                      scaleCircleInner={scaleCircleInner2}
                      scaleStarInner={scaleStarInner2}
                      scaleHamsaInner={scaleHamsaInner2}
                      scaleHeartInner={scaleHeartInner2}
                    />
                  )}

                  {imageMiddle2 && (
                    <TransformableImage
                      image={imageMiddle2}
                      imageSize={middleImageSize2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      isSelected={renderImgMiddle2[0].id === selectedId12}
                      onSelect={() => {
                        if (renderImgMiddle2[0].id !== selectedId12) {
                          selectShape12(renderImgMiddle2[0].id);
                        } else {
                          selectShape12(null);
                        }
                      }}
                      onChange={(newAttrs) => {
                        setmageMiddlePositionX2(newAttrs.x);
                        setmageMiddlePositionY2(newAttrs.y);
                        const imgs = tranImgMiddle2.slice();
                        imgs[0] = newAttrs;
                        setTranImgMiddle2(imgs);
                      }}
                      initPosX={imageMiddlePositionX2}
                      initPosY={imageMiddlePositionY2}
                      noImage={noImage2}
                      shape={imageShape2}
                      grayscale={grayscale2}
                      scaleCircle={scaleCircle2}
                      scaleSquare={scaleSquare2}
                      scaleHeart={scaleHeart2}
                      offsetXHeart={offsetXHeart2}
                      offsetYHeart={offsetYHeart2}
                      scaleStar={scaleStar2}
                      offsetXCircle={offsetXCircle2}
                      offsetYCircle={offsetYCircle2}
                      offsetXStar={offsetXStar2}
                      offsetYStar={offsetYStar2}
                      innerRadiusStar={innerRadiusStar2}
                      outerRadiusStar={outerRadiusStar2}
                      offsetXHamsa={offsetXHamsa2}
                      offsetYHamsa={offsetYHamsa2}
                      scaleHamsa={scaleHamsa2}
                      scaleSquareInner={scaleSquareInner2}
                      scaleCircleInner={scaleCircleInner2}
                      scaleStarInner={scaleStarInner2}
                      scaleHamsaInner={scaleHamsaInner2}
                      scaleHeartInner={scaleHeartInner2}
                    />
                  )}

                  {imageBottom2 && (
                    <TransformableImage
                      image={imageBottom2}
                      imageSize={bottomImageSize2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      isSelected={renderImgBottom2[0].id === selectedId12}
                      onSelect={() => {
                        if (renderImgBottom2[0].id !== selectedId12) {
                          selectShape12(renderImgBottom2[0].id);
                        } else {
                          selectShape12(null);
                        }
                      }}
                      onChange={(newAttrs) => {
                        setmageBottomPositionX2(newAttrs.x);
                        setmageBottomPositionY2(newAttrs.y);
                        const imgs = tranImgBottom2.slice();
                        imgs[0] = newAttrs;
                        setTranImgBottom2(imgs);
                      }}
                      initPosX={imageBottomPositionX2}
                      initPosY={imageBottomPositionY2}
                      noImage={noImage2}
                      shape={imageShape2}
                      grayscale={grayscale2}
                      scaleCircle={scaleCircle2}
                      scaleSquare={scaleSquare2}
                      scaleHeart={scaleHeart2}
                      offsetXHeart={offsetXHeart2}
                      offsetYHeart={offsetYHeart2}
                      scaleStar={scaleStar2}
                      offsetXCircle={offsetXCircle2}
                      offsetYCircle={offsetYCircle2}
                      offsetXStar={offsetXStar2}
                      offsetYStar={offsetYStar2}
                      innerRadiusStar={innerRadiusStar2}
                      outerRadiusStar={outerRadiusStar2}
                      offsetXHamsa={offsetXHamsa2}
                      offsetYHamsa={offsetYHamsa2}
                      scaleHamsa={scaleHamsa2}
                      scaleSquareInner={scaleSquareInner2}
                      scaleCircleInner={scaleCircleInner2}
                      scaleStarInner={scaleStarInner2}
                      scaleHamsaInner={scaleHamsaInner2}
                      scaleHeartInner={scaleHeartInner2}
                    />
                  )}
                  {SelectedIcon2 && (
                    <TransformableIcon
                      image={SelectedIcon2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      isSelected={renderIcon2[0].id === selectedId12}
                      onSelect={() => {
                        selectShape12(renderIcon2[0].id);
                      }}
                      onChange={(newAttrs) => {
                        seticonPositionX2(newAttrs.x);
                        seticonPositionY2(newAttrs.y);
                        const imgs = tranIcon2.slice();
                        imgs[0] = newAttrs;
                        setTranIcon2(imgs);
                      }}
                      initPosX={iconPositionX2}
                      initPosY={iconPositionY2}
                    />
                  )}

                  {imageLogo2 && (
                    <TransformableLogo
                      image={imageLogo2}
                      imageWidth={logoWidth2}
                      imageHeight={logoHeight2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      isSelected={renderLogo2[0].id === selectedId12}
                      onSelect={() => {
                        selectShape12(renderLogo2[0].id);
                      }}
                      onChange={(newAttrs) => {
                        setLogoPositionX2(newAttrs.x);
                        setLogoPositionY2(newAttrs.y);
                        const imgs = tranLogo2.slice();
                        imgs[0] = newAttrs;
                        setTranLogo2(imgs);
                      }}
                      initPosX={logoPositionX2}
                      initPosY={logoPositionY2}
                    />
                  )}

                  {/* {checked2 && ( */}
                  {!!userName2?.length && (
                    <TransformableText
                      // eslint-disable-next-line react/no-array-index-key

                      name={userName2}
                      fontFamily={fontFamily2}
                      fontColor={fontColor2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      fontSize={celebratorsNamesFontSize2}
                      shapeProps={rect2[0]}
                      isSelected={rect2[0].id === selectedId2}
                      onSelect={() => {
                        selectShape2(rect[0].id);
                      }}
                      onChange={(newAttrs) => {
                        setcelebratorsPositionX2(newAttrs.x);
                        setcelebratorsPositionY2(newAttrs.y);
                        const rects = rectangles2.slice();
                        rects[0] = newAttrs;
                        setRectangles2(rects);
                      }}
                      isUnderline={celebratorTextIsUnderline2}
                      isBold={celebratorTextIsBold2}
                      initPosX={celebratorsPositionX2}
                      initPosY={celebratorsPositionY2}
                    />
                  )}
                  {/* )} */}
                  {/* {checkedGuild2 && ( */}
                  {!!guildName2?.length && (
                    <TransformableText
                      // eslint-disable-next-line react/no-array-index-key
                      name={guildName2}
                      fontFamily={fontFamilyGuild2}
                      fontColor={fontColorGuild2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      fontSize={dateFontSize2}
                      shapeProps={rect2[1]}
                      isSelected={rect2[1].id === selectedId2}
                      onSelect={() => {
                        selectShape2(rect2[1].id);
                      }}
                      onChange={(newAttrs) => {
                        setdatePositionX2(newAttrs.x);
                        setdatePositionY2(newAttrs.y);
                        const rects = rectangles2.slice();
                        rects[1] = newAttrs;
                        setRectangles2(rects);
                      }}
                      isBold={dateTextIsBold2}
                      isUnderline={dateTextIsUnderline2}
                      initPosX={datePositionX2}
                      initPosY={datePositionY2}
                    />
                  )}
                  {/* )} */}

                  {/* {checkedThirdText2 && ( */}
                  {!!thirdTextText2?.length && (
                    <TransformableText
                      // eslint-disable-next-line react/no-array-index-key
                      name={thirdTextText2}
                      fontFamily={fontFamilyThirdText2}
                      fontColor={fontColorThirdText2}
                      onMouseDown={checkDeselect2}
                      onTouchStart={checkDeselect2}
                      fontSize={thirdTextFontSize2}
                      shapeProps={rect2[2]}
                      isSelected={rect2[2].id === selectedId2}
                      onSelect={() => {
                        selectShape2(rect2[2].id);
                      }}
                      onChange={(newAttrs) => {
                        setthirdTextPositionX2(newAttrs.x);
                        setthirdTextPositionY2(newAttrs.y);
                        const rects = rectangles2.slice();
                        rects[2] = newAttrs;
                        setRectangles2(rects);
                      }}
                      isBold={thirdTextIsBold2}
                      isUnderline={thirdTextIsUnderline2}
                      initPosX={thirdTextPositionX2}
                      initPosY={thirdTextPositionY2}
                    />
                  )}
                  {/* )} */}
                </Group>
              )}
            </Layer>
          </>
        ) : (
          <>
            <Layer>
              <Group
                ref={groupRef2}
                clipX={0}
                clipY={0}
                clipWidth={300}
                clipHeight={900}
                height={900}
                width={300}
                x={300}
                y={0}
              >
                <Rect
                  ref={rectRef2}
                  x={0}
                  y={0}
                  width={1200}
                  height={3600}
                  scale={{
                    x: 0.25,
                    y: 0.25,
                  }}
                  fillPatternRepeat="repeat"
                  // fill={stageBgColor}
                  // {...(!!colorOrImage2
                  //   ? { fillPatternImage: selectedFrame2 }
                  //   : { fill: stageBgColor2 })}
                  // // {...(!colorOrImage2 && )}

                  {...(!!colorOrImage2 && { fillPatternImage: selectedFrame2 })}
                  {...(!colorOrImage2 && { fill: stageBgColor2 })}
                />
                {imageTop2 && (
                  <TransformableImage
                    image={imageTop2}
                    imageSize={topImageSize2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    isSelected={renderImgTop2[0].id === selectedId12}
                    onSelect={() => {
                      if (renderImgTop2[0].id !== selectedId12) {
                        selectShape12(renderImgTop2[0].id);
                      } else {
                        selectShape12(null);
                      }
                    }}
                    onChange={(newAttrs) => {
                      setimagePositionX2(newAttrs.x);
                      setimagePositionY2(newAttrs.y);
                      const imgs = tranImgTop2.slice();
                      imgs[0] = newAttrs;
                      setTranImgTop2(imgs);
                    }}
                    initPosX={imagePositionX2}
                    initPosY={imagePositionY2}
                    noImage={noImage2}
                    shape={imageShape2}
                    grayscale={grayscale2}
                    scaleCircle={scaleCircle2}
                    scaleSquare={scaleSquare2}
                    scaleHeart={scaleHeart2}
                    offsetXHeart={offsetXHeart2}
                    offsetYHeart={offsetYHeart2}
                    scaleStar={scaleStar2}
                    offsetXCircle={offsetXCircle2}
                    offsetYCircle={offsetYCircle2}
                    offsetXStar={offsetXStar2}
                    offsetYStar={offsetYStar2}
                    innerRadiusStar={innerRadiusStar2}
                    outerRadiusStar={outerRadiusStar2}
                    offsetXHamsa={offsetXHamsa2}
                    offsetYHamsa={offsetYHamsa2}
                    scaleHamsa={scaleHamsa2}
                    scaleSquareInner={scaleSquareInner2}
                    scaleCircleInner={scaleCircleInner2}
                    scaleStarInner={scaleStarInner2}
                    scaleHamsaInner={scaleHamsaInner2}
                    scaleHeartInner={scaleHeartInner2}
                  />
                )}

                {imageMiddle2 && (
                  <TransformableImage
                    image={imageMiddle2}
                    imageSize={middleImageSize2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    isSelected={renderImgMiddle2[0].id === selectedId12}
                    onSelect={() => {
                      if (renderImgMiddle2[0].id !== selectedId12) {
                        selectShape12(renderImgMiddle2[0].id);
                      } else {
                        selectShape12(null);
                      }
                    }}
                    onChange={(newAttrs) => {
                      setmageMiddlePositionX2(newAttrs.x);
                      setmageMiddlePositionY2(newAttrs.y);
                      const imgs = tranImgMiddle2.slice();
                      imgs[0] = newAttrs;
                      setTranImgMiddle2(imgs);
                    }}
                    initPosX={imageMiddlePositionX2}
                    initPosY={imageMiddlePositionY2}
                    noImage={noImage2}
                    shape={imageShape2}
                    grayscale={grayscale2}
                    scaleCircle={scaleCircle2}
                    scaleSquare={scaleSquare2}
                    scaleHeart={scaleHeart2}
                    offsetXHeart={offsetXHeart2}
                    offsetYHeart={offsetYHeart2}
                    scaleStar={scaleStar2}
                    offsetXCircle={offsetXCircle2}
                    offsetYCircle={offsetYCircle2}
                    offsetXStar={offsetXStar2}
                    offsetYStar={offsetYStar2}
                    innerRadiusStar={innerRadiusStar2}
                    outerRadiusStar={outerRadiusStar2}
                    offsetXHamsa={offsetXHamsa2}
                    offsetYHamsa={offsetYHamsa2}
                    scaleHamsa={scaleHamsa2}
                    scaleSquareInner={scaleSquareInner2}
                    scaleCircleInner={scaleCircleInner2}
                    scaleStarInner={scaleStarInner2}
                    scaleHamsaInner={scaleHamsaInner2}
                    scaleHeartInner={scaleHeartInner2}
                  />
                )}

                {imageBottom2 && (
                  <TransformableImage
                    image={imageBottom2}
                    imageSize={bottomImageSize2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    isSelected={renderImgBottom2[0].id === selectedId12}
                    onSelect={() => {
                      if (renderImgBottom2[0].id !== selectedId12) {
                        selectShape12(renderImgBottom2[0].id);
                      } else {
                        selectShape12(null);
                      }
                    }}
                    onChange={(newAttrs) => {
                      setmageBottomPositionX2(newAttrs.x);
                      setmageBottomPositionY2(newAttrs.y);
                      const imgs = tranImgBottom2.slice();
                      imgs[0] = newAttrs;
                      setTranImgBottom2(imgs);
                    }}
                    initPosX={imageBottomPositionX2}
                    initPosY={imageBottomPositionY2}
                    noImage={noImage2}
                    shape={imageShape2}
                    grayscale={grayscale2}
                    scaleCircle={scaleCircle2}
                    scaleSquare={scaleSquare2}
                    scaleHeart={scaleHeart2}
                    offsetXHeart={offsetXHeart2}
                    offsetYHeart={offsetYHeart2}
                    scaleStar={scaleStar2}
                    offsetXCircle={offsetXCircle2}
                    offsetYCircle={offsetYCircle2}
                    offsetXStar={offsetXStar2}
                    offsetYStar={offsetYStar2}
                    innerRadiusStar={innerRadiusStar2}
                    outerRadiusStar={outerRadiusStar2}
                    offsetXHamsa={offsetXHamsa2}
                    offsetYHamsa={offsetYHamsa2}
                    scaleHamsa={scaleHamsa2}
                    scaleSquareInner={scaleSquareInner2}
                    scaleCircleInner={scaleCircleInner2}
                    scaleStarInner={scaleStarInner2}
                    scaleHamsaInner={scaleHamsaInner2}
                    scaleHeartInner={scaleHeartInner2}
                  />
                )}
                {SelectedIcon2 && (
                  <TransformableIcon
                    image={SelectedIcon2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    isSelected={renderIcon2[0].id === selectedId12}
                    onSelect={() => {
                      selectShape12(renderIcon2[0].id);
                    }}
                    onChange={(newAttrs) => {
                      seticonPositionX2(newAttrs.x);
                      seticonPositionY2(newAttrs.y);
                      const imgs = tranIcon2.slice();
                      imgs[0] = newAttrs;
                      setTranIcon2(imgs);
                    }}
                    initPosX={iconPositionX2}
                    initPosY={iconPositionY2}
                  />
                )}

                {imageLogo2 && (
                  <TransformableLogo
                    image={imageLogo2}
                    imageWidth={logoWidth2}
                    imageHeight={logoHeight2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    isSelected={renderLogo2[0].id === selectedId12}
                    onSelect={() => {
                      selectShape12(renderLogo2[0].id);
                    }}
                    onChange={(newAttrs) => {
                      setLogoPositionX2(newAttrs.x);
                      setLogoPositionY2(newAttrs.y);
                      const imgs = tranLogo2.slice();
                      imgs[0] = newAttrs;
                      setTranLogo2(imgs);
                    }}
                    initPosX={logoPositionX2}
                    initPosY={logoPositionY2}
                  />
                )}

                {/* {checked2 && ( */}
                {!!userName2?.length && (
                  <TransformableText
                    // eslint-disable-next-line react/no-array-index-key

                    name={userName2}
                    fontFamily={fontFamily2}
                    fontColor={fontColor2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    fontSize={celebratorsNamesFontSize2}
                    shapeProps={rect2[0]}
                    isSelected={rect2[0].id === selectedId2}
                    onSelect={() => {
                      selectShape2(rect[0].id);
                    }}
                    onChange={(newAttrs) => {
                      setcelebratorsPositionX2(newAttrs.x);
                      setcelebratorsPositionY2(newAttrs.y);
                      const rects = rectangles2.slice();
                      rects[0] = newAttrs;
                      setRectangles2(rects);
                    }}
                    isUnderline={celebratorTextIsUnderline2}
                    isBold={celebratorTextIsBold2}
                    initPosX={celebratorsPositionX2}
                    initPosY={celebratorsPositionY2}
                  />
                )}
                {/* )} */}
                {/* {checkedGuild2 && ( */}
                {!!guildName2?.length && (
                  <TransformableText
                    // eslint-disable-next-line react/no-array-index-key
                    name={guildName2}
                    fontFamily={fontFamilyGuild2}
                    fontColor={fontColorGuild2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    fontSize={dateFontSize2}
                    shapeProps={rect2[1]}
                    isSelected={rect2[1].id === selectedId2}
                    onSelect={() => {
                      selectShape2(rect2[1].id);
                    }}
                    onChange={(newAttrs) => {
                      setdatePositionX2(newAttrs.x);
                      setdatePositionY2(newAttrs.y);
                      const rects = rectangles2.slice();
                      rects[1] = newAttrs;
                      setRectangles2(rects);
                    }}
                    isBold={dateTextIsBold2}
                    isUnderline={dateTextIsUnderline2}
                    initPosX={datePositionX2}
                    initPosY={datePositionY2}
                  />
                )}
                {/* )} */}

                {/* {checkedThirdText2 && ( */}
                {!!thirdTextText2?.length && (
                  <TransformableText
                    // eslint-disable-next-line react/no-array-index-key
                    name={thirdTextText2}
                    fontFamily={fontFamilyThirdText2}
                    fontColor={fontColorThirdText2}
                    onMouseDown={checkDeselect2}
                    onTouchStart={checkDeselect2}
                    fontSize={thirdTextFontSize2}
                    shapeProps={rect2[2]}
                    isSelected={rect2[2].id === selectedId2}
                    onSelect={() => {
                      selectShape2(rect2[2].id);
                    }}
                    onChange={(newAttrs) => {
                      setthirdTextPositionX2(newAttrs.x);
                      setthirdTextPositionY2(newAttrs.y);
                      const rects = rectangles2.slice();
                      rects[2] = newAttrs;
                      setRectangles2(rects);
                    }}
                    isBold={thirdTextIsBold2}
                    isUnderline={thirdTextIsUnderline2}
                    initPosX={thirdTextPositionX2}
                    initPosY={thirdTextPositionY2}
                  />
                )}
                {/* )} */}
              </Group>
              {!isEcoMode && (
                <Group
                  ref={groupRef1}
                  // clipX={imagePositionX / 5}
                  // clipY={imagePositionY / 5}
                  // clipWidth={300}
                  // clipHeight={900}
                  x={0}
                  y={0}
                  height={900}
                  width={300}
                >
                  <Rect
                    x={0}
                    y={0}
                    width={1200}
                    height={3600}
                    scale={{
                      x: 0.25,
                      y: 0.25,
                    }}
                    fillPatternRepeat="repeat"
                    // fill={stageBgColor}
                    {...(!!colorOrImage && { fillPatternImage: selectedFrame })}
                    {...(!colorOrImage && { fill: stageBgColor })}
                  />
                  {imageTop && (
                    <TransformableImage
                      image={imageTop}
                      // imageWidth={imageRenderWidth}
                      // imageHeight={imageRenderHeight}
                      imageSize={topImageSize}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      isSelected={renderImgTop[0].id === selectedId1}
                      onSelect={() => {
                        if (renderImgTop[0].id !== selectedId1) {
                          selectShape1(renderImgTop[0].id);
                        } else {
                          selectShape1(null);
                        }
                      }}
                      onChange={(newAttrs) => {
                        setimagePositionX(newAttrs.x);
                        setimagePositionY(newAttrs.y);
                        const imgs = tranImgTop.slice();
                        imgs[0] = newAttrs;
                        setTranImgTop(imgs);
                      }}
                      initPosX={imagePositionX}
                      initPosY={imagePositionY}
                      noImage={noImage}
                      shape={imageShape}
                      grayscale={grayscale}
                      scaleCircle={scaleCircle}
                      scaleSquare={scaleSquare}
                      scaleHeart={scaleHeart}
                      offsetXHeart={offsetXHeart}
                      offsetYHeart={offsetYHeart}
                      scaleStar={scaleStar}
                      offsetXCircle={offsetXCircle}
                      offsetYCircle={offsetYCircle}
                      offsetXStar={offsetXStar}
                      offsetYStar={offsetYStar}
                      innerRadiusStar={innerRadiusStar}
                      outerRadiusStar={outerRadiusStar}
                      offsetXHamsa={offsetXHamsa}
                      offsetYHamsa={offsetYHamsa}
                      scaleHamsa={scaleHamsa}
                      scaleSquareInner={scaleSquareInner}
                      scaleCircleInner={scaleCircleInner}
                      scaleStarInner={scaleStarInner}
                      scaleHamsaInner={scaleHamsaInner}
                      scaleHeartInner={scaleHeartInner}

                      // setInitPosX={setimagePositionX}
                      // setInitPosY={setimagePositionY}
                    />
                  )}

                  {imageMiddle && (
                    <TransformableImage
                      image={imageMiddle}
                      // imageWidth={imageRenderWidth}
                      // imageHeight={imageRenderHeight}
                      imageSize={middleImageSize}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      isSelected={renderImgMiddle[0].id === selectedId1}
                      onSelect={() => {
                        if (renderImgMiddle[0].id !== selectedId1) {
                          selectShape1(renderImgMiddle[0].id);
                        } else {
                          selectShape1(null);
                        }
                      }}
                      onChange={(newAttrs) => {
                        setmageMiddlePositionX(newAttrs.x);
                        setmageMiddlePositionY(newAttrs.y);
                        const imgs = tranImgMiddle.slice();
                        imgs[0] = newAttrs;
                        setTranImgMiddle(imgs);
                      }}
                      initPosX={imageMiddlePositionX}
                      initPosY={imageMiddlePositionY}
                      noImage={noImage}
                      shape={imageShape}
                      grayscale={grayscale}
                      scaleCircle={scaleCircle}
                      scaleSquare={scaleSquare}
                      scaleHeart={scaleHeart}
                      offsetXHeart={offsetXHeart}
                      offsetYHeart={offsetYHeart}
                      scaleStar={scaleStar}
                      offsetXCircle={offsetXCircle}
                      offsetYCircle={offsetYCircle}
                      offsetXStar={offsetXStar}
                      offsetYStar={offsetYStar}
                      innerRadiusStar={innerRadiusStar}
                      outerRadiusStar={outerRadiusStar}
                      offsetXHamsa={offsetXHamsa}
                      offsetYHamsa={offsetYHamsa}
                      scaleHamsa={scaleHamsa}
                      scaleSquareInner={scaleSquareInner}
                      scaleCircleInner={scaleCircleInner}
                      scaleStarInner={scaleStarInner}
                      scaleHamsaInner={scaleHamsaInner}
                      scaleHeartInner={scaleHeartInner}
                      // setInitPosX={setmageMiddlePositionX}
                      // setInitPosY={setmageMiddlePositionY}
                    />
                  )}

                  {imageBottom && (
                    <TransformableImage
                      image={imageBottom}
                      // imageWidth={imageRenderWidth}
                      // imageHeight={imageRenderHeight}
                      imageSize={bottomImageSize}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      isSelected={renderImgBottom[0].id === selectedId1}
                      onSelect={() => {
                        if (renderImgBottom[0].id !== selectedId1) {
                          selectShape1(renderImgBottom[0].id);
                        } else {
                          selectShape1(null);
                        }
                      }}
                      onChange={(newAttrs) => {
                        setmageBottomPositionX(newAttrs.x);
                        setmageBottomPositionY(newAttrs.y);
                        const imgs = tranImgBottom.slice();
                        imgs[0] = newAttrs;
                        setTranImgBottom(imgs);
                      }}
                      initPosX={imageBottomPositionX}
                      initPosY={imageBottomPositionY}
                      noImage={noImage}
                      shape={imageShape}
                      grayscale={grayscale}
                      scaleCircle={scaleCircle}
                      scaleSquare={scaleSquare}
                      scaleHeart={scaleHeart}
                      offsetXHeart={offsetXHeart}
                      offsetYHeart={offsetYHeart}
                      scaleStar={scaleStar}
                      offsetXCircle={offsetXCircle}
                      offsetYCircle={offsetYCircle}
                      offsetXStar={offsetXStar}
                      offsetYStar={offsetYStar}
                      innerRadiusStar={innerRadiusStar}
                      outerRadiusStar={outerRadiusStar}
                      offsetXHamsa={offsetXHamsa}
                      offsetYHamsa={offsetYHamsa}
                      scaleHamsa={scaleHamsa}
                      scaleSquareInner={scaleSquareInner}
                      scaleCircleInner={scaleCircleInner}
                      scaleStarInner={scaleStarInner}
                      scaleHamsaInner={scaleHamsaInner}
                      scaleHeartInner={scaleHeartInner}
                      // setInitPosX={setmageBottomPositionX}
                      // setInitPosY={setmageBottomPositionY}
                    />
                  )}
                  {SelectedIcon && (
                    <TransformableIcon
                      image={SelectedIcon}
                      // imageWidth={iconRenderWidth}
                      // imageHeight={iconRenderHeight}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      isSelected={renderIcon[0].id === selectedId1}
                      onSelect={() => {
                        selectShape1(renderIcon[0].id);
                      }}
                      onChange={(newAttrs) => {
                        seticonPositionX(newAttrs.x);
                        seticonPositionY(newAttrs.y);
                        const imgs = tranIcon.slice();
                        imgs[0] = newAttrs;
                        setTranIcon(imgs);
                      }}
                      initPosX={iconPositionX}
                      initPosY={iconPositionY}
                      // setInitPosX={seticonPositionX}
                      // setInitPosY={seticonPositionY}
                    />
                  )}

                  {imageLogo && (
                    <TransformableLogo
                      image={imageLogo}
                      imageWidth={logoWidth}
                      imageHeight={logoHeight}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      isSelected={renderLogo[0].id === selectedId1}
                      onSelect={() => {
                        selectShape1(renderLogo[0].id);
                      }}
                      onChange={(newAttrs) => {
                        setLogoPositionX(newAttrs.x);
                        setLogoPositionY(newAttrs.y);
                        const imgs = tranLogo.slice();
                        imgs[0] = newAttrs;
                        setTranLogo(imgs);
                      }}
                      initPosX={logoPositionX}
                      initPosY={logoPositionY}
                    />
                  )}

                  {/* {true && ( */}
                  {!!userName?.length && (
                    <TransformableText
                      // eslint-disable-next-line react/no-array-index-key

                      name={userName}
                      // colour={bgColor}
                      fontFamily={fontFamily}
                      // alignment={alignment}
                      fontColor={fontColor}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      // fontStyle="bold"
                      fontSize={celebratorsNamesFontSize}
                      shapeProps={rect[0]}
                      isSelected={rect[0].id === selectedId}
                      onSelect={() => {
                        selectShape(rect[0].id);
                      }}
                      onChange={(newAttrs) => {
                        setcelebratorsPositionX(newAttrs.x);
                        setcelebratorsPositionY(newAttrs.y);
                        const rects = rectangles.slice();
                        rects[0] = newAttrs;
                        setRectangles(rects);
                      }}
                      isUnderline={celebratorTextIsUnderline}
                      isBold={celebratorTextIsBold}
                      initPosX={celebratorsPositionX}
                      initPosY={celebratorsPositionY}
                    />
                  )}
                  {/* )} */}
                  {/* {true && ( */}
                  {!!guildName?.length && (
                    <TransformableText
                      // eslint-disable-next-line react/no-array-index-key
                      name={guildName}
                      // colour={bgColorGuild}
                      fontFamily={fontFamilyGuild}
                      // alignment={alignment}
                      fontColor={fontColorGuild}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      // fontStyle="normal"
                      fontSize={dateFontSize}
                      shapeProps={rect[1]}
                      isSelected={rect[1].id === selectedId}
                      onSelect={() => {
                        selectShape(rect[1].id);
                      }}
                      onChange={(newAttrs) => {
                        setdatePositionX(newAttrs.x);
                        setdatePositionY(newAttrs.y);
                        const rects = rectangles.slice();
                        rects[1] = newAttrs;
                        setRectangles(rects);
                      }}
                      isBold={dateTextIsBold}
                      isUnderline={dateTextIsUnderline}
                      initPosX={datePositionX}
                      initPosY={datePositionY}
                    />
                  )}
                  {/* )} */}

                  {/* {true && ( */}
                  {!!thirdTextText?.length && (
                    <TransformableText
                      // eslint-disable-next-line react/no-array-index-key

                      name={thirdTextText}
                      // colour={bgColor}
                      fontFamily={fontFamilyThirdText}
                      // alignment={alignment}
                      fontColor={fontColorThirdText}
                      onMouseDown={checkDeselect}
                      onTouchStart={checkDeselect}
                      // fontStyle="bold"
                      fontSize={thirdTextFontSize}
                      shapeProps={rect[2]}
                      isSelected={rect[2].id === selectedId}
                      onSelect={() => {
                        selectShape(rect[2].id);
                      }}
                      onChange={(newAttrs) => {
                        setthirdTextPositionX(newAttrs.x);
                        setthirdTextPositionY(newAttrs.y);
                        const rects = rectangles.slice();
                        rects[2] = newAttrs;
                        setRectangles(rects);
                      }}
                      isBold={thirdTextIsBold}
                      isUnderline={thirdTextIsUnderline}
                      initPosX={thirdTextPositionX}
                      initPosY={thirdTextPositionY}
                    />
                  )}
                  {/* )} */}
                </Group>
              )}
            </Layer>
          </>
        )}
      </Stage>
    </>
  );
};

export default CanvasStage;
