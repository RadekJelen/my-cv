import { useSelector } from "react-redux";
import { selectDarkMode } from "../../ThemeSwitcher/themeSwitcherSlice";
import { ButtonLink } from "../../../../common/ButtonLink/styled";
import { ReactComponent as DangerDark } from "./danger_lightMode.svg";
import { ReactComponent as DangerLight } from "./danger_darkMode.svg";
import { Text, Title, Wrapper } from "./styled";

export const Error = () => {
  const darkMode = useSelector(selectDarkMode);

  return (
    <Wrapper>
      {darkMode ? <DangerLight /> : <DangerDark />}
      <Title>Ooops! Something went wrong...</Title>
      <Text>
        Sorry, failed to load Github projects.<br />You can check them directly on Github.
      </Text>
      <ButtonLink
        href="https://github.com/RadekJelen"
        title="https://github.com/RadekJelen"
        target="_blank"
        rel="noreferrer noopener"
      >
        Go to Github
      </ButtonLink>
    </Wrapper>
  )
};