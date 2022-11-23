import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromStorage, setThemeInStorage } from "./themeLocalStorage";

const themeSwitcherSlice = createSlice({
  name: "themeSwitcher",
  initialState: {
    darkMode: getThemeFromStorage(),
  },
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;
      setThemeInStorage(state.darkMode);
    }
  }
});

export const { toggleTheme } = themeSwitcherSlice.actions;

const selectThemeSwitcherSlice = state => state.themeSwitcher;
export const selectDarkMode = state => selectThemeSwitcherSlice(state).darkMode;

export default themeSwitcherSlice.reducer;