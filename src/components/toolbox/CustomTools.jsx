import React from 'react';

// Libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faA,
  faB,
  faU,
  // faAlignJustify,
  // faAlignLeft,
  // faAlignRight,
  // faPenFancy, //eslint-disable-line
} from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

//eslint-disable-next-line
const ButtonContainer = styled.div`
  display: block;
  margin-top: 2px;
  margin-right: 30px;
`;

const CustomButton = styled.button`
  background-color: white;
  padding: 6px 8px;
  padding-right: 3px;
  border-radius: 8px;
  margin-left: 12px;
  border: none;
  cursor: pointer;
  outline: none;
`;

// const CustomButtonAlign = styled.button`
//   background-color: white;
//   padding: 6px 8px;
//   border-radius: 8px;
//   margin-left: 12px;
//   border: none;
//   cursor: pointer;
//   outline: none;
// `;

const CustomButtons = ({
  // bgColors,
  // setBgColors,
  fontColors,
  setFontColors,
  alignment,
  isBold,
  isUnderline,
  setIsBold,
  setIsUnderline,
  handleAlignment,
  fontFamily,
  setFontFamily,
  align,
  FontId,
  fontlist,
  fontSize,
  setFontSize,
  // bgId,
}) => {


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <div
        style={{
          backgroundColor: '#fafafa',
          borderRadius: '8px',
          height: 26,
          width: 26,
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
        }}
      >
        <label htmlFor={FontId}>
          <FontAwesomeIcon icon={faA} style={{ fontSize: 14 }} />
        </label>
        <input
          type="color"
          accept="color"
          value={fontColors}
          style={{
            // visibility: 'hidden',
            width: '26px',
            height: '26px',
            position: 'absolute',
            fontSize: 12,
            borderRadius: '8px',
          }}
          id={FontId}
          onChange={(e) => setFontColors(e.target.value)}
        />
      </div>

      <div
        style={{
          borderRadius: '8px',
          height: 26,
          width: 26,
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: isBold ? '#fafafa' : 'rgba(214, 214, 214, 0.75)',
          cursor: 'pointer',
        }}
        onClick={() => setIsBold(!isBold)}
      >
        <FontAwesomeIcon icon={faB} style={{ fontSize: 14 }} />
      </div>

      <div
        style={{
          backgroundColor: isUnderline ? '#fafafa' : 'rgba(214, 214, 214, 0.75)',
          cursor: 'pointer',

          borderRadius: '8px',
          height: 26,
          width: 26,
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => setIsUnderline(!isUnderline)}
      >
        <FontAwesomeIcon icon={faU} style={{ fontSize: 14 }} />
      </div>

      {/* <CustomButtonAlign onClick={handleAlignment}>{renderIcon()}</CustomButtonAlign> */}

      <CustomButton>
        <input
          // list={fontlist}
          type="number"
          value={fontSize}
          style={{ outline: 'none', border: 'none', maxWidth: '60px' }}
          placeholder="size"
          onChange={(e) => setFontSize(parseInt(e.target.value))}
        />
      </CustomButton>

      <CustomButton>
        <input
          list={'list-fonts'}
          type="search"
          value={fontFamily}
          style={{ outline: 'none', border: 'none', maxWidth: '120px' }}
          placeholder="Font Type"
          onChange={(e) => setFontFamily(e.target.value)}
        />
        <datalist id={fontlist}>
          <option value="Open Sans" aria-label="Open Sans" />
          <option value="Rubik" aria-label="Rubik" />
          <option value="Heebo" aria-label="Heebo" />
          <option value="Arimo" aria-label="Arimo" />
          <option value="Varela Round" aria-label="Varela Round" />
          <option value="Assistant" aria-label="Assistant" />
          <option value="Secular One" aria-label="Secular One" />
          <option value="Amatic SC" aria-label="Amatic SC" />
          <option value="Tinos" aria-label="Tinos" />
          <option value="Frank Ruhl Libre" aria-label="Frank Ruhl Libre" />
          <option value="Cousine" aria-label="Cousine" />
          <option value="Alef" aria-label="Alef" />
          <option value="Suez One" aria-label="Suez One" />
          <option value="Miriam Libre" aria-label="Miriam Libre" />
          <option value="Rubik Moonrocks" aria-label="Rubik Moonrocks" />
          <option value="David Libre" aria-label="David Libre" />
          <option value="Bellefair" aria-label="Bellefair" />
          <option value="Rubik Microbe" aria-label="Rubik Microbe" />
          <option value="Rubik Glitch" aria-label="Rubik Glitch" />
          <option value="Rubik Wet Paint" aria-label="Rubik Wet Paint" />
          <option value="Rubik Bubbles" aria-label="Rubik Bubbles" />
          <option value="Rubik Puddles" aria-label="Rubik Puddles" />
          <option value="Fredoka" aria-label="Fredoka" />
          <option value="Bona Nova" aria-label="Bona Nova" />
          <option value="Karantina" aria-label="Karantina" />
          <option value="Rubik Beastly" aria-label="Rubik Beastly" />
          <option value="IBM Plex Sans Hebrew" aria-label="IBM Plex Sans Hebrew" />
          <option value="Noto Sans Hebrew" aria-label="Noto Sans Hebrew" />
          <option value="Noto Serif Hebrew" aria-label="Noto Serif Hebrew" />
          <option value="Noto Rashi Hebrew" aria-label="Noto Rashi Hebrew" />
        </datalist>
      </CustomButton>
    </div>
  );
};

export default CustomButtons;
