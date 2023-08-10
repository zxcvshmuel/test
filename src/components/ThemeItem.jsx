import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import { useRecoilState } from 'recoil';
import {
  themesList as themesListInStore,
  selectedTheme as selectedThemeInStore,
  selectedIcon,
  iconPositionX, //eslint-disable-line
  iconPositionY, //eslint-disable-line
  colorOrImage as bgType,
  stageBgColor as frameBgColor,
  stageBgImage as frameBgImage,
  celebratorsNames,
  date,
  thirdText,
  stageBgImageRef as stageBgImageRefInStore,
  selectedIconRef,
  /* ========== */
  positionImageTopX as positionImageTopXInStore,
  positionImageTopY as positionImageTopYInStore,
  positionImageMiddleX as positionImageMiddleXInStore,
  positionImageMiddleY as positionImageMiddleYInStore,
  positionImageBottomX as positionImageBottomXInStore,
  positionImageBottomY as positionImageBottomYInStore,
  //
  iconPositionX as iconPositionXInStore,
  iconPositionY as iconPositionYInStore,
  //
  celebratorsPositionX as celebratorsPositionXInStore,
  celebratorsPositionY as celebratorsPositionYInStore,
  celebratorsNamesColor as celebratorsNamesColorInStore,
  celebratorsNamesFont as celebratorsNamesFontInStore,
  celebratorsNamesIsBold as celebratorsNamesIsBoldInStore,
  celebratorsNamesIsUnderline as celebratorsNamesIsUnderlineInStore,
  celebratorsNamesFontSize as celebratorsNamesFontSizeInStore,
  //
  datePositionX as datePositionXInStore,
  datePositionY as datePositionYInStore,
  dateColor as dateColorInStore,
  dateFont as dateFontInStore,
  dateIsBold as dateIsBoldInStore,
  dateIsUnderline as dateIsUnderlineInStore,
  dateFontSize as dateFontSizeInStore,
  //
  thirdTextPositionX as thirdTextPositionXInStore,
  thirdTextPositionY as thirdTextPositionYInStore,
  thirdTextColor as thirdTextColorInStore,
  thirdTextFont as thirdTextFontInStore,
  thirdTextIsBold as thirdTextIsBoldInStore,
  thirdTextIsUnderline as thirdTextIsUnderlineInStore,
  thirdTextFontSize as thirdTextFontSizeInStore,
} from './recoil/themes';

import {
  selectedIcon2,
  // iconPositionX, //eslint-disable-line
  // iconPositionY, //eslint-disable-line
  colorOrImage2 as bgType2,
  stageBgColor2 as frameBgColor2,
  stageBgImage2 as frameBgImage2,
  celebratorsNames2,
  date2,
  thirdText2,
  stageBgImageRef2 as stageBgImageRefInStore2,
  selectedIconRef2,
  /* ========== */
  positionImageTopX2 as positionImageTopXInStore2,
  positionImageTopY2 as positionImageTopYInStore2,
  positionImageMiddleX2 as positionImageMiddleXInStore2,
  positionImageMiddleY2 as positionImageMiddleYInStore2,
  positionImageBottomX2 as positionImageBottomXInStore2,
  positionImageBottomY2 as positionImageBottomYInStore2,
  //
  iconPositionX2 as iconPositionXInStore2,
  iconPositionY2 as iconPositionYInStore2,
  //
  celebratorsPositionX2 as celebratorsPositionXInStore2,
  celebratorsPositionY2 as celebratorsPositionYInStore2,
  celebratorsNamesColor2 as celebratorsNamesColorInStore2,
  celebratorsNamesFont2 as celebratorsNamesFontInStore2,
  celebratorsNamesIsBold2 as celebratorsNamesIsBoldInStore2,
  celebratorsNamesIsUnderline2 as celebratorsNamesIsUnderlineInStore2,
  celebratorsNamesFontSize2 as celebratorsNamesFontSizeInStore2,
  //
  datePositionX2 as datePositionXInStore2,
  datePositionY2 as datePositionYInStore2,
  dateColor2 as dateColorInStore2,
  dateFont2 as dateFontInStore2,
  dateIsBold2 as dateIsBoldInStore2,
  dateIsUnderline2 as dateIsUnderlineInStore2,
  dateFontSize2 as dateFontSizeInStore2,
  //
  thirdTextPositionX2 as thirdTextPositionXInStore2,
  thirdTextPositionY2 as thirdTextPositionYInStore2,
  thirdTextColor2 as thirdTextColorInStore2,
  thirdTextFont2 as thirdTextFontInStore2,
  thirdTextIsBold2 as thirdTextIsBoldInStore2,
  thirdTextIsUnderline2 as thirdTextIsUnderlineInStore2,
  thirdTextFontSize2 as thirdTextFontSizeInStore2,
} from './recoil/themes2';

import { checkedStripInStore } from './recoil/root';

function ThemeItem({ name, side }) {
  const [checkedStrip] = useRecoilState(checkedStripInStore);

  const [themesList, setThemesList] = useRecoilState(themesListInStore);
  const [selectedTheme, setSelectedTheme] = useRecoilState(selectedThemeInStore);

  const [SelectedIcon, setSelectedIcon] = useRecoilState(selectedIcon); //eslint-disable-line
  const [SelectedFrame, setSelectedFrame] = useRecoilState(frameBgImage); //eslint-disable-line
  const [stageBgColor, setStageBgColor] = useRecoilState(frameBgColor); //eslint-disable-line
  const [colorOrImage, setColorOrImage] = useRecoilState(bgType); //eslint-disable-line

  const [SelectedIcon2, setSelectedIcon2] = useRecoilState(selectedIcon2); //eslint-disable-line
  const [SelectedFrame2, setSelectedFrame2] = useRecoilState(frameBgImage2); //eslint-disable-line
  const [stageBgColor2, setStageBgColor2] = useRecoilState(frameBgColor2); //eslint-disable-line
  const [colorOrImage2, setColorOrImage2] = useRecoilState(bgType2); //eslint-disable-line

  const [stageBgImageRef, setStageBgImageRef] = useRecoilState(stageBgImageRefInStore); //eslint-disable-line
  const [iconRef, setIconRef] = useRecoilState(selectedIconRef); //eslint-disable-line

  const [stageBgImageRef2, setStageBgImageRef2] = useRecoilState(stageBgImageRefInStore2); //eslint-disable-line
  const [iconRef2, setIconRef2] = useRecoilState(selectedIconRef2); //eslint-disable-line

  const [positionImageTopX, setpositionImageTopX] = useRecoilState(positionImageTopXInStore); //eslint-disable-line
  const [positionImageTopY, setpositionImageTopY] = useRecoilState(positionImageTopYInStore); //eslint-disable-line
  //eslint-disable-next-line
  const [positionImageMiddleX, setpositionImageMiddleX] = useRecoilState(
    positionImageMiddleXInStore
  );
  //eslint-disable-next-line
  const [positionImageMiddleY, setpositionImageMiddleY] = useRecoilState(
    positionImageMiddleYInStore
  );
  //eslint-disable-next-line
  const [positionImageBottomX, setpositionImageBottomX] = useRecoilState(
    //eslint-disable-line
    positionImageBottomXInStore
  );
  //eslint-disable-next-line
  const [positionImageBottomY, setpositionImageBottomY] = useRecoilState(
    positionImageBottomYInStore
  );

  const [positionImageTopX2, setpositionImageTopX2] = useRecoilState(positionImageTopXInStore2); //eslint-disable-line
  const [positionImageTopY2, setpositionImageTopY2] = useRecoilState(positionImageTopYInStore2); //eslint-disable-line
  //eslint-disable-next-line
  const [positionImageMiddleX2, setpositionImageMiddleX2] = useRecoilState(
    positionImageMiddleXInStore2
  );
  //eslint-disable-next-line
  const [positionImageMiddleY2, setpositionImageMiddleY2] = useRecoilState(
    positionImageMiddleYInStore2
  );
  //eslint-disable-next-line
  const [positionImageBottomX2, setpositionImageBottomX2] = useRecoilState(
    //eslint-disable-line
    positionImageBottomXInStore2
  );
  //eslint-disable-next-line
  const [positionImageBottomY2, setpositionImageBottomY2] = useRecoilState(
    positionImageBottomYInStore2
  );

  const [iconPositionX, seticonPositionX] = useRecoilState(iconPositionXInStore); //eslint-disable-line
  const [iconPositionY, seticonPositionY] = useRecoilState(iconPositionYInStore); //eslint-disable-line
  const [iconPositionX2, seticonPositionX2] = useRecoilState(iconPositionXInStore2); //eslint-disable-line
  const [iconPositionY2, seticonPositionY2] = useRecoilState(iconPositionYInStore2); //eslint-disable-line

  const [celebratorsText, setCelebratorsText] = useRecoilState(celebratorsNames); //eslint-disable-line
  const [dateText, setDateText] = useRecoilState(date); //eslint-disable-line
  const [thirdTextText, setThirdTextText] = useRecoilState(thirdText); // eslint-disable-line
  const [celebratorsText2, setCelebratorsText2] = useRecoilState(celebratorsNames2); //eslint-disable-line
  const [dateText2, setDateText2] = useRecoilState(date2); //eslint-disable-line
  const [thirdTextText2, setThirdTextText2] = useRecoilState(thirdText2); // eslint-disable-line

  const [datePositionX, setdatePositionX] = useRecoilState(datePositionXInStore); //eslint-disable-line
  const [datePositionY, setdatePositionY] = useRecoilState(datePositionYInStore); //eslint-disable-line
  //eslint-disable-next-line
  const [celebratorsPositionX, setcelebratorsPositionX] = useRecoilState(
    celebratorsPositionXInStore
  );
  //eslint-disable-next-line
  const [celebratorsPositionY, setcelebratorsPositionY] = useRecoilState(
    celebratorsPositionYInStore
  );
  //eslint-disable-next-line
  const [thirdTextPositionX, setthirdTextPositionX] = useRecoilState(thirdTextPositionXInStore);
  //eslint-disable-next-line
  const [thirdTextPositionY, setthirdTextPositionY] = useRecoilState(thirdTextPositionYInStore);

  const [datePositionX2, setdatePositionX2] = useRecoilState(datePositionXInStore2); //eslint-disable-line
  const [datePositionY2, setdatePositionY2] = useRecoilState(datePositionYInStore2); //eslint-disable-line
  //eslint-disable-next-line
  const [celebratorsPositionX2, setcelebratorsPositionX2] = useRecoilState(
    celebratorsPositionXInStore2
  );
  //eslint-disable-next-line
  const [celebratorsPositionY2, setcelebratorsPositionY2] = useRecoilState(
    celebratorsPositionYInStore2
  );
  //eslint-disable-next-line
  const [thirdTextPositionX2, setthirdTextPositionX2] = useRecoilState(thirdTextPositionXInStore2);
  //eslint-disable-next-line
  const [thirdTextPositionY2, setthirdTextPositionY2] = useRecoilState(thirdTextPositionYInStore2);

  //eslint-disable-next-line
  const [celebratorsNamesColor, setcelebratorsNamesColor] = useRecoilState(
    celebratorsNamesColorInStore
  );
  //eslint-disable-next-line
  const [celebratorsNamesFont, setcelebratorsNamesFont] = useRecoilState(
    celebratorsNamesFontInStore
  );
  //eslint-disable-next-line
  const [celebratorsNamesIsBold, setcelebratorsNamesIsBold] = useRecoilState(
    celebratorsNamesIsBoldInStore
  );
  //eslint-disable-next-line
  const [celebratorsNamesIsUnderline, setcelebratorsNamesIsUnderline] = useRecoilState(
    celebratorsNamesIsUnderlineInStore
  );
  //eslint-disable-next-line
  const [celebratorsNamesFontSize, setcelebratorsNamesFontSize] = useRecoilState(
    celebratorsNamesFontSizeInStore
  );
  //eslint-disable-next-line
  const [celebratorsNamesColor2, setcelebratorsNamesColor2] = useRecoilState(
    celebratorsNamesColorInStore2
  );
  //eslint-disable-next-line
  const [celebratorsNamesFont2, setcelebratorsNamesFont2] = useRecoilState(
    celebratorsNamesFontInStore2
  );
  //eslint-disable-next-line
  const [celebratorsNamesIsBold2, setcelebratorsNamesIsBold2] = useRecoilState(
    celebratorsNamesIsBoldInStore2
  );
  //eslint-disable-next-line
  const [celebratorsNamesIsUnderline2, setcelebratorsNamesIsUnderline2] = useRecoilState(
    celebratorsNamesIsUnderlineInStore2
  );
  //eslint-disable-next-line
  const [celebratorsNamesFontSize2, setcelebratorsNamesFontSize2] = useRecoilState(
    celebratorsNamesFontSizeInStore2
  );
  const [dateColor, setdateColor] = useRecoilState(dateColorInStore); //eslint-disable-line
  const [dateFont, setdateFont] = useRecoilState(dateFontInStore); //eslint-disable-line
  const [dateIsBold, setdateIsBold] = useRecoilState(dateIsBoldInStore); //eslint-disable-line
  const [dateIsUnderline, setdateIsUnderline] = useRecoilState(dateIsUnderlineInStore); //eslint-disable-line
  const [dateFontSize, setdateFontSize] = useRecoilState(dateFontSizeInStore); //eslint-disable-line
  const [dateColor2, setdateColor2] = useRecoilState(dateColorInStore2); //eslint-disable-line
  const [dateFont2, setdateFont2] = useRecoilState(dateFontInStore2); //eslint-disable-line
  const [dateIsBold2, setdateIsBold2] = useRecoilState(dateIsBoldInStore2); //eslint-disable-line
  const [dateIsUnderline2, setdateIsUnderline2] = useRecoilState(dateIsUnderlineInStore2); //eslint-disable-line
  const [dateFontSize2, setdateFontSize2] = useRecoilState(dateFontSizeInStore2); //eslint-disable-line

  const [thirdTextColor, setThirdTextColor] = useRecoilState(thirdTextColorInStore); //eslint-disable-line
  const [thirdTextFont, setThirdTextFont] = useRecoilState(thirdTextFontInStore); //eslint-disable-line
  const [thirdTextIsBold, setThirdTextIsBold] = useRecoilState(thirdTextIsBoldInStore); //eslint-disable-line
  //eslint-disable-next-line
  const [thirdTextIsUnderline, setThirdTextFontIsUnderline] = useRecoilState(
    thirdTextIsUnderlineInStore
  );
  const [thirdTextFontSize, setThirdTextFontSize] = useRecoilState(thirdTextFontSizeInStore); //eslint-disable-line
  const [thirdTextColor2, setThirdTextColor2] = useRecoilState(thirdTextColorInStore2); //eslint-disable-line
  const [thirdTextFont2, setThirdTextFont2] = useRecoilState(thirdTextFontInStore2); //eslint-disable-line
  const [thirdTextIsBold2, setThirdTextIsBold2] = useRecoilState(thirdTextIsBoldInStore2); //eslint-disable-line
  //eslint-disable-next-line
  const [thirdTextIsUnderline2, setThirdTextFontIsUnderline2] = useRecoilState(
    thirdTextIsUnderlineInStore2
  );
  const [thirdTextFontSize2, setThirdTextFontSize2] = useRecoilState(thirdTextFontSizeInStore2); //eslint-disable-line

  useEffect(() => {
    if (selectedTheme) {
      if (!!checkedStrip) {
        if (selectedTheme.side === 'right') {
          alert('עיצוב לסטריפ שמאל בלבד');
          setSelectedTheme(null);

          return;
        }
        if (selectedTheme?.iconRef) {
          let newImg = document.createElement('img');
          newImg.crossOrigin = 'AnonymousIcon';
          newImg.height = 90;
          newImg.width = 90;
          newImg.src = selectedTheme?.iconRef;
          setSelectedIcon(newImg);
        }

        if (selectedTheme?.stageBgImageRef) {
          let chosenFrame = new Image();
          chosenFrame.height = 900;
          chosenFrame.width = 300;
          chosenFrame.src = selectedTheme?.stageBgImageRef;

          setSelectedFrame(chosenFrame);
        }

        setStageBgColor(selectedTheme?.stageBgColor);
        setColorOrImage(selectedTheme?.colorOrImage);
        setCelebratorsText(selectedTheme?.celebratorsText);
        setDateText(selectedTheme?.dateText);
        setThirdTextText(selectedTheme?.thirdTextText);
        // ========================
        setpositionImageTopX(selectedTheme.positionImageTopX);
        setpositionImageTopY(selectedTheme.positionImageTopY);
        setpositionImageMiddleX(selectedTheme.positionImageMiddleX);
        setpositionImageMiddleY(selectedTheme.positionImageMiddleY);
        setpositionImageBottomX(selectedTheme.positionImageBottomX);
        setpositionImageBottomY(selectedTheme.positionImageBottomY);
        seticonPositionX(selectedTheme.iconPositionX);
        seticonPositionY(selectedTheme.iconPositionY);
        //
        setcelebratorsPositionX(selectedTheme.celebratorsPositionX);
        setcelebratorsPositionY(selectedTheme.celebratorsPositionY);
        setcelebratorsNamesColor(selectedTheme.celebratorsNamesColor);
        setcelebratorsNamesFont(selectedTheme.celebratorsNamesFont);
        setcelebratorsNamesIsBold(selectedTheme.celebratorsNamesIsBold);
        setcelebratorsNamesIsUnderline(selectedTheme.celebratorsNamesIsUnderline);
        setcelebratorsNamesFontSize(selectedTheme.celebratorsNamesFontSize);
        setdateColor(selectedTheme.dateColor);
        setdatePositionX(selectedTheme.datePositionX);
        setdatePositionY(selectedTheme.datePositionY);
        setdateFont(selectedTheme.dateFont);
        setdateIsBold(selectedTheme.dateIsBold);
        setdateIsUnderline(selectedTheme.dateIsUnderline);
        setdateFontSize(selectedTheme.dateFontSize);
        setThirdTextColor(selectedTheme.thirdTextColor);
        setthirdTextPositionX(selectedTheme.thirdTextPositionX);
        setthirdTextPositionY(selectedTheme.thirdTextPositionY);
        setThirdTextFont(selectedTheme.thirdTextFont);
        setThirdTextIsBold(selectedTheme.thirdTextIsBold);
        setThirdTextFontIsUnderline(selectedTheme.thirdTextIsUnderline);
        setThirdTextFontSize(selectedTheme.thirdTextFontSize);
      } else {


        if (selectedTheme.side === 'left') {
          alert('עיצוב לסטריפ ימין בלבד');
          setSelectedTheme(null);

          return;
        }

        if (selectedTheme?.iconRef2) {
          let newImg2 = document.createElement('img');
          newImg2.crossOrigin = 'AnonymousIcon';
          newImg2.height = 90;
          newImg2.width = 90;
          newImg2.src = selectedTheme?.iconRef2;
          setSelectedIcon2(newImg2);
        }

        if (selectedTheme?.stageBgImageRef2) {
          let chosenFrame2 = new Image();
          chosenFrame2.height = 900;
          chosenFrame2.width = 300;
          chosenFrame2.src = selectedTheme?.stageBgImageRef2;

          setSelectedFrame2(chosenFrame2);
        }

        setStageBgColor2(selectedTheme?.stageBgColor2);
        setColorOrImage2(selectedTheme?.colorOrImage2);
        setCelebratorsText2(selectedTheme?.celebratorsText2);
        setDateText2(selectedTheme?.dateText2);
        setThirdTextText2(selectedTheme?.thirdTextText2);
        // ========================
        setpositionImageTopX2(selectedTheme.positionImageTopX2);
        setpositionImageTopY2(selectedTheme.positionImageTopY2);
        setpositionImageMiddleX2(selectedTheme.positionImageMiddleX2);
        setpositionImageMiddleY2(selectedTheme.positionImageMiddleY2);
        setpositionImageBottomX2(selectedTheme.positionImageBottomX2);
        setpositionImageBottomY2(selectedTheme.positionImageBottomY2);
        seticonPositionX2(selectedTheme.iconPositionX2);
        seticonPositionY2(selectedTheme.iconPositionY2);
        //
        setcelebratorsPositionX2(selectedTheme.celebratorsPositionX2);
        setcelebratorsPositionY2(selectedTheme.celebratorsPositionY2);
        setcelebratorsNamesColor2(selectedTheme.celebratorsNamesColor2);
        setcelebratorsNamesFont2(selectedTheme.celebratorsNamesFont2);
        setcelebratorsNamesIsBold2(selectedTheme.celebratorsNamesIsBold2);
        setcelebratorsNamesIsUnderline2(selectedTheme.celebratorsNamesIsUnderline2);
        setcelebratorsNamesFontSize2(selectedTheme.celebratorsNamesFontSize2);
        setdateColor2(selectedTheme.dateColor2);
        setdatePositionX2(selectedTheme.datePositionX2);
        setdatePositionY2(selectedTheme.datePositionY2);
        setdateFont2(selectedTheme.dateFont2);
        setdateIsBold2(selectedTheme.dateIsBold2);
        setdateIsUnderline2(selectedTheme.dateIsUnderline2);
        setdateFontSize2(selectedTheme.dateFontSize2);
        setThirdTextColor2(selectedTheme.thirdTextColor2);
        setthirdTextPositionX2(selectedTheme.thirdTextPositionX2);
        setthirdTextPositionY2(selectedTheme.thirdTextPositionY2);
        setThirdTextFont2(selectedTheme.thirdTextFont2);
        setThirdTextIsBold2(selectedTheme.thirdTextIsBold2);
        setThirdTextFontIsUnderline2(selectedTheme.thirdTextIsUnderline2);
        setThirdTextFontSize2(selectedTheme.thirdTextFontSize2);
      }
      setSelectedTheme(null);
    }
  }, [selectedTheme]); //eslint-disable-line

  const handleSelectTheme = () => {
    if (name === selectedTheme) {
      setSelectedTheme(null);
    } else {
      setSelectedTheme(themesList.find((theme) => theme.name === name));
    }
  };

  const handleDeleteTheme = () => {
    let newThemeList = themesList.filter((theme) => theme.name !== name);
    setThemesList(newThemeList);
    newThemeList = JSON.stringify(newThemeList);
    localStorage.setItem('themesList', newThemeList);
  };

  return (
    <div
      style={{
        marginTop: '2px',
        marginBottom: '2px',
        backgroundColor: name === selectedTheme?.name ? 'lightgrey' : 'transparent',
        width: '100%',
        color: 'whitesmoke',
        padding: '4px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer',
        // padding: '0 10px',
      }}
    >
      <div onClick={handleDeleteTheme}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
      <div
        onClick={handleSelectTheme}
        style={{
          color: side === 'right' ? 'lightblue' : 'lightgreen',
          width: '50%',
          textAlign: 'right',
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default ThemeItem;
