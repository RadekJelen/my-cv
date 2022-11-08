import { createSlice } from "@reduxjs/toolkit";

const themeSwitcherSlice = createSlice({
  name: "themeSwitcher",
  initialState: {
    darkTheme: false,
  },
  reducers: {
    toggleTheme: state => {
      state.darkTheme = !state.darkTheme;
    }
  }
});

export const { toggleTheme } = themeSwitcherSlice.actions;

const selectThemeSwitcherSlice = state => state.themeSwitcher;
export const selectDarkTheme = state => selectThemeSwitcherSlice(state).darkTheme;

export default themeSwitcherSlice.reducer;