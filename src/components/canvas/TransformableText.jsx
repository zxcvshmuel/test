import React, { useRef, useEffect } from "react";

// Libraries
import { Rect, Transformer, Text, Group } from "react-konva"; //eslint-disable-line
import "../../styles/global.css";

const TransformableText = ({
  shapeProps,
  isSelected,
  onSelect,
  onChange,
  name,
  fontFamily,
  fontColor,
  isBold,
  isUnderline,
  fontSize,
  initPosX,
  initPosY,
  onMouseDown,
  onTouchStart,
}) => {
  const shapeRef = useRef();
  const trRef = useRef();
  const textRef = useRef();

  const [timeoutState, setTimeOutState] = React.useState(0);

  useEffect(() => {
    if (isSelected && trRef.current && shapeRef.current) {
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  React.useEffect(() => {
    // shapeRef?.current?.attr = {...shapeRef?.current?.attr , border:"5"};
    // you many need to reapply cache on some props changes like shadow, stroke, etc.
    textRef?.current?.cache();
    shapeRef?.current?.cache();
  }, [
    fontFamily,
    isBold,
    isUnderline,
    fontColor,
    name,
    fontSize,
    onChange,
    // onChange,
    shapeProps,
    isSelected,
  ]);

  return (
    <>
      <Group
        onClick={onSelect}
        id={shapeProps.id}
        onTap={onSelect}
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
        x={initPosX}
        y={initPosY}
      >
        {/* <Rect width={200} height={40} fill={colour || 'lightblue'} cornerRadius={[7, 7, 7, 7]} /> */}
        <Text
          ref={textRef}
          width={280}
          height={"auto"}
          // align={alignment || 'auto'}
          verticalAlign="middle"
          text={name ?? ""}
          fill={fontColor || "black"}
          fontSize={fontSize}
          fontFamily={fontFamily}
          fontStyle={isBold ? "bold" : "normal"}
          // fontWeight={isBold ? 'Regular' : 'Bold'}
          textDecoration={isUnderline ? "underline" : "none"}
          onMouseDown={onMouseDown}
          onMouseIn={() => setTimeOutState((state) => clearTimeout(state))}
          onMouseOut={() => {
            setTimeOutState(() =>
              setTimeout(() => {
                onMouseDown();
              }, 6000)
            );
          }}
          onTouchStart={onTouchStart}
          // onClick={() => alert("clicked")}

          // onChange={(e) => console.log(e)}
        />
      </Group>
      {isSelected && !!name?.length && (
        <Transformer
          rotateEnabled
          ref={trRef}
          // onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          enabledAnchors={[]}
          rotationSnaps={[0, 90, 180, 270]}
          boundBoxFunc={(oldBox, newBox) =>
            newBox.width < 5 || newBox.height < 5 ? oldBox : newBox
          }
        />
      )}
    </>
  );
};

export default TransformableText;
