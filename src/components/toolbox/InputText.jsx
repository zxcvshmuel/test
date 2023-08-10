import React from 'react';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { useRecoilState } from 'recoil';

import CustomButtons from './CustomTools';

import {
  celebratorsNamesIsBold,
  celebratorsNamesIsUnderline,
  dateIsBold,
  dateIsUnderline,
  thirdTextIsBold as thirdTextIsBoldInStore,
  thirdTextIsUnderline as thirdTextIsUnderlineInStore,
  //
  celebratorsNamesFontSize as celebratorsNamesFontSizeInStore,
  dateFontSize as dateFontSizeInStore,
  thirdTextFontSize as thirdTextFontSizeInStore,
  // celebratorsNames,
} from '../recoil/themes';

import {
  celebratorsNamesIsBold2,
  celebratorsNamesIsUnderline2,
  dateIsBold2,
  dateIsUnderline2,
  thirdTextIsBold2 as thirdTextIsBoldInStore2,
  thirdTextIsUnderline2 as thirdTextIsUnderlineInStore2,
  //
  celebratorsNamesFontSize2 as celebratorsNamesFontSizeInStore2,
  dateFontSize2 as dateFontSizeInStore2,
  thirdTextFontSize2 as thirdTextFontSizeInStore2,
  // celebratorsNames,
} from '../recoil/themes2';

import { checkedStripInStore } from '../recoil/root';

import { gifVersion } from 'canvas'; //eslint-disable-line

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


const FormFillup = styled.input`
  width: 93%;
  padding: 12px 13px;
  margin: auto;
  margin-bottom: 10px;
  display: inline-block;
  border: 1px solid #666666;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #333333;
  color: #666666;
  font-size: 1rem;
`;

const CustomText = ({
  celebratorsText = '',
  dateText = '',
  thirdTextText,
  //
  setCelebratorsText,
  setDateText,
  setThirdTextText,
  //
  checkedCelebrator,
  checkedDate,
  checkedThirdText,
  //
  handleChangeCelebrator,
  handleChangeDate,
  handleChangeThirdText,
  //
  fontFamily,
  setFontFamily,
  fontFamilyGuild,
  setFontFamilyGuild,
  fontFamilyThirdText,
  setFontFamilyThirdText,
  //
  fontColor,
  setFontColor,
  fontColorGuild,
  setFontColorGuild,
  fontColorThirdText,
  setFontColorThirdText,
  //
  // setBgColor,
  alignment,
  handleAlignment,
  align,
}) => {
  const [celebratorsNamesFontIsBold, setCelebratorsNamesFontIsBold] =
    useRecoilState(celebratorsNamesIsBold);

  const [celebratorsNamesFontIsUnderline, setCelebratorsNamesFontIsUnderline] = useRecoilState(
    celebratorsNamesIsUnderline
  );
  const [dateFontIsBold, setDateFontIsBold] = useRecoilState(dateIsBold);
  const [dateFontIsUnderline, setDateFontIsUnderline] = useRecoilState(dateIsUnderline);

  const [thirdTextFontIsBold, setThirdTextFontIsBold] = useRecoilState(thirdTextIsBoldInStore);
  const [thirdTextIsUnderline, setThirdTextFontIsUnderline] = useRecoilState(
    thirdTextIsUnderlineInStore
  );

  const [celebratorsNamesFontSize, setCelebratorsNamesFontSize] = useRecoilState(
    celebratorsNamesFontSizeInStore
  );
  const [dateFontSize, setDateFontSize] = useRecoilState(dateFontSizeInStore); //eslint-disable-line
  const [thirdTextFontSize, setThirdTextFontSize] = useRecoilState(thirdTextFontSizeInStore); //eslint-disable-line

  const [celebratorsNamesFontIsBold2, setCelebratorsNamesFontIsBold2] =
    useRecoilState(celebratorsNamesIsBold2);

  const [celebratorsNamesFontIsUnderline2, setCelebratorsNamesFontIsUnderline2] = useRecoilState(
    celebratorsNamesIsUnderline2
  );
  const [dateFontIsBold2, setDateFontIsBold2] = useRecoilState(dateIsBold2);
  const [dateFontIsUnderline2, setDateFontIsUnderline2] = useRecoilState(dateIsUnderline2);

  const [thirdTextFontIsBold2, setThirdTextFontIsBold2] = useRecoilState(thirdTextIsBoldInStore2);
  const [thirdTextIsUnderline2, setThirdTextFontIsUnderline2] = useRecoilState(
    thirdTextIsUnderlineInStore2
  );

  const [celebratorsNamesFontSize2, setCelebratorsNamesFontSize2] = useRecoilState(
    celebratorsNamesFontSizeInStore2
  );
  const [dateFontSize2, setDateFontSize2] = useRecoilState(dateFontSizeInStore2); //eslint-disable-line
  const [thirdTextFontSize2, setThirdTextFontSize2] = useRecoilState(thirdTextFontSizeInStore2); //eslint-disable-line

  const [checkedStrip] = useRecoilState(checkedStripInStore);

  return (
    <Container2>
      <Section1>
        <Heading1>תאריך</Heading1>
        <label htmlFor="material-switch">
          {/* <Toggle>
            <Switch
              // checked={checkedDate || !!dateText?.length}
              checked={true}
              onChange={handleChangeDate}
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
          </Toggle> */}
        </label>
      </Section1>
      {/* {true && ( */}
      <Section2>
        <FormFillup
          type="text"
          value={dateText}
          name="dateText"
          placeholder="תאריך אירוע"
          onChange={(e) => setDateText(e.target.value)}
        />
        <CustomButtons
          fontColors={fontColorGuild}
          setFontColors={setFontColorGuild}
          // bgColors={bgColor}
          // setBgColors={setBgColor}
          // alignment={alignment}
          fontFamily={fontFamilyGuild}
          setFontFamily={setFontFamilyGuild}
          fontlist="list-fonts"
          // handleAlignment={handleAlignment}
          // align={align}
          FontId={fontFamilyGuild}
          bgId="custom-color-bg-date"
          isBold={!!checkedStrip ? dateFontIsBold : dateFontIsBold2}
          setIsBold={!!checkedStrip ? setDateFontIsBold : setDateFontIsBold2}
          isUnderline={!!checkedStrip ? dateFontIsUnderline : dateFontIsUnderline2}
          setIsUnderline={!!checkedStrip ? setDateFontIsUnderline : setDateFontIsUnderline2}
          fontSize={!!checkedStrip ? dateFontSize : dateFontSize2}
          setFontSize={!!checkedStrip ? setDateFontSize : setDateFontSize2}
        />
      </Section2>
      {/* )} */}
      {/***/}

      <Section1 style={{ paddingTop: '25px' }}>
        <Heading1>שמות</Heading1>
        <label htmlFor="material-switch">
          {/* <Toggle>
            <Switch
              // checked={checkedCelebrator || !!celebratorsText?.length}
              checked={true}
              onChange={handleChangeCelebrator}
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
          </Toggle> */}
        </label>
      </Section1>
      {/* {true && ( */}
      <Section2 style={{ paddingBottom: '20px' }}>
        <FormFillup
          type="text"
          value={celebratorsText}
          name="celebratorsText"
          placeholder="דני ודנה"
          onChange={(e) => setCelebratorsText(e.target.value)}
        />

        <CustomButtons
          fontColors={fontColor}
          setFontColors={setFontColor}
          // bgColors={bgColor}
          // setBgColors={setBgColor}
          // alignment={alignment}
          fontFamily={fontFamily}
          setFontFamily={setFontFamily}
          fontlist="list-fonts"
          handleAlignment={handleAlignment}
          // align={align}
          FontId={fontFamily}
          bgId="custom-color-bg-celebrators"
          isBold={!!checkedStrip ? celebratorsNamesFontIsBold : celebratorsNamesFontIsBold2}
          isUnderline={
            !!checkedStrip ? celebratorsNamesFontIsUnderline : celebratorsNamesFontIsUnderline2
          }
          setIsBold={
            !!checkedStrip ? setCelebratorsNamesFontIsBold : setCelebratorsNamesFontIsBold2
          }
          setIsUnderline={
            !!checkedStrip
              ? setCelebratorsNamesFontIsUnderline
              : setCelebratorsNamesFontIsUnderline2
          }
          fontSize={!!checkedStrip ? celebratorsNamesFontSize : celebratorsNamesFontSize2}
          setFontSize={!!checkedStrip ? setCelebratorsNamesFontSize : setCelebratorsNamesFontSize2}
        />
      </Section2>
      {/* )} */}
      {/***/}
      <Section1 style={{ paddingTop: '25px' }}>
        <Heading1>נוסף</Heading1>
        <label htmlFor="material-switch">
          {/* <Toggle>
            <Switch
              // checked={checkedThirdText || !!thirdTextText?.length}
              checked={true}
              onChange={handleChangeThirdText}
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
          </Toggle> */}
        </label>
      </Section1>
      {/* {true && ( */}
      <Section2 style={{ paddingBottom: '20px' }}>
        <FormFillup
          type="text"
          value={thirdTextText}
          name="thirdTextText"
          placeholder="טקסט נוסף"
          onChange={(e) => setThirdTextText(e.target.value)}
        />

        <CustomButtons
          fontColors={fontColorThirdText}
          setFontColors={setFontColorThirdText}
          // alignment={alignment}
          fontFamily={fontFamilyThirdText}
          setFontFamily={setFontFamilyThirdText}
          fontlist="list-fonts"
          // handleAlignment={handleAlignment}
          // align={align}
          FontId={fontFamilyThirdText}
          bgId="custom-color-bg-third-text"
          isBold={!!checkedStrip ? thirdTextFontIsBold : thirdTextFontIsBold2}
          isUnderline={!!checkedStrip ? thirdTextIsUnderline : thirdTextIsUnderline2}
          setIsBold={!!checkedStrip ? setThirdTextFontIsBold : setThirdTextFontIsBold2}
          setIsUnderline={
            !!checkedStrip ? setThirdTextFontIsUnderline : setThirdTextFontIsUnderline2
          }
          fontSize={!!checkedStrip ? thirdTextFontSize : thirdTextFontSize2}
          setFontSize={!!checkedStrip ? setThirdTextFontSize : setThirdTextFontSize2}
        />
      </Section2>
      {/* )} */}
    </Container2>
  );
};

export default CustomText;
