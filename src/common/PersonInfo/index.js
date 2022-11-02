import { Wrapper, Image, ThisIs, Name, Paragraph, Button, Icon } from "./styled";
import personPhoto from "./personPhoto.jpg";

export const PersonInfo = () => (
  <Wrapper>
    <Image src={personPhoto} alt="Radosław Jeleń" />
    <div>
      <ThisIs>This is</ThisIs>
      <Name>Radosław Jeleń</Name>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut dolor nibh. Nullam finibus enim dui, sit amet sollicitudin ex faucibus quis.
      </Paragraph>
      <Button href="#hire-me">
        <Icon />
        Hire me
      </Button>
    </div>
  </Wrapper>
);