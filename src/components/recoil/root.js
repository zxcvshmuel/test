import { atom, selector } from 'recoil'; //eslint-disable-line

export const checkedStripInStore = atom({
  key: 'checkedStrip',
  default: 0,
});

export const auth = atom({
  key: 'auth',
  default: false,
});

export const profile = atom({
  key: 'profile',
  default: {},
});

export const ecoMode = atom({
  key: 'ecoMode',
  default: true,
});

export const numberOfStripToUseInStore = atom({ key: 'numberOfStripToUseInStore', default: 1 });
