import React, { useState } from 'react'; //eslint-disable-line
import Konva from 'konva'; //eslint-disable-line
import { IMAGE_HEIGHT, IMAGE_WIDTH } from '../../config/config'; //eslint-disable-line

// Components
import { Image, Transformer, Circle, Star, Shape, Path } from 'react-konva'; //eslint-disable-line

const TransformableImage = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  // imageWidth,
  // imageHeight,
  image,
  onMouseDown,
  onTouchStart,
  initPosX,
  initPosY,

  noImage,
  shape,
  grayscale,
  imageSize,
  scaleSquare,
  scaleCircle,
  scaleStar,
  offsetXCircle,
  offsetYCircle,
  offsetXStar,
  offsetYStar,
  innerRadiusStar,
  outerRadiusStar,
  scaleHeart,
  offsetXHeart,
  offsetYHeart,
  scaleHamsa,
  offsetXHamsa,
  offsetYHamsa,

  scaleSquareInner,
  scaleCircleInner,
  scaleStarInner,
  scaleHeartInner,
  scaleHamsaInner,
}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();
  const [imageRatio, setImageRatio] = useState(imageSize.width / imageSize.height);



  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
      // trRef?.current?.attr = {...};
    }
    if (image) {
      // shapeRef?.current?.attr = {...shapeRef?.current?.attr , border:"5"};
      // you many need to reapply cache on some props changes like shadow, stroke, etc.
      shapeRef?.current?.cache();
    }
  }, [
    isSelected,
    image,
    grayscale,
    imageRatio,
    scaleSquare,
    scaleCircle,
    scaleStar,
    offsetXCircle,
    offsetYCircle,
    offsetXStar,
    offsetYStar,
    innerRadiusStar,
    outerRadiusStar,
    scaleHeart,
    offsetXHeart,
    offsetYHeart,
    scaleHamsa,
    offsetXHamsa,
    offsetYHamsa,
    scaleSquareInner,
    scaleCircleInner,
    scaleStarInner,
    scaleHeartInner,
    scaleHamsaInner,
  ]);

  React.useEffect(() => {
    if (imageSize?.width && imageSize?.height) {
      setImageRatio(imageSize.width / imageSize.height);
    }
  }, [imageSize]);

  return shape === 'square' ? (
    <>
      <Image
        width={imageSize.width}
        height={imageSize.height}
        scale={{
          x: scaleSquare / 100,
          y: scaleSquare / 100,
        }}
        shadowBlur={10}
        image={image}
        x={initPosX}
        y={initPosY}
        strokeWidth={1} // border width
        stroke="black" // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...(grayscale && { filters: [Konva.Filters.Grayscale] })}
        // filters={[Konva.Filters.Grayscale]}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />

      {isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={[]}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : shape === 'circle' ? (
    <>
      <Circle
        x={initPosX + 120}
        y={initPosY + 100}
        radius={50}
        shadowBlur={10}
        {...(grayscale && { filters: [Konva.Filters.Grayscale] })}
        // innerRadius={50}
        // outerRadius={50}
        fillPatternImage={image}
        fillPatternRepeat="no-repeat"
        width={imageSize.width}
        height={imageSize.height}
        // rotation={imageRatio < 1 ? -90 : 0}
        scale={{
          x: scaleCircle / 100,
          y: scaleCircle / 100,
        }}
        // fillPatternOffsetX={imageSize.width / 2}
        // fillPatternOffsetY={imageSize.height / 2}
        fillPatternOffsetX={imageSize.width / 2 + offsetXCircle}
        fillPatternOffsetY={imageSize.width / 2 + offsetYCircle}
        fillPatternScaleX={scaleCircleInner / 400}
        fillPatternScaleY={scaleCircleInner / 400}
        // fillPatternOffsetY={imageRatio < 1 ? imageSize.height / 3 : imageSize.height / 2}
        // fillPatternScaleX={imageRatio < 1 ? 1.5 : 1}
        // fillPatternScaleY={imageRatio < 1 ? 1.5 : 1}
        strokeWidth={1} // border width
        stroke="black" // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x() - 120,
            y: e.target.y() - 100,
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          enabledAnchors={[]}
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : shape === 'star' ? (
    <>
      <Star
        x={initPosX + 120}
        y={initPosY + 100}
        numPoints={5}
        innerRadius={innerRadiusStar}
        outerRadius={outerRadiusStar}
        fillPatternImage={image}
        width={imageSize.width}
        height={imageSize.height}
        // rotation={imageRatio < 1 ? -70 : 0}
        scale={{
          x: scaleStar / 500,
          y: scaleStar / 500,
        }}
        fillPatternOffsetX={imageSize.width / 2 + offsetXStar}
        fillPatternOffsetY={imageSize.width / 2 + offsetYStar}
        fillPatternScaleX={scaleStarInner / 400}
        fillPatternScaleY={scaleStarInner / 400}
        {...(grayscale && { filters: [Konva.Filters.Grayscale] })}
        fillPatternRepeat="no-repeat"
        strokeWidth={1} // border width
        stroke="black" // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x() - 120,
            y: e.target.y() - 100,
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          enabledAnchors={[]}
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : shape === 'heart' ? (
    <>
      <Path
        x={initPosX}
        y={initPosY}
        fillPatternImage={image}
        data={
          'M501.6,927.5L87,550.2c-13.3-14.1-25.2-29.8-35.4-46.5c-10.1-16.5-18.5-34.1-25-52.4c-11-31-16.6-62.9-16.6-95C10,199.8,137.3,72.5,293.8,72.5c78.8,0,153.1,32.6,206.2,88.8c53.2-56.3,127.5-88.8,206.2-88.8C862.7,72.5,990,199.8,990,356.3c0,31.5-5.4,63-16,93.5c-6.8,19.4-15.7,38.2-26.6,55.7c-9.1,14.7-19.7,28.7-31.4,41.5l-2.2,2.2L501.6,927.5z'
        }
        fillPatternOffsetX={imageSize.width / 2 + offsetXHeart}
        fillPatternOffsetY={imageSize.width / 2 + offsetYHeart}
        fillPatternScaleX={scaleHeartInner / 400}
        fillPatternScaleY={scaleHeartInner / 400}
        fillPatternRepeat="no-repeat"
        {...(grayscale && { filters: [Konva.Filters.Grayscale] })}
        scale={{
          x: scaleHeart / 500,
          y: scaleHeart / 500,
        }}
        width={imageSize.width}
        height={imageSize.height}
        strokeWidth={1} // border width
        stroke="black" // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          enabledAnchors={[]}
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : shape === 'hamsa' ? (
    <>
      <Path
        x={initPosX}
        y={initPosY}
        fillPatternImage={image}
        data={
          'M291.644,81.714c0-9.836,3.996-18.75,10.439-25.205c6.455-6.443,15.369-10.439,25.205-10.439  c19.685,0,35.644,15.959,35.644,35.644v132.162c0,0,31.955-25.931,77.546-12.959c0,0-38.656,64.808-38.656,157.699v7.562  c0,40.267-16.328,76.723-42.714,103.108S296.267,512,256,512c-80.534,0-145.822-65.288-145.822-145.822v-7.562  c0-92.891-38.656-157.699-38.656-157.699c45.591-12.972,77.534,12.959,77.534,12.959V81.714c0-9.836,3.984-18.75,10.439-25.205  c6.455-6.443,15.369-10.439,25.218-10.439c19.685,0,35.644,15.959,35.644,35.644V35.656C220.356,15.959,236.315,0,256,0  c9.836,0,18.75,3.984,25.205,10.439c6.443,6.455,10.439,15.369,10.439,25.218L291.644,81.714L291.644,81.714z'
        }
        fillPatternOffsetX={imageSize.width / 2 + offsetXHamsa}
        fillPatternOffsetY={imageSize.width / 2 + offsetYHamsa}
        fillPatternScaleX={scaleHamsaInner / 400}
        fillPatternScaleY={scaleHamsaInner / 400}
        fillPatternRepeat="no-repeat"
        {...(grayscale && { filters: [Konva.Filters.Grayscale] })}
        scale={{
          x: scaleHamsa / 500,
          y: scaleHamsa / 500,
        }}
        strokeWidth={1} // border width
        stroke="black" // border color
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        onTouchStart={onTouchStart}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={() => {
          if (shapeRef.current) {
            const node = shapeRef.current;
            onChange({
              ...shapeProps,
              x: node.x(),
              y: node.y(),
            });
          }
        }}
      />
      {isSelected && (
        <Transformer
          enabledAnchors={[]}
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </>
  ) : (
    <></>
  );
};

//

// class FilterRect extends React.Component {
//   state = {
//     color: 'green',
//   };
//   componentDidMount() {
//     this.applyCache();
//   }
//   handleClick = () => {
//     this.setState(
//       {
//         color: Konva.Util.getRandomColor(),
//       },
//       () => {
//         // recache shape when we updated it
//         this.applyCache();
//       },
//     );
//   };
//   applyCache() {
//     this.rect.cache();
//   }

//   render() {
//     return (
//       <Rect
//         filters={[Konva.Filters.Noise]}
//         noise={1}
//         x={200}
//         y={10}
//         width={50}
//         height={50}
//         fill={this.state.color}
//         shadowBlur={10}
//         ref={(node) => {
//           this.rect = node;
//         }}
//         onClick={this.handleClick}
//       />
//     );
//   }
// }

export default TransformableImage;
