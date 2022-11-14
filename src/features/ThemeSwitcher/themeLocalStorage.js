export const setThemeInStorage = darkMode =>
  localStorage.setItem("darkMode", JSON.stringify(darkMode));

export const getThemeFromStorage = () =>
  JSON.parse(localStorage.getItem("darkMode"));