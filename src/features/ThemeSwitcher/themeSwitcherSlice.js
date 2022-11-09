import { createSlice } from "@reduxjs/toolkit";

const themeSwitcherSlice = createSlice({
  name: "themeSwitcher",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleTheme: state => {
      state.darkMode = !state.darkMode;
    }
  }
});

export const { toggleTheme } = themeSwitcherSlice.actions;

const selectThemeSwitcherSlice = state => state.themeSwitcher;
export const selectDarkMode = state => selectThemeSwitcherSlice(state).darkMode;

export default themeSwitcherSlice.reducer;