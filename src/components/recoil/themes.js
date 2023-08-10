import { atom, selector } from 'recoil'; //eslint-disable-line
import {
  positionImageX,
  scaleCircleInit,
  textPositionX,
  scaleInnerCircle,
  offsetInitCircle,
} from '../../config/config';
// const selectedTheme = localStorage.getItem('selectedTheme');

// themes
export const themesList = atom({
  key: 'themesList',
  default: null,
});

export const selectedTheme = atom({
  key: 'selectedTheme',
  default: null,
});

// icon
export const selectedIcon = atom({
  key: 'selectedIcon',
  default: null,
});
export const selectedIconRef = atom({
  key: 'selectedIconRef',
  default: null,
});

// stage
export const colorOrImage = atom({
  key: 'colorOrImage',
  default: false, // false = color , true = image
});

export const stageBgColor = atom({
  key: 'stageBgColor',
  default: '#ffffff',
});

export const stageBgImage = atom({
  key: 'stageBgImage',
  default: null,
});
export const stageBgImageRef = atom({
  key: 'stageBgImageRef',
  default: null,
});

// text
export const celebratorsNames = atom({
  key: 'celebratorsNames',
  default: '',
});

export const date = atom({
  key: 'date',
  default: '',
});

export const thirdText = atom({
  key: 'thirdText',
  default: '',
});

export const celebratorsNamesColor = atom({
  key: 'celebratorsNamesColor',
  default: '#000000',
});

export const celebratorsNamesFont = atom({
  key: 'celebratorsNamesFont',
  default: null,
});
export const celebratorsNamesFontSize = atom({
  key: 'celebratorsNamesFontSize',
  default: 48,
});

export const celebratorsNamesIsBold = atom({
  key: 'celebratorsNamesIsBold',
  default: false,
});

export const celebratorsNamesIsUnderline = atom({
  key: 'celebratorsNamesIsUnderline',
  default: false,
});

export const dateColor = atom({
  key: 'dateColor',
  default: '#000000',
});

export const dateFont = atom({
  key: 'dateFont',
  default: null,
});
export const dateFontSize = atom({
  key: 'dateFontSize',
  default: 48,
});

export const dateIsBold = atom({
  key: 'dateIsBold',
  default: false,
});

export const dateIsUnderline = atom({
  key: 'dateIsUnderline',
  default: false,
});

export const thirdTextColor = atom({
  key: 'thirdTextColor',
  default: '#000000',
});

export const thirdTextFont = atom({
  key: 'thirdTextFont',
  default: null,
});
export const thirdTextFontSize = atom({
  key: 'thirdTextFontSize',
  default: 48,
});

export const thirdTextIsBold = atom({
  key: 'thirdTextIsBold',
  default: false,
});

export const thirdTextIsUnderline = atom({
  key: 'thirdTextIsUnderline',
  default: false,
});

// positions
export const positionImageTopX = atom({
  key: 'positionImageTopX',
  default: positionImageX,
});
export const positionImageTopY = atom({
  key: 'positionImageTopY',
  default: 35,
});
export const positionImageMiddleX = atom({
  key: 'positionImageMiddleX',
  default: positionImageX,
});
export const positionImageMiddleY = atom({
  key: 'positionImageMiddleY',
  default: 35 + 240,
});
export const positionImageBottomX = atom({
  key: 'positionImageBottomX',
  default: positionImageX,
});
export const positionImageBottomY = atom({
  key: 'positionImageBottomY',
  default: 35 + 480,
});
export const iconPositionX = atom({
  key: 'iconPositionX',
  default: 100,
});

export const iconPositionY = atom({
  key: 'iconPositionY',
  default: 35 + 770,
});

export const datePositionX = atom({
  key: 'datePositionX',
  default: textPositionX,
});
export const datePositionY = atom({
  key: 'datePositionY',
  default: 35 + 750,
});

export const thirdTextPositionX = atom({
  key: 'thirdTextPositionX',
  default: textPositionX,
});
export const thirdTextPositionY = atom({
  key: 'thirdTextPositionY',
  default: 35 + 800,
});

export const celebratorsPositionX = atom({
  key: 'celebratorsPositionX',
  default: textPositionX,
});
export const celebratorsPositionY = atom({
  key: 'celebratorsPositionY',
  default: 35 + 700,
});
export const cleanImages = atom({
  key: 'cleanImages',
  default: true,
});
export const imageShape = atom({
  key: 'imageShape',
  default: 'square',
});
export const grayscaleFilter = atom({
  key: 'grayscaleFilter',
  default: false,
});

// Image Sizes
export const topImageSize = atom({
  key: 'topImageSize',
  default: { height: 180, width: 260 },
});
export const middleImageSize = atom({
  key: 'middleImageSize',
  default: { height: 180, width: 260 },
});
export const bottomImageSize = atom({
  key: 'bottomImageSize',
  default: { height: 180, width: 260 },
});

export const scaleSquare = atom({
  key: 'scaleSquare',
  default: 25,
});
export const scaleSquareInner = atom({
  key: 'scaleSquareInner',
  default: 500,
});
export const scaleCircle = atom({
  key: 'scaleCircle',
  default: scaleCircleInit,
});
export const scaleHeart = atom({
  key: 'scaleHeart',
  default: 500,
});
export const scaleHamsa = atom({
  key: 'scaleHamsa',
  default: 500,
});

export const scaleStar = atom({
  key: 'scaleStar',
  default: 500,
});
export const scaleCircleInner = atom({
  key: 'scaleCircleInner',
  default: scaleInnerCircle,
});
export const scaleHeartInner = atom({
  key: 'scaleHeartInner',
  default: 500,
});
export const scaleHamsaInner = atom({
  key: 'scaleHamsaInner',
  default: 500,
});

export const scaleStarInner = atom({
  key: 'scaleStarInner',
  default: 500,
});

export const offsetXCircle = atom({
  key: 'offsetXCircle',
  default: offsetInitCircle,
});
export const offsetYCircle = atom({
  key: 'offsetYCircle',
  default: offsetInitCircle,
});
export const offsetXStar = atom({
  key: 'offsetXStar',
  default: 0,
});
export const offsetYStar = atom({
  key: 'offsetYStar',
  default: 0,
});
export const offsetXHeart = atom({
  key: 'offsetXHeart',
  default: 0,
});
export const offsetYHeart = atom({
  key: 'offsetYHeart',
  default: 0,
});
export const offsetXHamsa = atom({
  key: 'offsetXHamsa',
  default: 0,
});
export const offsetYHamsa = atom({
  key: 'offsetYHamsa',
  default: 0,
});
export const innerRadiusStar = atom({
  key: 'innerRadiusStar',
  default: 200,
});
export const outerRadiusStar = atom({
  key: 'outerRadiusStar',
  default: 600,
});

//shape selector
export const selectId1 = atom({
  key: 'selectId1',
  default: null,
});

export const selectId = atom({
  key: 'selectId',
  default: null,
});

export const logoHeight = atom({
  key: 'logoHeight',
  default: 200,
});
export const logoWidth = atom({
  key: 'logoWidth',
  default: 200,
});
export const logoPositionX = atom({
  key: 'logoPositionX',
  default: 100,
});
export const logoPositionY = atom({
  key: 'logoPositionY',
  default: 550,
});
