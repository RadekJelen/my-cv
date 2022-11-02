import { Icons, LetsTalk, Email, Link, Paragraph, Wrapper } from "./styled";
import { ReactComponent as GithubLogo } from "./logos/Github_black.svg";
import { ReactComponent as LinkedInLogo } from "./logos/LinkedIN_black.svg";
import { ReactComponent as FacebookLogo } from "./logos/Facebook_black.svg";

export const Footer = () => (
  <Wrapper id="hire-me">
    <LetsTalk>Let's talk!</LetsTalk>
    <Email>radek.jelen19@gmail.com</Email>
    <Paragraph>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae quaerat, repudiandae magnam quo quia repellendus enim sed saepe consequatur, repellat eligendi nostrum illum aliquam nam ipsum nesciunt minima incidunt architecto!
    </Paragraph>
    <Icons>
      <Link href="https://github.com/RadekJelen" target="_blank" rel="noreferrer noopener">
        <GithubLogo />
      </Link>
      <Link href="https://www.linkedin.com/in/radosław-jeleń-904811255" target="_blank" rel="noreferrer noopener">
        <LinkedInLogo />
      </Link>
      <Link href="https://www.facebook.com/profile.php?id=100010692286896" target="_blank" rel="noreferrer noopener">
        <FacebookLogo />
      </Link>
    </Icons>
  </Wrapper>
)