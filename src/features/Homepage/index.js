import { ThemeSwitcher } from "../../features/ThemeSwitcher";
import { Footer } from "./../../common/Footer";
import { PersonInfo } from "./../../common/PersonInfo";
import { Portfolio } from "./../Portfolio";
import { Skills } from "./../Skills";
import { ToLearn } from "./../ToLearn";


const Homepage = () => (
  <>
    <ThemeSwitcher />
    <PersonInfo />
    <Skills />
    <ToLearn />
    <Portfolio />
    <Footer />
  </>
);

export default Homepage;