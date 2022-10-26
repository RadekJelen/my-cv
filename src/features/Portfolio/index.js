import { Paragraph, Title, Wrapper } from "./styled";
import { ReactComponent as Logo } from "./githubLogo.svg";
import { Tiles } from "./Tiles";

export const Portfolio = () => (
  <Wrapper>
    <Logo />
    <Title>Portfolio</Title>
    <Paragraph>My recent projects</Paragraph>
    <Tiles />
  </Wrapper>
)