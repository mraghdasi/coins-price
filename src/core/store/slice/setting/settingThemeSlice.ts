import { createSlice } from '@reduxjs/toolkit';
import { isBrowser } from 'core/utils/default';

const initialState = { theme: isBrowser() ? localStorage.getItem('theme') || 'light' : '' };

export const settingThemeSlice = createSlice({
  name: 'settingTheme',
  initialState: initialState,
  reducers: {
    setSettingSwitchTheme: (state) => {
      const newTheme = state.theme === 'dark' ? 'light' : 'dark';
      isBrowser() && localStorage.setItem('theme', newTheme);

      state.theme = newTheme;
    },
  },
});

export const { setSettingSwitchTheme } = settingThemeSlice.actions;
export default settingThemeSlice.reducer;
