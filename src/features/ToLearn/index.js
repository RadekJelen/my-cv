import { ListSection } from "../../common/ListSection";
import { Icon, Item } from "../../common/ListSection/styled";
import rocket from "./rocket.png";
import { terms } from "./terms";

export const ToLearn = () => (
  <ListSection
  title={<>What I want to learn next <Icon src={rocket} alt="" /></>}
    items={
      terms.map(term => (
        <Item key={term.id}>
          {term.content}
        </Item>
      ))
    }
  />
)