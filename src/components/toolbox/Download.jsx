import React, { useState } from 'react';
import { getDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

// Libraries
import styled from 'styled-components';
import tw from 'twin.macro';
import { changeDpiDataUrl } from 'changedpi';
import { useRecoilState } from 'recoil';
import { useReactToPrint } from 'react-to-print';
import Modal from 'react-modal';
import '../../styles/global.css';

// import ReactToPrint from 'react-to-print';

import {
  themesList as themesListInStore,
  selectedIcon,
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
  iconPositionX as iconPositionXInStore,
  iconPositionY as iconPositionYInStore,
  datePositionX as datePositionXInStore,
  datePositionY as datePositionYInStore,
  celebratorsPositionX as celebratorsPositionXInStore,
  celebratorsPositionY as celebratorsPositionYInStore,
  celebratorsNamesColor as celebratorsNamesColorInStore,
  celebratorsNamesFont as celebratorsNamesFontInStore,
  celebratorsNamesIsBold as celebratorsNamesIsBoldInStore,
  celebratorsNamesIsUnderline as celebratorsNamesIsUnderlineInStore,
  celebratorsNamesFontSize as celebratorsNamesFontSizeInStore,
  dateColor as dateColorInStore,
  dateFont as dateFontInStore,
  dateIsBold as dateIsBoldInStore,
  dateIsUnderline as dateIsUnderlineInStore,
  dateFontSize as dateFontSizeInStore,
  thirdTextPositionX as thirdTextPositionXInStore,
  thirdTextPositionY as thirdTextPositionYInStore,
  thirdTextColor as thirdTextColorInStore,
  thirdTextFont as thirdTextFontInStore,
  thirdTextIsBold as thirdTextIsBoldInStore,
  thirdTextIsUnderline as thirdTextIsUnderlineInStore,
  thirdTextFontSize as thirdTextFontSizeInStore,
  cleanImages,
  grayscaleFilter,
  //
  selectId,
  selectId1,
} from '../recoil/themes';

import {
  selectedIcon2,
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
  iconPositionX2 as iconPositionXInStore2,
  iconPositionY2 as iconPositionYInStore2,
  celebratorsPositionX2 as celebratorsPositionXInStore2,
  celebratorsPositionY2 as celebratorsPositionYInStore2,
  celebratorsNamesColor2 as celebratorsNamesColorInStore2,
  celebratorsNamesFont2 as celebratorsNamesFontInStore2,
  celebratorsNamesIsBold2 as celebratorsNamesIsBoldInStore2,
  celebratorsNamesIsUnderline2 as celebratorsNamesIsUnderlineInStore2,
  celebratorsNamesFontSize2 as celebratorsNamesFontSizeInStore2,
  datePositionX2 as datePositionXInStore2,
  datePositionY2 as datePositionYInStore2,
  dateColor2 as dateColorInStore2,
  dateFont2 as dateFontInStore2,
  dateIsBold2 as dateIsBoldInStore2,
  dateIsUnderline2 as dateIsUnderlineInStore2,
  dateFontSize2 as dateFontSizeInStore2,
  thirdTextPositionX2 as thirdTextPositionXInStore2,
  thirdTextPositionY2 as thirdTextPositionYInStore2,
  thirdTextColor2 as thirdTextColorInStore2,
  thirdTextFont2 as thirdTextFontInStore2,
  thirdTextIsBold2 as thirdTextIsBoldInStore2,
  thirdTextIsUnderline2 as thirdTextIsUnderlineInStore2,
  thirdTextFontSize2 as thirdTextFontSizeInStore2,
  cleanImages2,
  grayscaleFilter2,
  //
  selectId2,
  selectId12,
} from '../recoil/themes2';

import {
  // numberOfStripToUseInStore,
  profile as profileInStore,
  ecoMode,
  auth,
} from '../recoil/root';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #666666;
`;

const DownloadContainer = styled.div`
  ${tw`
    `}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Button = styled.button`
  ${tw`
    bg-color-bright
    px-4
    py-4
    text-black
    border-none
    outline-none
    hover:bg-frame-gray
    `}
  border-radius: 8px;
  cursor: pointer;
`;

const customStyles = {
  content: {
    // top: '50%',
    left: '50%',
    right: 'auto',
    // bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0%)',
  },
};

export class ComponentToPrint extends React.PureComponent {
  //eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="relativeCSS">
          <img src={this.props.dataURL} height="1800px" width="1200px" alt="" />
        </div>
      </>
    );
  }
}

export const FunctionalComponentToPrint = React.forwardRef((props, ref) => {
  // eslint-disable-line max-len
  return <ComponentToPrint ref={ref} dataURL={props.dataURL} />;
});

const Download = ({
  stageRef,
  setUploadedImage,
  setUploadedImageMiddle,
  setUploadedImageBottom,
  checkedStrip,
  setCheckedStrip,
}) => {
  const [themesList, setThemesList] = useRecoilState(themesListInStore);

  const [SelectedIcon] = useRecoilState(selectedIcon);
  const [SelectedFrame] = useRecoilState(frameBgImage);
  const [stageBgColor] = useRecoilState(frameBgColor);
  const [colorOrImage] = useRecoilState(bgType);
  const [SelectedIcon2] = useRecoilState(selectedIcon2);
  const [SelectedFrame2] = useRecoilState(frameBgImage2);
  const [stageBgColor2] = useRecoilState(frameBgColor2);
  const [colorOrImage2] = useRecoilState(bgType2);
  //
  const [celebratorsText] = useRecoilState(celebratorsNames);
  const [dateText] = useRecoilState(date);
  const [thirdTextText] = useRecoilState(thirdText);
  const [celebratorsText2] = useRecoilState(celebratorsNames2);
  const [dateText2] = useRecoilState(date2);
  const [thirdTextText2] = useRecoilState(thirdText2);

  //
  const [stageBgImageRef, setStageBgImageRef] = useRecoilState(stageBgImageRefInStore); //eslint-disable-line
  const [iconRef, setIconRef] = useRecoilState(selectedIconRef); //eslint-disable-line
  const [stageBgImageRef2, setStageBgImageRef2] = useRecoilState(stageBgImageRefInStore2); //eslint-disable-line
  const [iconRef2, setIconRef2] = useRecoilState(selectedIconRef2); //eslint-disable-line
  //
  const [positionImageTopX] = useRecoilState(positionImageTopXInStore);
  const [positionImageTopY] = useRecoilState(positionImageTopYInStore);
  const [positionImageMiddleX] = useRecoilState(positionImageMiddleXInStore);
  const [positionImageMiddleY] = useRecoilState(positionImageMiddleYInStore);
  const [positionImageBottomX] = useRecoilState(positionImageBottomXInStore);
  const [positionImageBottomY] = useRecoilState(positionImageBottomYInStore);
  const [iconPositionX] = useRecoilState(iconPositionXInStore);
  const [iconPositionY] = useRecoilState(iconPositionYInStore);
  const [positionImageTopX2] = useRecoilState(positionImageTopXInStore2);
  const [positionImageTopY2] = useRecoilState(positionImageTopYInStore2);
  const [positionImageMiddleX2] = useRecoilState(positionImageMiddleXInStore2);
  const [positionImageMiddleY2] = useRecoilState(positionImageMiddleYInStore2);
  const [positionImageBottomX2] = useRecoilState(positionImageBottomXInStore2);
  const [positionImageBottomY2] = useRecoilState(positionImageBottomYInStore2);
  const [iconPositionX2] = useRecoilState(iconPositionXInStore2);
  const [iconPositionY2] = useRecoilState(iconPositionYInStore2);
  //
  const [datePositionX] = useRecoilState(datePositionXInStore);
  const [datePositionY] = useRecoilState(datePositionYInStore);
  const [celebratorsPositionX] = useRecoilState(celebratorsPositionXInStore);
  const [celebratorsPositionY] = useRecoilState(celebratorsPositionYInStore);
  const [thirdTextPositionX] = useRecoilState(thirdTextPositionXInStore);
  const [thirdTextPositionY] = useRecoilState(thirdTextPositionYInStore);
  const [datePositionX2] = useRecoilState(datePositionXInStore2);
  const [datePositionY2] = useRecoilState(datePositionYInStore2);
  const [celebratorsPositionX2] = useRecoilState(celebratorsPositionXInStore2);
  const [celebratorsPositionY2] = useRecoilState(celebratorsPositionYInStore2);
  const [thirdTextPositionX2] = useRecoilState(thirdTextPositionXInStore2);
  const [thirdTextPositionY2] = useRecoilState(thirdTextPositionYInStore2);
  //
  const [celebratorsNamesColor] = useRecoilState(celebratorsNamesColorInStore);
  const [celebratorsNamesFont] = useRecoilState(celebratorsNamesFontInStore);
  const [celebratorsNamesIsBold] = useRecoilState(celebratorsNamesIsBoldInStore);
  const [celebratorsNamesIsUnderline] = useRecoilState(celebratorsNamesIsUnderlineInStore);
  const [celebratorsNamesFontSize] = useRecoilState(celebratorsNamesFontSizeInStore);

  const [celebratorsNamesColor2] = useRecoilState(celebratorsNamesColorInStore2);
  const [celebratorsNamesFont2] = useRecoilState(celebratorsNamesFontInStore2);
  const [celebratorsNamesIsBold2] = useRecoilState(celebratorsNamesIsBoldInStore2);
  const [celebratorsNamesIsUnderline2] = useRecoilState(celebratorsNamesIsUnderlineInStore2);
  const [celebratorsNamesFontSize2] = useRecoilState(celebratorsNamesFontSizeInStore2);
  //

  //
  const [dateColor] = useRecoilState(dateColorInStore);
  const [dateFont] = useRecoilState(dateFontInStore);
  const [dateIsBold] = useRecoilState(dateIsBoldInStore);
  const [dateIsUnderline] = useRecoilState(dateIsUnderlineInStore);
  const [dateFontSize] = useRecoilState(dateFontSizeInStore);

  const [dateColor2] = useRecoilState(dateColorInStore2);
  const [dateFont2] = useRecoilState(dateFontInStore2);
  const [dateIsBold2] = useRecoilState(dateIsBoldInStore2);
  const [dateIsUnderline2] = useRecoilState(dateIsUnderlineInStore2);
  const [dateFontSize2] = useRecoilState(dateFontSizeInStore2);
  //
  const [thirdTextColor] = useRecoilState(thirdTextColorInStore);
  const [thirdTextFont] = useRecoilState(thirdTextFontInStore);
  const [thirdTextIsBold] = useRecoilState(thirdTextIsBoldInStore);
  const [thirdTextIsUnderline] = useRecoilState(thirdTextIsUnderlineInStore);
  const [thirdTextFontSize] = useRecoilState(thirdTextFontSizeInStore);

  const [thirdTextColor2] = useRecoilState(thirdTextColorInStore2);
  const [thirdTextFont2] = useRecoilState(thirdTextFontInStore2);
  const [thirdTextIsBold2] = useRecoilState(thirdTextIsBoldInStore2);
  const [thirdTextIsUnderline2] = useRecoilState(thirdTextIsUnderlineInStore2);
  const [thirdTextFontSize2] = useRecoilState(thirdTextFontSizeInStore2);

  //
  const [noImage, setNoImage] = useRecoilState(cleanImages); //eslint-disable-line
  const [grayscale, setGrayscale] = useRecoilState(grayscaleFilter); //eslint-disable-line
  const [dataUrlToPrint, setDataUrlToPrint] = React.useState(null); //eslint-disable-line
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [noImage2, setNoImage2] = useRecoilState(cleanImages2); //eslint-disable-line
  const [grayscale2, setGrayscale2] = useRecoilState(grayscaleFilter2); //eslint-disable-line
  //
  const [selectedId1, selectShape1] = useRecoilState(selectId1); //eslint-disable-line
  const [selectedId, selectShape] = useRecoilState(selectId); //eslint-disable-line
  const [selectedId12, selectShape12] = useRecoilState(selectId12); //eslint-disable-line
  const [selectedId2, selectShape2] = useRecoilState(selectId2); //eslint-disable-line
  //
  const componentRef = React.createRef(null);

  const [profile, setProfile] = useRecoilState(profileInStore); //eslint-disable-line
  const [isEcoMode, setIsEcoMode] = useRecoilState(ecoMode); //eslint-disable-line
  const [isAuth, setIsAuth] = useRecoilState(auth); //eslint-disable-line
  const [savedIsEcoModeState, setSavedIsEcoModeState] = useState(isEcoMode); //eslint-disable-line

  function closeModal() {
    setIsEcoMode(savedIsEcoModeState);
    setIsOpen(false);
  }

  const checkDeselect = async () => {
    selectShape1(null);
    selectShape(null);
  };
  const checkDeselect2 = async () => {
    selectShape12(null);
    selectShape2(null);
  };

  function openModal() {
    setSavedIsEcoModeState(isEcoMode);
    checkDeselect();
    checkDeselect2();
    handleDecreaseStrip();
    setIsEcoMode(false);
    setIsOpen(true);
  }

  React.useEffect(() => {
    const dataURL = stageRef.current.toDataURL({ pixelRatio: 2 });
    const dataUrlDpi = changeDpiDataUrl(dataURL, 300);
    setDataUrlToPrint(dataUrlDpi);
  }, [modalIsOpen, setIsOpen]); //eslint-disable-line

  const reactToPrintContent = () => {
    return componentRef.current;
  };

  const handleDecreaseStrip = async () => {
    const docRef = doc(db, 'users', profile?.doc?.localId);

    const docSnap = await getDoc(docRef);
    let currentDoc = docSnap.data();

    if (Object.keys(docRef).length > 0 && currentDoc?.localId) {
      const payload = {
        ...currentDoc,
        usedStrips: currentDoc?.usedStrips ? parseInt(currentDoc?.usedStrips) + 2 : '2',
        leftStrips: currentDoc?.leftStrips ? parseInt(currentDoc?.leftStrips) - 2 : '2',
      };

      await updateDoc(docRef, payload);
      // setProfile(() => ({ doc: { ...payload } }));
    }

    // setStripsRemaining(stripsRemaining - 2);
    if (profile?.doc?.leftStrips <= 2) {
      alert('מכסת סטריפים הגיעה לסופה יש ליצור קשר עם מנהל מערכת');
      setIsAuth(false);
    }
  };

  const toggleEcoMode = () => {
    setIsEcoMode((state) => !state);
  };

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
    documentTitle: 'strip',
    // onBeforeGetContent: handleOnBeforeGetContent,
    // onBeforePrint: handleBeforePrint,
    onAfterPrint: closeModal,
    // removeAfterPrint: true,
  });

  const downloadURI = (uri, name) => {
    handleDecreaseStrip();
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = () => {
    const dataURL = stageRef.current.toDataURL({ pixelRatio: 2 });
    const dataUrlDpi = changeDpiDataUrl(dataURL, 300);

    setTimeout(() => {
      downloadURI(dataUrlDpi, 'strip.png');
    }, 1000);
  };

  const deselectBeforeDownload = () => {
    let lastEcoModeState = isEcoMode;
    checkDeselect();
    checkDeselect2();
    setIsEcoMode(false);

    setTimeout(() => {
      handleDownload();
      setIsEcoMode(lastEcoModeState);
    }, 1500);
  };

  const toggleGrayScale = () => {
    setGrayscale((state) => !state);
  };
  const toggleGrayScale2 = () => {
    setGrayscale2((state) => !state);
  };

  const handleSaveTheme = () => {
    const themeRandomName = Math.floor(Math.random() * 10000);
    if (!!checkedStrip) {
      localStorage.setItem(
        'themesList',
        JSON.stringify([
          ...themesList,
          {
            name: `${celebratorsText.length ? celebratorsText : themeRandomName} (L)`,
            side: 'left',
            SelectedIcon,
            SelectedFrame,
            stageBgColor,
            colorOrImage,
            celebratorsText,
            dateText,
            thirdTextText,
            stageBgImageRef,
            iconRef,

            positionImageTopX,
            positionImageTopY,
            positionImageMiddleX,
            positionImageMiddleY,
            positionImageBottomX,
            positionImageBottomY,
            iconPositionX,
            iconPositionY,

            celebratorsPositionX,
            celebratorsPositionY,
            celebratorsNamesColor,
            celebratorsNamesFont,
            celebratorsNamesIsBold,
            celebratorsNamesIsUnderline,
            celebratorsNamesFontSize,

            datePositionX,
            datePositionY,
            dateColor,
            dateFont,
            dateIsBold,
            dateIsUnderline,
            dateFontSize,

            thirdTextPositionX,
            thirdTextPositionY,
            thirdTextColor,
            thirdTextFont,
            thirdTextIsBold,
            thirdTextIsUnderline,
            thirdTextFontSize,
          },
        ])
      );

      setThemesList((state) => [
        ...state,
        {
          name: `${celebratorsText.length ? celebratorsText : themeRandomName} (L)`,
          side: 'left',
          SelectedIcon,
          SelectedFrame,
          stageBgColor,
          colorOrImage,
          celebratorsText,
          dateText,
          thirdTextText,
          stageBgImageRef,
          iconRef,

          positionImageTopX,
          positionImageTopY,
          positionImageMiddleX,
          positionImageMiddleY,
          positionImageBottomX,
          positionImageBottomY,
          iconPositionX,
          iconPositionY,

          celebratorsPositionX,
          celebratorsPositionY,
          celebratorsNamesColor,
          celebratorsNamesFont,
          celebratorsNamesIsBold,
          celebratorsNamesIsUnderline,
          celebratorsNamesFontSize,

          datePositionX,
          datePositionY,
          dateColor,
          dateFont,
          dateIsBold,
          dateIsUnderline,
          dateFontSize,

          thirdTextPositionX,
          thirdTextPositionY,
          thirdTextColor,
          thirdTextFont,
          thirdTextIsBold,
          thirdTextIsUnderline,
          thirdTextFontSize,
        },
      ]);
    } else {
      localStorage.setItem(
        'themesList',
        JSON.stringify([
          ...themesList,
          {
            name: `${celebratorsText2.length ? celebratorsText2 : themeRandomName} (R)`,
            side: 'right',
            SelectedIcon2,
            SelectedFrame2,
            stageBgColor2,
            colorOrImage2,
            celebratorsText2,
            dateText2,
            thirdTextText2,
            stageBgImageRef2,
            iconRef2,

            positionImageTopX2,
            positionImageTopY2,
            positionImageMiddleX2,
            positionImageMiddleY2,
            positionImageBottomX2,
            positionImageBottomY2,
            iconPositionX2,
            iconPositionY2,

            celebratorsPositionX2,
            celebratorsPositionY2,
            celebratorsNamesColor2,
            celebratorsNamesFont2,
            celebratorsNamesIsBold2,
            celebratorsNamesIsUnderline2,
            celebratorsNamesFontSize2,

            datePositionX2,
            datePositionY2,
            dateColor2,
            dateFont2,
            dateIsBold2,
            dateIsUnderline2,
            dateFontSize2,

            thirdTextPositionX2,
            thirdTextPositionY2,
            thirdTextColor2,
            thirdTextFont2,
            thirdTextIsBold2,
            thirdTextIsUnderline2,
            thirdTextFontSize2,
          },
        ])
      );

      setThemesList((state) => [
        ...state,
        {
          name: `${celebratorsText2.length ? celebratorsText2 : themeRandomName} (R)`,
          side: 'right',
          SelectedIcon2,
          SelectedFrame2,
          stageBgColor2,
          colorOrImage2,
          celebratorsText2,
          dateText2,
          thirdTextText2,
          stageBgImageRef2,
          iconRef2,

          positionImageTopX2,
          positionImageTopY2,
          positionImageMiddleX2,
          positionImageMiddleY2,
          positionImageBottomX2,
          positionImageBottomY2,
          iconPositionX2,
          iconPositionY2,

          celebratorsPositionX2,
          celebratorsPositionY2,
          celebratorsNamesColor2,
          celebratorsNamesFont2,
          celebratorsNamesIsBold2,
          celebratorsNamesIsUnderline2,
          celebratorsNamesFontSize2,

          datePositionX2,
          datePositionY2,
          dateColor2,
          dateFont2,
          dateIsBold2,
          dateIsUnderline2,
          dateFontSize2,

          thirdTextPositionX2,
          thirdTextPositionY2,
          thirdTextColor2,
          thirdTextFont2,
          thirdTextIsBold2,
          thirdTextIsUnderline2,
          thirdTextFontSize2,
        },
      ]);
    }
  };

  return (
    <>
      <Container>
        <DownloadContainer>
          <Button onClick={deselectBeforeDownload}>הורד</Button>
        </DownloadContainer>
        <DownloadContainer>
          <Button onClick={handleSaveTheme}>שמור עיצוב</Button>
        </DownloadContainer>
        {/* <DownloadContainer>
        <Button onClick={handleResetStrip}>נקה תמונות</Button>
      </DownloadContainer> */}
        <DownloadContainer>
          <Button
            onClick={!!checkedStrip ? toggleGrayScale : toggleGrayScale2}
            style={{
              opacity: !!checkedStrip && grayscale ? 0.7 : !checkedStrip && grayscale2 ? 0.7 : 1,
            }}
          >
            שחור לבן
          </Button>
        </DownloadContainer>

        <DownloadContainer>
          <Button
            onClick={toggleEcoMode}
            style={{
              opacity: !isEcoMode ? 0.7 : 1,
            }}
          >
            eco
          </Button>
        </DownloadContainer>

        <DownloadContainer>
          <Button onClick={openModal}> Print</Button>
        </DownloadContainer>
      </Container>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            // justifyContent: 'flex-start',
          }}
        >
          <h1>תצוגה מקדימה</h1>
          <DownloadContainer>
            <Button
              style={{ width: '60%', backgroundColor: 'gray', flex: 1 }}
              onClick={handlePrint}
            >
              {' '}
              לחץ כאן על מנת להדפיס
            </Button>
          </DownloadContainer>
          <ComponentToPrint ref={componentRef} dataURL={dataUrlToPrint} />
        </div>
      </Modal>
    </>
  );
};

export default Download;
