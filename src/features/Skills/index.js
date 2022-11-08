import { ListSection } from "../../common/ListSection";
import { Icon, Item } from "../../common/ListSection/styled";
import hammer from "./hammer.png";
import { skillset } from "./skillset";

export const Skills = () => (
  <ListSection
  title={<>My skillset includes <Icon src={hammer} alt="" /></>}
    items={
      skillset.map(skill => (
        <Item key={skill.id}>
          {skill.content}
        </Item>
      ))
    }
  />
)