import { Wrapper, Image, ThisIs, Name, Paragraph, Button, Icon } from "./styled";
import personPhoto from "./personPhoto.jpg";

export const PersonInfo = () => (
  <Wrapper>
    <Image src={personPhoto} alt="Radosław Jeleń" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Radosław Jeleń</Name>
      <Paragraph>
      Hi, I am a beginner Frontend Developer using React. I am currently looking for new job opportunities, so if you like my projects, contact me 😉
      </Paragraph>
      <Button href="#hire-me">
        <Icon />
        Hire me
      </Button>
    </div>
  </Wrapper>
);