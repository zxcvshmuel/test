import React, { useState, useRef, useEffect } from 'react';
import { auth, db } from './firebase';
import { doc, query, onSnapshot } from 'firebase/firestore';
// import { doc, getDoc } from 'firebase/firestore';

// Libraries
import useImage from 'use-image';
import styled from 'styled-components';
import tw from 'twin.macro';
import Helmet from 'react-helmet';
import './strips.css';
import { useRecoilState } from 'recoil';
// import firebase from './firebase';
import Logo from './images/logo.png';
import StripsController from './components/toolbox/StripsController';

// Components
import IconsCarousel from './components/frameControllers/IconsCarousel';
// import Head from '../components/shared/Head';
import Inputs from './components/frameControllers/DetailsInput';
import Download from './components/toolbox/Download';
import CanvasStage from './components/canvas/Stage';

// Assets
import { iconData } from './config/frameData';

// import { initializeApp } from 'firebase/app';

// Recoil

import {
  selectedIcon,
  iconPositionX, //eslint-disable-line
  iconPositionY, //eslint-disable-line
  colorOrImage as bgType,
  stageBgColor as frameBgColor,
  stageBgImage as frameBgImage,
  thirdText,
  celebratorsNames,
  date,
  celebratorsNamesColor,
  celebratorsNamesFont,
  celebratorsNamesIsBold,
  celebratorsNamesIsUnderline,
  dateColor,
  dateFont,
  dateIsBold,
  dateIsUnderline,
  thirdTextColor,
  thirdTextFont,
  thirdTextIsBold,
  thirdTextIsUnderline,
} from './components/recoil/themes';

import {
  selectedIcon2,
  iconPositionX2, //eslint-disable-line
  iconPositionY2, //eslint-disable-line
  colorOrImage2 as bgType2,
  stageBgColor2 as frameBgColor2,
  stageBgImage2 as frameBgImage2,
  thirdText2,
  celebratorsNames2,
  date2,
  celebratorsNamesColor2,
  celebratorsNamesFont2,
  celebratorsNamesIsBold2,
  celebratorsNamesIsUnderline2,
  dateColor2,
  dateFont2,
  dateIsBold2,
  dateIsUnderline2,
  thirdTextColor2,
  thirdTextFont2,
  thirdTextIsBold2,
  thirdTextIsUnderline2,
} from './components/recoil/themes2';
import { useNavigate } from 'react-router-dom';

import {
  checkedStripInStore,
  auth as userAuth,
  profile as profileInStore,
  numberOfStripToUseInStore,
} from './components/recoil/root';

const Container3 = styled.h1`
  ${tw`
   w-94
   pt-2
   m-auto
   sm:w-full
`}
`;

const C1 = styled.div`
  ${tw`


  `}

  height: 1062px;
  width: 600px;
  background-color: white;
  box-shadow: 0 0 0 0 red;

  border-radius: 4px;
`;

const C3 = styled.div`
  ${tw`


  `}
`;

const C2 = styled.div`
  ${tw`
    flex
    gap-20
    mt-18
    mlg:grid
    mlg:gap-0
  `}
`;

const CarouselC = styled.h1`
  ${tw`
    sm:w-full
    mt-5
`}
  margin: 0px, 0px;
  padding: 2px;
  overflow-x: auto;
  white-space: nowrap;
  width: 100%;
`;

const Container = styled.div`
  ${tw`
    bg-color-secondary
    h-full
    grid
    font-roboto
    justify-center
    text-center
    justify-items-center
    items-center
    

    `}
  background-color: 'white'
`;

const ICONS = {
  a1: iconData.icons.a1,
  a2: iconData.icons.a2,
  a3: iconData.icons.a3,
  a4: iconData.icons.a4,
  a5: iconData.icons.a5,
  a6: iconData.icons.a6,
  a7: iconData.icons.a7,
  a8: iconData.icons.a8,
  a9: iconData.icons.a9,
  a10: iconData.icons.a10,
  a11: iconData.icons.a11,
  a12: iconData.icons.a12,
  a13: iconData.icons.a13,
  a14: iconData.icons.a14,
  a15: iconData.icons.a15,
  a16: iconData.icons.a16,
  a17: iconData.icons.a17,
  a18: iconData.icons.a18,
  a19: iconData.icons.a19,
  a20: iconData.icons.a20,
  a21: iconData.icons.a21,
  a22: iconData.icons.a22,
  a23: iconData.icons.a23,
  a24: iconData.icons.a24,
  a25: iconData.icons.a25,
  a26: iconData.icons.a26,
  a27: iconData.icons.a27,
  a28: iconData.icons.a28,
  a29: iconData.icons.a29,
  a30: iconData.icons.a30,
  a31: iconData.icons.a31,
  a32: iconData.icons.a32,
  a33: iconData.icons.a33,
  a34: iconData.icons.a34,
  a35: iconData.icons.a35,
  a36: iconData.icons.a36,
  a37: iconData.icons.a37,
  a38: iconData.icons.a38,
  a39: iconData.icons.a39,
  a40: iconData.icons.a40,
  a41: iconData.icons.a41,
  a42: iconData.icons.a42,
  a43: iconData.icons.a43,
  a44: iconData.icons.a44,
  a45: iconData.icons.a45,
  a46: iconData.icons.a46,
  a47: iconData.icons.a47,
  a48: iconData.icons.a48,
  a49: iconData.icons.a49,
  a50: iconData.icons.a50,
  a51: iconData.icons.a51,
  a52: iconData.icons.a52,
  a53: iconData.icons.a53,
  a54: iconData.icons.a54,
  a55: iconData.icons.a55,
  a56: iconData.icons.a56,
  a57: iconData.icons.a57,
  a58: iconData.icons.a58,
  a59: iconData.icons.a59,
  a60: iconData.icons.a60,
  a61: iconData.icons.a61,
  a62: iconData.icons.a62,
  a63: iconData.icons.a63,
  a64: iconData.icons.a64,
  a65: iconData.icons.a65,
  a66: iconData.icons.a66,
  a67: iconData.icons.a67,
  a68: iconData.icons.a68,
  a69: iconData.icons.a69,
  a70: iconData.icons.a70,
  a71: iconData.icons.a71,
  a72: iconData.icons.a72,
  a73: iconData.icons.a73,
  a74: iconData.icons.a74,
  a75: iconData.icons.a75,
  a76: iconData.icons.a76,
  a77: iconData.icons.a77,
  a78: iconData.icons.a78,
  a79: iconData.icons.a79,
  a80: iconData.icons.a80,
  a81: iconData.icons.a81,
  a82: iconData.icons.a82,
  a83: iconData.icons.a83,
  a84: iconData.icons.a84,
  a85: iconData.icons.a85,
  a86: iconData.icons.a86,
  a87: iconData.icons.a87,
  a88: iconData.icons.a88,
  a89: iconData.icons.a89,
  a90: iconData.icons.a90,
  a91: iconData.icons.a91,
  a92: iconData.icons.a92,
  a93: iconData.icons.a93,
  a94: iconData.icons.a94,
  a95: iconData.icons.a95,
  a96: iconData.icons.a96,
  a97: iconData.icons.a97,
  a98: iconData.icons.a98,
  a99: iconData.icons.a99,
  a100: iconData.icons.a100,
  a101: iconData.icons.a101,
  a102: iconData.icons.a102,
  a103: iconData.icons.a103,
  a104: iconData.icons.a104,
  a105: iconData.icons.a105,
  a106: iconData.icons.a106,
  a107: iconData.icons.a107,
  a108: iconData.icons.a108,
  a109: iconData.icons.a109,
  a110: iconData.icons.a110,
  a111: iconData.icons.a111,
  a112: iconData.icons.a112,
  a113: iconData.icons.a113,
  a114: iconData.icons.a114,
  a115: iconData.icons.a115,
  a116: iconData.icons.a116,
  a117: iconData.icons.a117,
  a118: iconData.icons.a118,
  a119: iconData.icons.a119,
  a120: iconData.icons.a120,
  a121: iconData.icons.a121,
  a122: iconData.icons.a122,
  a123: iconData.icons.a123,
  a124: iconData.icons.a124,
  a125: iconData.icons.a125,
  a126: iconData.icons.a126,
  a127: iconData.icons.a127,
  a128: iconData.icons.a128,
  a129: iconData.icons.a129,
  a130: iconData.icons.a130,
  a131: iconData.icons.a131,
  a132: iconData.icons.a132,
  a133: iconData.icons.a133,
  a134: iconData.icons.a134,
  a135: iconData.icons.a135,
  a136: iconData.icons.a136,
  a137: iconData.icons.a137,
  a138: iconData.icons.a138,
  a139: iconData.icons.a139,
  a140: iconData.icons.a140,
  a141: iconData.icons.a141,
  a142: iconData.icons.a142,
  a143: iconData.icons.a143,
  a144: iconData.icons.a144,
  a145: iconData.icons.a145,
  a146: iconData.icons.a146,
  a147: iconData.icons.a147,
  a148: iconData.icons.a148,
  a149: iconData.icons.a149,
  a150: iconData.icons.a150,
  a151: iconData.icons.a151,
  a152: iconData.icons.a152,
  a153: iconData.icons.a153,
  a154: iconData.icons.a154,
  a155: iconData.icons.a155,
  a156: iconData.icons.a156,
  a157: iconData.icons.a157,
  a158: iconData.icons.a158,
  a159: iconData.icons.a159,
  a160: iconData.icons.a160,
  a161: iconData.icons.a161,
  a162: iconData.icons.a162,
  a163: iconData.icons.a163,
  a164: iconData.icons.a164,
  a165: iconData.icons.a165,
  a166: iconData.icons.a166,
  a167: iconData.icons.a167,
  a168: iconData.icons.a168,
  a169: iconData.icons.a169,
  a170: iconData.icons.a170,
  a171: iconData.icons.a171,
  a172: iconData.icons.a172,
  a173: iconData.icons.a173,
  a174: iconData.icons.a174,
  a175: iconData.icons.a175,
  a176: iconData.icons.a176,
  a177: iconData.icons.a177,
  a178: iconData.icons.a178,
  a179: iconData.icons.a179,
  a180: iconData.icons.a180,
  a181: iconData.icons.a181,
  a182: iconData.icons.a182,
  a183: iconData.icons.a183,
  a184: iconData.icons.a184,
  a185: iconData.icons.a185,
  a186: iconData.icons.a186,
  a187: iconData.icons.a187,
  a188: iconData.icons.a188,
  a189: iconData.icons.a189,
  a190: iconData.icons.a190,
  a191: iconData.icons.a191,
  a192: iconData.icons.a192,
  a193: iconData.icons.a193,
  a194: iconData.icons.a194,
  a195: iconData.icons.a195,
  a196: iconData.icons.a196,
  a197: iconData.icons.a197,
  a198: iconData.icons.a198,
  a199: iconData.icons.a199,
  a200: iconData.icons.a200,
  a201: iconData.icons.a201,
  a202: iconData.icons.a202,
  a203: iconData.icons.a203,
  a204: iconData.icons.a204,
  a205: iconData.icons.a205,
  a206: iconData.icons.a206,
  a207: iconData.icons.a207,
  a208: iconData.icons.a208,
  a209: iconData.icons.a209,
  a210: iconData.icons.a210,
  a211: iconData.icons.a211,
  a212: iconData.icons.a212,
  a213: iconData.icons.a213,
  a214: iconData.icons.a214,
  a215: iconData.icons.a215,
  a216: iconData.icons.a216,
  a217: iconData.icons.a217,
  a218: iconData.icons.a218,
  a219: iconData.icons.a219,
  a220: iconData.icons.a220,
  a221: iconData.icons.a221,
  a222: iconData.icons.a222,
  a223: iconData.icons.a223,
  a224: iconData.icons.a224,
  a225: iconData.icons.a225,
  a226: iconData.icons.a226,
  a227: iconData.icons.a227,
  a228: iconData.icons.a228,
  a229: iconData.icons.a229,
  a230: iconData.icons.a230,
  a231: iconData.icons.a231,
  a232: iconData.icons.a232,
  a233: iconData.icons.a233,
  a234: iconData.icons.a234,
  a235: iconData.icons.a235,
  a236: iconData.icons.a236,
  a237: iconData.icons.a237,
  a238: iconData.icons.a238,
  a239: iconData.icons.a239,
  a240: iconData.icons.a240,
  a241: iconData.icons.a241,
  a242: iconData.icons.a242,
  a243: iconData.icons.a243,
  a244: iconData.icons.a244,
  a245: iconData.icons.a245,
  a246: iconData.icons.a246,
  a247: iconData.icons.a247,
  a248: iconData.icons.a248,
  a249: iconData.icons.a249,
  a250: iconData.icons.a250,
  a251: iconData.icons.a251,
  a252: iconData.icons.a252,
  a253: iconData.icons.a253,
  a254: iconData.icons.a254,
  a255: iconData.icons.a255,
  a256: iconData.icons.a256,
  a257: iconData.icons.a257,
  a258: iconData.icons.a258,
  a259: iconData.icons.a259,
  a260: iconData.icons.a260,
  a261: iconData.icons.a261,
  a262: iconData.icons.a262,
  a263: iconData.icons.a263,
  a264: iconData.icons.a264,
  a265: iconData.icons.a265,
  a266: iconData.icons.a266,
  a267: iconData.icons.a267,
  a268: iconData.icons.a268,
  a269: iconData.icons.a269,
  a270: iconData.icons.a270,
  a271: iconData.icons.a271,
  a272: iconData.icons.a272,
  a273: iconData.icons.a273,
  a274: iconData.icons.a274,
  a275: iconData.icons.a275,
  a276: iconData.icons.a276,
  a277: iconData.icons.a277,
  a278: iconData.icons.a278,
  a279: iconData.icons.a279,
  a280: iconData.icons.a280,
  a281: iconData.icons.a281,
  a282: iconData.icons.a282,
  a283: iconData.icons.a283,
  a284: iconData.icons.a284,
  a285: iconData.icons.a285,
  a286: iconData.icons.a286,
  a287: iconData.icons.a287,
  a288: iconData.icons.a288,
  a289: iconData.icons.a289,
  a290: iconData.icons.a290,
  a291: iconData.icons.a291,
  a292: iconData.icons.a292,
  a293: iconData.icons.a293,
  a294: iconData.icons.a294,
  a295: iconData.icons.a295,
  a296: iconData.icons.a296,
  a297: iconData.icons.a297,
  a298: iconData.icons.a298,
  a299: iconData.icons.a299,
  a300: iconData.icons.a300,
  a301: iconData.icons.a301,
  a302: iconData.icons.a302,
  a303: iconData.icons.a303,
  a304: iconData.icons.a304,
  a305: iconData.icons.a305,
  a306: iconData.icons.a306,
  a307: iconData.icons.a307,
  a308: iconData.icons.a308,
  a309: iconData.icons.a309,
  a310: iconData.icons.a310,
  a311: iconData.icons.a311,
  a312: iconData.icons.a312,
  a313: iconData.icons.a313,
  a314: iconData.icons.a314,
  a315: iconData.icons.a315,
  a316: iconData.icons.a316,
  a317: iconData.icons.a317,
  a318: iconData.icons.a318,
  a319: iconData.icons.a319,
  a320: iconData.icons.a320,
  a321: iconData.icons.a321,
  a322: iconData.icons.a322,
  a323: iconData.icons.a323,
  a324: iconData.icons.a324,
  a325: iconData.icons.a325,
  a326: iconData.icons.a326,
  a327: iconData.icons.a327,
  a328: iconData.icons.a328,
  a329: iconData.icons.a329,
  a330: iconData.icons.a330,
  a331: iconData.icons.a331,
  a332: iconData.icons.a332,
  a333: iconData.icons.a333,
  a334: iconData.icons.a334,
  a335: iconData.icons.a335,
  a336: iconData.icons.a336,
  a337: iconData.icons.a337,
  a338: iconData.icons.a338,
  a339: iconData.icons.a339,
  a340: iconData.icons.a340,
  a341: iconData.icons.a341,
  a342: iconData.icons.a342,
  a343: iconData.icons.a343,
  a344: iconData.icons.a344,
  a345: iconData.icons.a345,
  a346: iconData.icons.a346,
  a347: iconData.icons.a347,
  a348: iconData.icons.a348,
  a349: iconData.icons.a349,
  a350: iconData.icons.a350,
  a351: iconData.icons.a351,
  a352: iconData.icons.a352,
  a353: iconData.icons.a353,
  a354: iconData.icons.a354,
  a355: iconData.icons.a355,
  a356: iconData.icons.a356,
  a357: iconData.icons.a357,
  a358: iconData.icons.a358,
  a359: iconData.icons.a359,
  a360: iconData.icons.a360,
  a361: iconData.icons.a361,
  a362: iconData.icons.a362,
  a363: iconData.icons.a363,
  a364: iconData.icons.a364,
  a365: iconData.icons.a365,
  a366: iconData.icons.a366,
  a367: iconData.icons.a367,
  a368: iconData.icons.a368,
  a369: iconData.icons.a369,
  a370: iconData.icons.a370,
  a371: iconData.icons.a371,
  a372: iconData.icons.a372,
  a373: iconData.icons.a373,
  a374: iconData.icons.a374,
  a375: iconData.icons.a375,
  a376: iconData.icons.a376,
  a377: iconData.icons.a377,
  a378: iconData.icons.a378,
  a379: iconData.icons.a379,
  a380: iconData.icons.a380,
  a381: iconData.icons.a381,
  a382: iconData.icons.a382,
  a383: iconData.icons.a383,
  a384: iconData.icons.a384,
  a385: iconData.icons.a385,
  a386: iconData.icons.a386,
  a387: iconData.icons.a387,
  a388: iconData.icons.a388,
  a389: iconData.icons.a389,
  a390: iconData.icons.a390,
  a391: iconData.icons.a391,
  a392: iconData.icons.a392,
  a393: iconData.icons.a393,
  a394: iconData.icons.a394,
  a395: iconData.icons.a395,
  a396: iconData.icons.a396,
  a397: iconData.icons.a397,
  a398: iconData.icons.a398,
  a399: iconData.icons.a399,
  a400: iconData.icons.a400,
  a401: iconData.icons.a401,
  a402: iconData.icons.a402,
  a403: iconData.icons.a403,
  a404: iconData.icons.a404,
  a405: iconData.icons.a405,
  a406: iconData.icons.a406,
  a407: iconData.icons.a407,
  a408: iconData.icons.a408,
  a409: iconData.icons.a409,
  a410: iconData.icons.a410,
  a411: iconData.icons.a411,
  a412: iconData.icons.a412,
  a413: iconData.icons.a413,
  a414: iconData.icons.a414,
  a415: iconData.icons.a415,
  a416: iconData.icons.a416,
  a417: iconData.icons.a417,
  a418: iconData.icons.a418,
  a419: iconData.icons.a419,
  a420: iconData.icons.a420,
  a421: iconData.icons.a421,
  a422: iconData.icons.a422,
  a423: iconData.icons.a423,
  a424: iconData.icons.a424,
  a425: iconData.icons.a425,
  a426: iconData.icons.a426,
  a427: iconData.icons.a427,
  a428: iconData.icons.a428,
  a429: iconData.icons.a429,
  a430: iconData.icons.a430,
  a431: iconData.icons.a431,
  a432: iconData.icons.a432,
  a433: iconData.icons.a433,
  a434: iconData.icons.a434,
  a435: iconData.icons.a435,
  a436: iconData.icons.a436,
  a437: iconData.icons.a437,
  a438: iconData.icons.a438,
  a439: iconData.icons.a439,
  a440: iconData.icons.a440,
  a441: iconData.icons.a441,
  a442: iconData.icons.a442,
  a443: iconData.icons.a443,
  a444: iconData.icons.a444,
  a445: iconData.icons.a445,
  a446: iconData.icons.a446,
  a447: iconData.icons.a447,
  a448: iconData.icons.a448,
  a449: iconData.icons.a449,
  a450: iconData.icons.a450,
  a451: iconData.icons.a451,
  a452: iconData.icons.a452,
  a453: iconData.icons.a453,
  a454: iconData.icons.a454,
  a455: iconData.icons.a455,
  a456: iconData.icons.a456,
  a457: iconData.icons.a457,
  a458: iconData.icons.a458,
  a459: iconData.icons.a459,
  a460: iconData.icons.a460,
  a461: iconData.icons.a461,
  a462: iconData.icons.a462,
  a463: iconData.icons.a463,
  a464: iconData.icons.a464,
  a465: iconData.icons.a465,
  a466: iconData.icons.a466,
  a467: iconData.icons.a467,
  a468: iconData.icons.a468,
  a469: iconData.icons.a469,
  a470: iconData.icons.a470,
  a471: iconData.icons.a471,
  a472: iconData.icons.a472,
  a473: iconData.icons.a473,
  a474: iconData.icons.a474,
  a475: iconData.icons.a475,
  a476: iconData.icons.a476,
  a477: iconData.icons.a477,
  a478: iconData.icons.a478,
  a479: iconData.icons.a479,
  a480: iconData.icons.a480,
  a481: iconData.icons.a481,
  a482: iconData.icons.a482,
  a483: iconData.icons.a483,
  a484: iconData.icons.a484,
  a485: iconData.icons.a485,
  a486: iconData.icons.a486,
  a487: iconData.icons.a487,
  a488: iconData.icons.a488,
  a489: iconData.icons.a489,
  a490: iconData.icons.a490,
  a491: iconData.icons.a491,
  a492: iconData.icons.a492,
  a493: iconData.icons.a493,
  a494: iconData.icons.a494,
  a495: iconData.icons.a495,
  a496: iconData.icons.a496,
  a497: iconData.icons.a497,
  a498: iconData.icons.a498,
  a499: iconData.icons.a499,
  a500: iconData.icons.a500,
  a501: iconData.icons.a501,
  a502: iconData.icons.a502,
  a503: iconData.icons.a503,
  a504: iconData.icons.a504,
  a505: iconData.icons.a505,
  a506: iconData.icons.a506,
  a507: iconData.icons.a507,
  a508: iconData.icons.a508,
  a509: iconData.icons.a509,
  a510: iconData.icons.a510,
  a511: iconData.icons.a511,
  a512: iconData.icons.a512,
  a513: iconData.icons.a513,
  a514: iconData.icons.a514,
  a515: iconData.icons.a515,
  a516: iconData.icons.a516,
  a517: iconData.icons.a517,
  a518: iconData.icons.a518,
  a519: iconData.icons.a519,
  a520: iconData.icons.a520,
  a521: iconData.icons.a521,
  a522: iconData.icons.a522,
  a523: iconData.icons.a523,
  a524: iconData.icons.a524,
  a525: iconData.icons.a525,
  a526: iconData.icons.a526,
  a527: iconData.icons.a527,
  a528: iconData.icons.a528,
  a529: iconData.icons.a529,
  a530: iconData.icons.a530,
  a531: iconData.icons.a531,
  a532: iconData.icons.a532,
  a533: iconData.icons.a533,
  a534: iconData.icons.a534,
  a535: iconData.icons.a535,
  a536: iconData.icons.a536,
  a537: iconData.icons.a537,
};

const Frame = () => {
  const navigate = useNavigate();

  const handleManageUsers = () => {
    if (!!Object.keys(auth?.currentUser ?? {})?.length && userAuthentication) {
      navigate('/admin-users');
    } else {
    }
  };

  const [uploadedImageTop, setUploadedImageTop] = useState();
  const [uploadedImageMiddle, setUploadedImageMiddle] = useState();
  const [uploadedImageBottom, setUploadedImageBottom] = useState();
  const [uploadedImageTop2, setUploadedImageTop2] = useState();
  const [uploadedImageMiddle2, setUploadedImageMiddle2] = useState();
  const [uploadedImageBottom2, setUploadedImageBottom2] = useState();
  //
  const [uploadedLogo, setUploadedLogo] = useState();
  const [uploadedLogo2, setUploadedLogo2] = useState();

  const [height, setHeight] = useState();
  const [width, setWidth] = useState();

  const [checkedCelebrator, setcheckedCelebrator] = useState(false);
  const [checkedDate, setcheckedDate] = useState(false);
  const [checkedThirdText, setcheckedThirdText] = useState(false);
  const [checkedCelebrator2, setcheckedCelebrator2] = useState(false);
  const [checkedDate2, setcheckedDate2] = useState(false);
  const [checkedThirdText2, setcheckedThirdText2] = useState(false);

  // recoils
  const [SelectedIcon, setSelectedIcon] = useRecoilState(selectedIcon);
  const [SelectedFrame, setSelectedFrame] = useRecoilState(frameBgImage);
  const [stageBgColor, setStageBgColor] = useRecoilState(frameBgColor);
  const [colorOrImage, setColorOrImage] = useRecoilState(bgType);
  const [SelectedIcon2, setSelectedIcon2] = useRecoilState(selectedIcon2);
  const [SelectedFrame2, setSelectedFrame2] = useRecoilState(frameBgImage2);
  const [stageBgColor2, setStageBgColor2] = useRecoilState(frameBgColor2);
  const [colorOrImage2, setColorOrImage2] = useRecoilState(bgType2);

  const [celebratorsText, setCelebratorsText] = useRecoilState(celebratorsNames);
  const [dateText, setDateText] = useRecoilState(date);
  const [thirdTextText, setThirdTextText] = useRecoilState(thirdText);
  const [celebratorsText2, setCelebratorsText2] = useRecoilState(celebratorsNames2);
  const [dateText2, setDateText2] = useRecoilState(date2);
  const [thirdTextText2, setThirdTextText2] = useRecoilState(thirdText2);

  const [celebratorsNamesFontColor, setCelebratorsNamesFontColor] =
    useRecoilState(celebratorsNamesColor);
  const [celebratorsNamesFontFamily, setCelebratorsNamesFontFamily] =
    useRecoilState(celebratorsNamesFont);
  const [celebratorsNamesFontIsBold] = useRecoilState(celebratorsNamesIsBold);
  const [celebratorsNamesFontIsUnderline] = useRecoilState(celebratorsNamesIsUnderline);
  const [celebratorsNamesFontColor2, setCelebratorsNamesFontColor2] =
    useRecoilState(celebratorsNamesColor2);
  const [celebratorsNamesFontFamily2, setCelebratorsNamesFontFamily2] =
    useRecoilState(celebratorsNamesFont2);
  const [celebratorsNamesFontIsBold2] = useRecoilState(celebratorsNamesIsBold2);
  const [celebratorsNamesFontIsUnderline2] = useRecoilState(celebratorsNamesIsUnderline2);

  const [dateFontIsBold] = useRecoilState(dateIsBold);
  const [dateFontIsUnderline] = useRecoilState(dateIsUnderline);
  const [dateFontColor, setDateFontColor] = useRecoilState(dateColor);
  const [dateFontFamily, setDateFontFamily] = useRecoilState(dateFont);
  const [dateFontIsBold2] = useRecoilState(dateIsBold2);
  const [dateFontIsUnderline2] = useRecoilState(dateIsUnderline2);
  const [dateFontColor2, setDateFontColor2] = useRecoilState(dateColor2);
  const [dateFontFamily2, setDateFontFamily2] = useRecoilState(dateFont2);

  const [thirdTextFontIsBold] = useRecoilState(thirdTextIsBold);
  const [thirdTextFontIsUnderline] = useRecoilState(thirdTextIsUnderline);
  const [thirdTextFontColor, setThirdTextFontColor] = useRecoilState(thirdTextColor);
  const [thirdTextFontFamily, setThirdTextFamily] = useRecoilState(thirdTextFont);
  const [thirdTextFontIsBold2] = useRecoilState(thirdTextIsBold2);
  const [thirdTextFontIsUnderline2] = useRecoilState(thirdTextIsUnderline2);
  const [thirdTextFontColor2, setThirdTextFontColor2] = useRecoilState(thirdTextColor2);
  const [thirdTextFontFamily2, setThirdTextFamily2] = useRecoilState(thirdTextFont2);

  const [checkedStrip, setCheckedStrip] = useRecoilState(checkedStripInStore);
  const [userAuthentication, setUserAuthentication] = useRecoilState(userAuth);
  const [profile, setProfile] = useRecoilState(profileInStore);
  //eslint-disable-next-line
  const [numberOfStripsRemain, setNumberOfStripsRemain] = useRecoilState(numberOfStripToUseInStore);

  const toggleCheckedStrip = () => {
    if (checkedStrip === 0) {
      setCheckedStrip(1);
    } else {
      setCheckedStrip(0);
    }
  };

  const handleChangeCelebrator = () => setcheckedCelebrator((prevCheck) => !prevCheck);
  const handleChangeDate = () => setcheckedDate((prevCheck) => !prevCheck);
  const handleChangeThirdText = () => setcheckedThirdText((prevCheck) => !prevCheck);
  const handleChangeCelebrator2 = () => setcheckedCelebrator2((prevCheck) => !prevCheck);
  const handleChangeDate2 = () => setcheckedDate2((prevCheck) => !prevCheck);
  const handleChangeThirdText2 = () => setcheckedThirdText2((prevCheck) => !prevCheck);

  const stageRef = useRef(null);
  // const [frameImg] = useImage(selectedFrame, 'Anonymous');
  const [imageTop] = useImage(uploadedImageTop, 'AnonymousTop');
  const [imageMiddle] = useImage(uploadedImageMiddle, 'AnonymousMiddle');
  const [imageBottom] = useImage(uploadedImageBottom, 'AnonymousBottom');
  const [imageTop2] = useImage(uploadedImageTop2, 'AnonymousTop2');
  const [imageMiddle2] = useImage(uploadedImageMiddle2, 'AnonymousMiddle2');
  const [imageBottom2] = useImage(uploadedImageBottom2, 'AnonymousBottom2');
  //
  const [imageLogo] = useImage(uploadedLogo, 'AnonymousLogo');
  const [imageLogo2] = useImage(uploadedLogo2, 'AnonymousLogo2');

  useEffect(() => {
    // const getProfileDetails = async (localAuthId) => {

    //   const docRef = doc(db, 'users', localAuthId);

    //   const docSnap = await getDoc(docRef);

    //   setProfile((state) => ({
    //     ...state,
    //     doc: docSnap.data(),
    //   }));
    //   setNumberOfStripsRemain(docSnap.data()?.leftStrips);

    //   return docSnap.data();
    // };

    let unsubscribe;
    if (!!Object.keys(auth?.currentUser ?? {})?.length) {
      setUserAuthentication(true);
      /* ========= stream ========= */
      let localIdToReload = profile?.doc?.localId
        ? profile?.doc?.localId
        : auth?.currentUser?.reloadUserInfo?.localId;
      const q = query(doc(db, 'users', localIdToReload));
      unsubscribe = onSnapshot(q, (doc) => {

        if (doc.data()?.localId) {
          setProfile((state) => ({
            ...state,
            doc: doc.data(),
          }));

          if (parseInt(doc.data()?.leftStrips) <= 0 || doc.data()?.leftStrips === '0') {
            alert('מכסת סטריפים הגיעה לסופה יש ליצור קשר עם מנהל המערכת');
            navigate('/');
          } else if (doc.data()?.leftStrips) {
            setNumberOfStripsRemain(parseInt(doc.data()?.leftStrips));
          }

          // if(doc.data()?.doc?.leftStrips){
          //   setStripsRemaining(parseInt(doc.data()?.doc?.leftStrips) - 2);
          // }
        }

        // let newUsers = [];
        // querySnapshot.forEach((doc) => {
        //   newUsers.push({ ...doc.data(), id: doc.id });
        // });
        // setUsers(newUsers);
      });
      /* ========= stream ========= */

      // getProfileDetails(auth?.currentUser?.reloadUserInfo?.localId);
      // setProfile((state) => ({
      // ...auth?.currentUser?.reloadUserInfo,
      // }));
    } else {
      navigate('/');
    }

    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []); //eslint-disable-line



  return (
    <>
      <Helmet>
        <title>Cheers - magnets background</title>
        {/* <meta name='' /> */}
      </Helmet>

      <Container>
        {userAuthentication && (
          <C2>
            <C1>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  backgroundColor: '#666666',
                }}
              >
                <div style={{ width: '60%' }}>
                  <Download
                    stageRef={stageRef}
                    setUploadedImage={!!checkedStrip ? setUploadedImageTop : setUploadedImageTop2}
                    setUploadedImageMiddle={
                      !!checkedStrip ? setUploadedImageMiddle : setUploadedImageMiddle2
                    }
                    setUploadedImageBottom={
                      !!checkedStrip ? setUploadedImageBottom : setUploadedImageBottom2
                    }
                    checkedStrip={checkedStrip}
                    setCheckedStrip={setCheckedStrip}
                  />
                </div>
                <div style={{ width: '40%' }}>
                  <StripsController header={'סטריפים'} />
                </div>
              </div>
              <div
                style={{
                  height: '50px',
                  width: '100%',
                  backgroundColor: '#666666',
                  // margin: '10px 0',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}
              >
                <input
                  type="checkbox"
                  checked={!!checkedStrip}
                  onChange={toggleCheckedStrip}
                  style={{
                    fontSize: '30px',
                    height: '30px',
                    width: '30px',
                  }}
                />
                <input
                  type="checkbox"
                  checked={!checkedStrip}
                  onChange={toggleCheckedStrip}
                  style={{
                    fontSize: '30px',
                    height: '30px',
                    width: '30px',
                  }}
                />
              </div>
              {typeof window !== 'undefined' && (
                <>
                  <CanvasStage
                    stageRef={stageRef}
                    //
                    userName={celebratorsText}
                    guildName={dateText}
                    thirdTextText={thirdTextText}
                    userName2={celebratorsText2}
                    guildName2={dateText2}
                    thirdTextText2={thirdTextText2}
                    //
                    checked={checkedCelebrator}
                    checkedGuild={checkedDate}
                    checkedThirdText={checkedThirdText}
                    checked2={checkedCelebrator2}
                    checkedGuild2={checkedDate2}
                    checkedThirdText2={checkedThirdText2}
                    //
                    fontFamily={celebratorsNamesFontFamily}
                    fontFamilyGuild={dateFontFamily}
                    fontFamilyThirdText={thirdTextFontFamily}
                    fontFamily2={celebratorsNamesFontFamily2}
                    fontFamilyGuild2={dateFontFamily2}
                    fontFamilyThirdText2={thirdTextFontFamily2}
                    //
                    fontColor={celebratorsNamesFontColor}
                    fontColorGuild={dateFontColor}
                    fontColorThirdText={thirdTextFontColor}
                    fontColor2={celebratorsNamesFontColor2}
                    fontColorGuild2={dateFontColor2}
                    fontColorThirdText2={thirdTextFontColor2}
                    //
                    dateTextIsBold={dateFontIsBold}
                    dateTextIsUnderline={dateFontIsUnderline}
                    celebratorTextIsBold={celebratorsNamesFontIsBold}
                    celebratorTextIsUnderline={celebratorsNamesFontIsUnderline}
                    thirdTextIsBold={thirdTextFontIsBold}
                    thirdTextIsUnderline={thirdTextFontIsUnderline}
                    dateTextIsBold2={dateFontIsBold2}
                    dateTextIsUnderline2={dateFontIsUnderline2}
                    celebratorTextIsBold2={celebratorsNamesFontIsBold2}
                    celebratorTextIsUnderline2={celebratorsNamesFontIsUnderline2}
                    thirdTextIsBold2={thirdTextFontIsBold2}
                    thirdTextIsUnderline2={thirdTextFontIsUnderline2}
                    //
                    imageTop={imageTop}
                    imageMiddle={imageMiddle}
                    imageBottom={imageBottom}
                    SelectedIcon={SelectedIcon}
                    imageTop2={imageTop2}
                    imageMiddle2={imageMiddle2}
                    imageBottom2={imageBottom2}
                    SelectedIcon2={SelectedIcon2}
                    //
                    imageLogo={imageLogo}
                    imageLogo2={imageLogo2}
                    //
                    height={height}
                    width={width}
                    stageBgColor={stageBgColor}
                    selectedFrame={SelectedFrame}
                    colorOrImage={colorOrImage}
                    stageBgColor2={stageBgColor2}
                    selectedFrame2={SelectedFrame2}
                    colorOrImage2={colorOrImage2}
                    checkedStrip={checkedStrip}
                  />
                </>
              )}
              <CarouselC>
                <IconsCarousel
                  frames={ICONS}
                  setSelectedFrame={!!checkedStrip ? setSelectedIcon : setSelectedIcon2}
                />
              </CarouselC>
            </C1>

            <C3>
              <Container3>
                <img
                  src={Logo}
                  style={{ height: 150, width: 150 }}
                  alt=""
                  onClick={profile?.doc?.admin ? handleManageUsers : () => {}}
                />
                <Inputs
                  setSelectedFrame={!!checkedStrip ? setSelectedFrame : setSelectedFrame2}
                  //
                  handleChangeCelebrator={
                    !!checkedStrip ? handleChangeCelebrator : handleChangeCelebrator2
                  }
                  handleChangeDate={!!checkedStrip ? handleChangeDate : handleChangeDate2}
                  handleChangeThirdText={
                    !!checkedStrip ? handleChangeThirdText : handleChangeThirdText2
                  }
                  //
                  checkedCelebrator={!!checkedStrip ? checkedCelebrator : checkedCelebrator2}
                  checkedDate={!!checkedStrip ? checkedDate : checkedDate2}
                  //
                  checkedThirdText={!!checkedStrip ? checkedThirdText : checkedThirdText2}
                  setcheckedUCelebrators={
                    !!checkedStrip ? setcheckedCelebrator : setcheckedCelebrator2
                  }
                  //
                  setheckedDate={!!checkedStrip ? setcheckedDate : setcheckedDate2}
                  setcheckedThirdText={!!checkedStrip ? setcheckedThirdText : setcheckedThirdText2}
                  //
                  uploadedImage={uploadedImageTop}
                  uploadedImageMiddle={uploadedImageMiddle}
                  uploadedImageBottom={uploadedImageBottom}
                  setUploadedImage={setUploadedImageTop}
                  setUploadedImageMiddle={setUploadedImageMiddle}
                  setUploadedImageBottom={setUploadedImageBottom}
                  uploadedImage2={uploadedImageTop2}
                  uploadedImageMiddle2={uploadedImageMiddle2}
                  uploadedImageBottom2={uploadedImageBottom2}
                  setUploadedImage2={setUploadedImageTop2}
                  setUploadedImageMiddle2={setUploadedImageMiddle2}
                  setUploadedImageBottom2={setUploadedImageBottom2}
                  //
                  uploadedLogo={uploadedLogo}
                  uploadedLogo2={uploadedLogo2}
                  setUploadedLogo={setUploadedLogo}
                  setUploadedLogo2={setUploadedLogo2}
                  //
                  celebratorsText={!!checkedStrip ? celebratorsText : celebratorsText2}
                  setCelebratorsText={!!checkedStrip ? setCelebratorsText : setCelebratorsText2}
                  //
                  thirdTextText={!!checkedStrip ? thirdTextText : thirdTextText2}
                  setThirdTextText={!!checkedStrip ? setThirdTextText : setThirdTextText2}
                  //
                  dateText={!!checkedStrip ? dateText : dateText2}
                  setDateText={!!checkedStrip ? setDateText : setDateText2}
                  //
                  fontFamily={
                    !!checkedStrip ? celebratorsNamesFontFamily : celebratorsNamesFontFamily2
                  }
                  setFontFamily={
                    !!checkedStrip ? setCelebratorsNamesFontFamily : setCelebratorsNamesFontFamily2
                  }
                  //
                  fontFamilyGuild={!!checkedStrip ? dateFontFamily : dateFontFamily2}
                  setFontFamilyGuild={!!checkedStrip ? setDateFontFamily : setDateFontFamily2}
                  //
                  fontFamilyThirdText={!!checkedStrip ? thirdTextFontFamily : thirdTextFontFamily2}
                  setFontFamilyThirdText={!!checkedStrip ? setThirdTextFamily : setThirdTextFamily2}
                  //
                  fontColor={
                    !!checkedStrip ? celebratorsNamesFontColor : celebratorsNamesFontColor2
                  }
                  setFontColor={
                    !!checkedStrip ? setCelebratorsNamesFontColor : setCelebratorsNamesFontColor2
                  }
                  //
                  fontColorGuild={!!checkedStrip ? dateFontColor : dateFontColor2}
                  setFontColorGuild={!!checkedStrip ? setDateFontColor : setDateFontColor2}
                  //
                  fontColorThirdText={!!checkedStrip ? thirdTextFontColor : thirdTextFontColor2}
                  setFontColorThirdText={
                    !!checkedStrip ? setThirdTextFontColor : setThirdTextFontColor2
                  }
                  //
                  // alignment={alignment}
                  // bgColorGuild={bgColorGuild}
                  // setBgColorGuild={setBgColorGuild}
                  //
                  // handleAlignment={handleAlignment}
                  // align={align}
                  setHeight={setHeight}
                  setWidth={setWidth}
                  setStageBgColor={!!checkedStrip ? setStageBgColor : setStageBgColor2}
                  //
                  colorOrImage={!!checkedStrip ? colorOrImage : colorOrImage2}
                  setColorOrImage={!!checkedStrip ? setColorOrImage : setColorOrImage2}
                />
              </Container3>
            </C3>
          </C2>
        )}
      </Container>
    </>
  );
};

export default Frame;
