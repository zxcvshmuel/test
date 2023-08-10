import { atom, selector } from 'recoil'; //eslint-disable-line

import {
  positionImageX,
  scaleCircleInit,
  scaleSquareInit,
  scaleInnerCircle,
  offsetInitCircle,
} from '../../config/config';

// icon
export const selectedIcon2 = atom({
  key: 'selectedIcon2',
  default: null,
});
export const selectedIconRef2 = atom({
  key: 'selectedIconRef2',
  default: null,
});

// stage
export const colorOrImage2 = atom({
  key: 'colorOrImage2',
  default: false, // false = color , true = image
});

export const stageBgColor2 = atom({
  key: 'stageBgColor2',
  default: '#ffffff',
});

export const stageBgImage2 = atom({
  key: 'stageBgImage2',
  default: null,
});
export const stageBgImageRef2 = atom({
  key: 'stageBgImageRef2',
  default: null,
});

// text
export const celebratorsNames2 = atom({
  key: 'celebratorsNames2',
  default: '',
});

export const date2 = atom({
  key: 'date2',
  default: '',
});

export const thirdText2 = atom({
  key: 'thirdText2',
  default: '',
});

export const celebratorsNamesColor2 = atom({
  key: 'celebratorsNamesColor2',
  default: '#000000',
});

export const celebratorsNamesFont2 = atom({
  key: 'celebratorsNamesFont2',
  default: null,
});
export const celebratorsNamesFontSize2 = atom({
  key: 'celebratorsNamesFontSize2',
  default: 48,
});

export const celebratorsNamesIsBold2 = atom({
  key: 'celebratorsNamesIsBold2',
  default: false,
});

export const celebratorsNamesIsUnderline2 = atom({
  key: 'celebratorsNamesIsUnderline2',
  default: false,
});

export const dateColor2 = atom({
  key: 'dateColor2',
  default: '#000000',
});

export const dateFont2 = atom({
  key: 'dateFont2',
  default: null,
});
export const dateFontSize2 = atom({
  key: 'dateFontSize2',
  default: 48,
});

export const dateIsBold2 = atom({
  key: 'dateIsBold2',
  default: false,
});

export const dateIsUnderline2 = atom({
  key: 'dateIsUnderline2',
  default: false,
});

export const thirdTextColor2 = atom({
  key: 'thirdTextColor2',
  default: '#000000',
});

export const thirdTextFont2 = atom({
  key: 'thirdTextFont2',
  default: null,
});
export const thirdTextFontSize2 = atom({
  key: 'thirdTextFontSize2',
  default: 48,
});

export const thirdTextIsBold2 = atom({
  key: 'thirdTextIsBold2',
  default: false,
});

export const thirdTextIsUnderline2 = atom({
  key: 'thirdTextIsUnderline2',
  default: false,
});

// positions
export const positionImageTopX2 = atom({
  key: 'positionImageTopX2',
  default: positionImageX,
});
export const positionImageTopY2 = atom({
  key: 'positionImageTopY2',
  default: 35,
});
export const positionImageMiddleX2 = atom({
  key: 'positionImageMiddleX2',
  default: positionImageX,
});
export const positionImageMiddleY2 = atom({
  key: 'positionImageMiddleY2',
  default: 35 + 240,
});
export const positionImageBottomX2 = atom({
  key: 'positionImageBottomX2',
  default: positionImageX,
});
export const positionImageBottomY2 = atom({
  key: 'positionImageBottomY2',
  default: 35 + 480,
});
export const iconPositionX2 = atom({
  key: 'iconPositionX2',
  default: 100,
});

export const iconPositionY2 = atom({
  key: 'iconPositionY2',
  default: 35 + 770,
});

export const datePositionX2 = atom({
  key: 'datePositionX2',
  default: 40,
});
export const datePositionY2 = atom({
  key: 'datePositionY2',
  default: 35 + 750,
});

export const thirdTextPositionX2 = atom({
  key: 'thirdTextPositionX2',
  default: 40,
});
export const thirdTextPositionY2 = atom({
  key: 'thirdTextPositionY2',
  default: 35 + 800,
});

export const celebratorsPositionX2 = atom({
  key: 'celebratorsPositionX2',
  default: 40,
});
export const celebratorsPositionY2 = atom({
  key: 'celebratorsPositionY2',
  default: 35 + 700,
});
export const cleanImages2 = atom({
  key: 'cleanImages2',
  default: true,
});
export const imageShape2 = atom({
  key: 'imageShape2',
  default: 'square',
});
export const grayscaleFilter2 = atom({
  key: 'grayscaleFilter2',
  default: false,
});

// Image Sizes
export const topImageSize2 = atom({
  key: 'topImageSize2',
  default: { height: 180, width: 260 },
});
export const middleImageSize2 = atom({
  key: 'middleImageSize2',
  default: { height: 180, width: 260 },
});
export const bottomImageSize2 = atom({
  key: 'bottomImageSize2',
  default: { height: 180, width: 260 },
});

export const scaleSquare2 = atom({
  key: 'scaleSquare2',
  default: scaleSquareInit,
});
export const scaleSquareInner2 = atom({
  key: 'scaleSquareInner2',
  default: 500,
});
export const scaleCircle2 = atom({
  key: 'scaleCircle2',
  default: scaleCircleInit,
});
export const scaleHeart2 = atom({
  key: 'scaleHeart2',
  default: 500,
});
export const scaleHamsa2 = atom({
  key: 'scaleHamsa2',
  default: 500,
});

export const scaleStar2 = atom({
  key: 'scaleStar2',
  default: 500,
});
export const scaleCircleInner2 = atom({
  key: 'scaleCircleInner2',
  default: scaleInnerCircle,
});
export const scaleHeartInner2 = atom({
  key: 'scaleHeartInner2',
  default: 500,
});
export const scaleHamsaInner2 = atom({
  key: 'scaleHamsaInner2',
  default: 500,
});

export const scaleStarInner2 = atom({
  key: 'scaleStarInner2',
  default: 500,
});

export const offsetXCircle2 = atom({
  key: 'offsetXCircle2',
  default: offsetInitCircle,
});
export const offsetYCircle2 = atom({
  key: 'offsetYCircle2',
  default: offsetInitCircle,
});
export const offsetXStar2 = atom({
  key: 'offsetXStar2',
  default: 0,
});
export const offsetYStar2 = atom({
  key: 'offsetYStar2',
  default: 0,
});
export const offsetXHeart2 = atom({
  key: 'offsetXHeart2',
  default: 0,
});
export const offsetYHeart2 = atom({
  key: 'offsetYHeart2',
  default: 0,
});
export const offsetXHamsa2 = atom({
  key: 'offsetXHamsa2',
  default: 0,
});
export const offsetYHamsa2 = atom({
  key: 'offsetYHamsa2',
  default: 0,
});
export const innerRadiusStar2 = atom({
  key: 'innerRadiusStar2',
  default: 200,
});
export const outerRadiusStar2 = atom({
  key: 'outerRadiusStar2',
  default: 600,
});

//shape selector
export const selectId12 = atom({
  key: 'selectId12',
  default: null,
});

export const selectId2 = atom({
  key: 'selectId2',
  default: null,
});

export const logoHeight2 = atom({
  key: 'logoHeight2',
  default: 200,
});
export const logoWidth2 = atom({
  key: 'logoWidth2',
  default: 200,
});

export const logoPositionX2 = atom({
  key: 'logoPositionX2',
  default: 100,
});
export const logoPositionY2 = atom({
  key: 'logoPositionY2',
  default: 550,
});
