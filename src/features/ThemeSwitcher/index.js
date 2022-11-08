import { ReactComponent as LightSun } from "./sun_light_theme.svg";
import { Icon, Switcher, SwitcherArea, SwitcherText } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { selectDarkTheme, toggleTheme } from "./themeSwitcherSlice";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector(selectDarkTheme);

  return (
    <SwitcherArea onClick={() => dispatch(toggleTheme())}>
      <SwitcherText>Dark mode {darkTheme ? "on" : "off"}</SwitcherText>
      <Switcher darkTheme={darkTheme}>
        <Icon>
          <LightSun />
        </Icon>
      </Switcher>
    </SwitcherArea>
  )
}