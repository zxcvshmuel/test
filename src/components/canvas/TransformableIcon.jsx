import React from 'react';

// Components
import { Image, Transformer } from 'react-konva';

const TransformableIcon = ({
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
  setInitPosX,
  setInitPosY,
}) => {
  const shapeRef = React.useRef();
  const trRef = React.useRef();

  React.useEffect(() => {
    if (isSelected) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <>
      <Image
        image={image}
        width={90}
        x={initPosX}
        y={initPosY}
        height={90}
        onClick={onSelect}
        onTap={onSelect}
        onMouseDown={onMouseDown}
        // onTouchStart={onTouchStart}
        ref={shapeRef}
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
          enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
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
  );
};

export default TransformableIcon;
