import { PersonInfo } from "./common/PersonInfo";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
import { Portfolio } from "./features/Portfolio";

function App() {
  return (
    <>
      <PersonInfo />
      <Skills />
      <ToLearn />
      <Portfolio />
    </>
  );
}

export default App;
