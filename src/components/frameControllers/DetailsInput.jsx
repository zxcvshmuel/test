import React from 'react';
import { useRecoilState } from 'recoil';

import { cleanImages } from '../recoil/themes';

// Components
import Upload from '../toolbox/Upload';
import UploadLogo from '../toolbox/UploadLogo';
import CustomText from '../toolbox/InputText';
import BackgroundController from '../toolbox/BackgroundController';
import ThemesController from '../toolbox/ThemesController';
import ShapesController from '../toolbox/ShapesController';

const Inputs = ({
  checkedCelebrator,
  setcheckedCelebrator,
  //
  checkedDate,
  setcheckedDate,
  //
  checkedThirdText,
  setcheckedThirdText,
  //
  handleChangeCelebrator,
  handleChangeDate,
  handleChangeThirdText,
  //
  celebratorsText,
  setCelebratorsText,
  dateText,
  setDateText,
  thirdTextText,
  setThirdTextText,
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
  uploadedImage,
  uploadedImageMiddle,
  uploadedImageBottom,
  //
  setUploadedImage,
  setUploadedImageMiddle,
  setUploadedImageBottom,
  setUploadedImage2,
  setUploadedImageMiddle2,
  setUploadedImageBottom2,
  //
  setUploadedLogo,
  setUploadedLogo2,
  //
  bgColor,
  setBgColor,
  alignment,
  // bgColorGuild,
  // setBgColorGuild,
  handleAlignment,
  align,
  setHeight,
  setWidth,
  stageBgColor,
  setStageBgColor,

  colorOrImage,
  setColorOrImage,
  setSelectedFrame,
}) => {
  const [noImage, setNoImage] = useRecoilState(cleanImages); //eslint-disable-line

  return (
    <div>
      <Upload
        // uploadedImage={uploadedImage}
        setUploadedImage={setUploadedImage}
        setUploadedImageTwo={setUploadedImageMiddle}
        setUploadedImageThree={setUploadedImageBottom}
        setUploadedImage2={setUploadedImage2}
        setUploadedImageTwo2={setUploadedImageMiddle2}
        setUploadedImageThree2={setUploadedImageBottom2}
        setHeight={setHeight}
        setWidth={setWidth}
        setNoImage={setNoImage}
        // index={'top'}
      />
      <UploadLogo
        // uploadedImage={uploadedImage}
        setUploadedLogo={setUploadedLogo}
        setUploadedLogo2={setUploadedLogo2}

        setHeight={setHeight}
        setWidth={setWidth}
        setNoImage={setNoImage}
        // index={'top'}
      />
      <ShapesController />

      <CustomText
        checkedCelebrator={checkedCelebrator}
        checkedDate={checkedDate}
        checkedThirdText={checkedThirdText}
        //
        // setcheckedCelebrator={setcheckedCelebrator}
        // setcheckedDate={setcheckedDate}
        // setcheckedThirdText={setcheckedThirdText}
        //
        handleChangeCelebrator={handleChangeCelebrator}
        handleChangeDate={handleChangeDate}
        handleChangeThirdText={handleChangeThirdText}
        //
        celebratorsText={celebratorsText}
        setCelebratorsText={setCelebratorsText}
        dateText={dateText}
        setDateText={setDateText}
        thirdTextText={thirdTextText}
        setThirdTextText={setThirdTextText}
        //
        fontFamily={fontFamily}
        setFontFamily={setFontFamily}
        fontFamilyGuild={fontFamilyGuild}
        setFontColorGuild={setFontColorGuild}
        fontFamilyThirdText={fontFamilyThirdText}
        setFontFamilyThirdText={setFontFamilyThirdText}
        //
        fontColor={fontColor}
        setFontColor={setFontColor}
        fontColorGuild={fontColorGuild}
        setFontFamilyGuild={setFontFamilyGuild}
        fontColorThirdText={fontColorThirdText}
        setFontColorThirdText={setFontColorThirdText}
        //
        bgColor={bgColor}
        setBgColor={setBgColor}
        alignment={alignment}
        handleAlignment={handleAlignment}
        align={align}
      />
      <BackgroundController
        {...{ stageBgColor, setStageBgColor, colorOrImage, setColorOrImage, setSelectedFrame }}
      />
      <ThemesController />
    </div>
  );
};

export default Inputs;
