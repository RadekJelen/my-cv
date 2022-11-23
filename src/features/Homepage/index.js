import { Container } from "./../../common/Container";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { Footer } from "./../../features/Homepage/Footer";
import { PersonInfo } from "./../../features/Homepage/PersonInfo";
import { Portfolio } from "./../Homepage/Portfolio";
import { Skills } from "./Skills";
import { ToLearn } from "./../Homepage/ToLearn";

const Homepage = () => (
  <Container>
    <ThemeSwitcher />
    <PersonInfo />
    <Skills />
    <ToLearn />
    <Portfolio />
    <Footer />
  </Container>
);

export default Homepage;