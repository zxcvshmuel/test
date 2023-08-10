import React, { useState } from "react";
import { RecoilRoot } from "recoil";

/// Components
import { Stage, Layer, Image, Group, Rect } from "react-konva"; //eslint-disable-line
import { useRecoilState } from "recoil";

import TransformableText from "./TransformableText";
import TransformableImage from "./TransformableImage";
import TransformableIcon from "./TransformableIcon";

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
  selectId,
  selectId1,
} from "../recoil/themes";

const CanvasStage = ({
  stageRef,
  //
  userName,
  guildName,
  thirdTextText,
  //
  checked,
  checkedGuild,
  checkedThirdText,
  //
  imageTop,
  imageMiddle,
  imageBottom,
  // bgColor,
  // bgColorGuild,
  fontFamily,
  fontColor,
  fontFamilyGuild,
  fontColorGuild,
  fontFamilyThirdText,
  fontColorThirdText,
  //
  celebratorTextIsBold,
  celebratorTextIsUnderline,
  dateTextIsBold,
  dateTextIsUnderline,
  thirdTextIsBold,
  thirdTextIsUnderline,
  //

  //
  alignment,
  width,
  height,
  SelectedIcon,
  stageBgColor,
  selectedFrame,
  colorOrImage,
}) => {
  const groupDimensions = {
    height: 300,
    width: 900,
  };
  const groupHeight = groupDimensions.height; //eslint-disable-line
  const aspectRatio = width / height;
  const imageRenderWidth = (aspectRatio * groupDimensions.height) / 4;
  const imageRenderHeight = groupDimensions.height / 4;
  const iconRenderWidth = 50;
  const iconRenderHeight = 50;

  const [imagePositionX, setimagePositionX] = useRecoilState(
    positionImageTopXInStore
  );
  const [imagePositionY, setimagePositionY] = useRecoilState(
    positionImageTopYInStore
  );

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

  const [iconPositionX, seticonPositionX] =
    useRecoilState(iconPositionXInStore);
  const [iconPositionY, seticonPositionY] =
    useRecoilState(iconPositionYInStore);

  const [datePositionX, setdatePositionX] =
    useRecoilState(datePositionXInStore);
  const [datePositionY, setdatePositionY] =
    useRecoilState(datePositionYInStore);

  const [thirdTextPositionX, setthirdTextPositionX] = useRecoilState(
    thirdTextPositionXInStore
  );
  const [thirdTextPositionY, setthirdTextPositionY] = useRecoilState(
    thirdTextPositionYInStore
  );

  const [celebratorsPositionX, setcelebratorsPositionX] = useRecoilState(
    celebratorsPositionXInStore
  );
  const [celebratorsPositionY, setcelebratorsPositionY] = useRecoilState(
    celebratorsPositionYInStore
  );
  //eslint-disable-next-line
  const [celebratorsNamesFontSize, setCelebratorsNamesFontSize] =
    useRecoilState(celebratorsNamesFontSizeInStore);
  const [dateFontSize, setDateFontSize] = useRecoilState(dateFontSizeInStore); //eslint-disable-line
  const [thirdTextFontSize, setThirdTextFontSize] = useRecoilState(
    thirdTextFontSizeInStore
  ); //eslint-disable-line

  const [noImage, setNoImage] = useRecoilState(cleanImages); //eslint-disable-line
  const [imageShape, setImageShape] = useRecoilState(shape); //eslint-disable-line
  const [grayscale] = useRecoilState(grayscaleFilter); //eslint-disable-line

  const [topImageSize, setTopImageSize] = useRecoilState(topImageSizeInStore); //eslint-disable-line
  const [middleImageSize, setMiddleImageSize] = useRecoilState(
    middleImageSizeInStore
  ); //eslint-disable-line
  const [bottomImageSize, setBottomImageSize] = useRecoilState(
    bottomImageSizeInStore
  ); //eslint-disable-line

  const [scaleSquare, setScaleSquare] = useRecoilState(scaleSquareInStore); //eslint-disable-line
  const [scaleCircle, setScaleCircle] = useRecoilState(scaleCircleInStore); //eslint-disable-line
  const [scaleStar, setScaleStar] = useRecoilState(scaleStarInStore); //eslint-disable-line
  const [scaleHeart, setScaleHeart] = useRecoilState(scaleHeartInStore); //eslint-disable-line
  const [scaleHamsa, setScaleHamsa] = useRecoilState(scaleHamsaInStore); //eslint-disable-line

  const [scaleSquareInner, setScaleSquareInner] = useRecoilState(
    scaleSquareInnerInStore
  ); //eslint-disable-line
  const [scaleCircleInner, setScaleCircleInner] = useRecoilState(
    scaleCircleInnerInStore
  ); //eslint-disable-line
  const [scaleStarInner, setScaleStarInner] = useRecoilState(
    scaleStarInnerInStore
  ); //eslint-disable-line
  const [scaleHeartInner, setScaleHeartInner] = useRecoilState(
    scaleHeartInnerInStore
  ); //eslint-disable-line
  const [scaleHamsaInner, setScaleHamsaInner] = useRecoilState(
    scaleHamsaInnerInStore
  ); //eslint-disable-line

  const [offsetXCircle, setOffsetXCircle] =
    useRecoilState(offsetXCircleInStore); //eslint-disable-line
  const [offsetYCircle, setOffsetYCircle] =
    useRecoilState(offsetYCircleInStore); //eslint-disable-line
  const [offsetXStar, setOffsetXStar] = useRecoilState(offsetXStarInStore); //eslint-disable-line
  const [offsetYStar, setOffsetYStar] = useRecoilState(offsetYStarInStore); //eslint-disable-line
  const [offsetXHeart, setOffsetXHeart] = useRecoilState(offsetXHeartInStore); //eslint-disable-line
  const [offsetYHeart, setOffsetYHeart] = useRecoilState(offsetYHeartInStore); //eslint-disable-line
  const [offsetXHamsa, setOffsetXHamsa] = useRecoilState(offsetXHamsaInStore); //eslint-disable-line
  const [offsetYHamsa, setOffsetYHamsa] = useRecoilState(offsetYHamsaInStore); //eslint-disable-line

  const [innerRadiusStar, setInnerRadiusStar] = useRecoilState(
    innerRadiusStarInStore
  ); //eslint-disable-line
  const [outerRadiusStar, setOuterRadiusStar] = useRecoilState(
    outerRadiusStarInStore
  ); //eslint-disable-line

  const rect = [
    {
      x: 50,
      y: 50,
      id: "rect1",
    },
    {
      x: 100,
      y: 100,
      id: "rect2",
    },
    {
      x: 75,
      y: 75,
      id: "rect3",
    },
  ];

  const renderImgTop = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: "renderImgTop",
    },
  ];
  const renderImgMiddle = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: "renderImgMiddle",
    },
  ];
  const renderImgBottom = [
    {
      x: imagePositionX,
      y: imagePositionY,
      id: "renderImgBottom",
    },
  ];
  const renderIcon = [
    {
      x: iconPositionX,
      y: iconPositionY,
      id: "renderIcon",
    },
  ];
  // const renderImgMiddle = [

  // ];
  // const renderImgBottom = [

  // ];

  const [tranImgTop, setTranImgTop] = useState(renderImgTop);
  const [tranImgMiddle, setTranImgMiddle] = useState(renderImgMiddle);
  const [tranImgBottom, setTranImgBottom] = useState(renderImgBottom);
  const [tranIcon, setTranIcon] = useState(renderIcon);

  const [selectedId1, selectShape1] = useRecoilState(selectId1);
  const [selectedId, selectShape] = useRecoilState(selectId);
  const [rectangles, setRectangles] = useState(rect);

  const checkDeselect = () => {
    selectShape1(null);
    selectShape(null);
  };

  React.useEffect(() => {
    if (stageRef) {
      stageRef?.current?.cache();
    }
  }, [stageRef]);

  return (
    <RecoilRoot>
      <Layer
      // clipX={imagePositionX / 5}
      // clipY={imagePositionY / 5}
      // clipWidth={300}
      // clipHeight={900}

      // x={0}
      // y={0}
      // height={900}
      // width={300}
      // fill={'lightblue'}
      >
        <Rect
          x={0}
          y={0}
          width={300} //*2
          height={900} //*2
          // scale={{
          //   x: 0.5,
          //   y: 0.5,
          // }}
          // fillPatternRepeat="repeat"
          fill={"#000000"}
          // {...(!!colorOrImage && { fillPatternImage: selectedFrame })}
          // {...(!colorOrImage && { fill: stageBgColor })}
        />
        {
          <TransformableImage
            image={imageTop}
            imageWidth={imageRenderWidth}
            imageHeight={imageRenderHeight}
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
        }

        <TransformableImage
          image={imageMiddle}
          imageWidth={imageRenderWidth}
          imageHeight={imageRenderHeight}
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

        <TransformableImage
          image={imageBottom}
          imageWidth={imageRenderWidth}
          imageHeight={imageRenderHeight}
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
        <TransformableIcon
          image={SelectedIcon}
          imageWidth={iconRenderWidth}
          imageHeight={iconRenderHeight}
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

        {checked && (
          <TransformableText
            // eslint-disable-next-line react/no-array-index-key

            name={userName}
            // colour={bgColor}
            fontFamily={fontFamily}
            alignment={alignment}
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
        {checkedGuild && (
          <TransformableText
            // eslint-disable-next-line react/no-array-index-key
            name={guildName}
            // colour={bgColorGuild}
            fontFamily={fontFamilyGuild}
            alignment={alignment}
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

        {checkedThirdText && (
          <TransformableText
            // eslint-disable-next-line react/no-array-index-key

            name={thirdTextText}
            // colour={bgColor}
            fontFamily={fontFamilyThirdText}
            alignment={alignment}
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
      </Layer>
    </RecoilRoot>
  );
};

export default CanvasStage;
