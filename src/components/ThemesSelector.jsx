import React, { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import {
  themesList as themesListInStore,
  selectedTheme as selectedThemeInStore,
} from './recoil/themes';

// components
import ThemeItem from './ThemeItem';

function ThemesSelector() {
  const [themesList, setThemesList] = useRecoilState(themesListInStore);
  const [selectedTheme] = useRecoilState(selectedThemeInStore); //eslint-disable-line

  useEffect(() => {
    if (!Array.isArray(themesList)) {
      let localThemes = localStorage.getItem('themesList');
      if (localThemes) {
        localThemes = JSON.parse(localThemes);
        setThemesList([...localThemes]);
      } else {
        setThemesList([]);
      }
    }
  }, []); //eslint-disable-line

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        maxHeight: '100px',
        overflowY: 'auto',
      }}
    >
      {!!themesList?.length ? (
        themesList.map((theme) => (
          <ThemeItem key={theme.name} name={theme?.name} side={theme?.side} />
        ))
      ) : (
        <div
          style={{
            fontSize: '26px',
            color: 'red',
          }}
        >
          לא נמצאו עיצובים
        </div>
      )}
    </div>
  );
}

export default ThemesSelector;
