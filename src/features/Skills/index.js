import { ListSection } from "../../common/ListSection";
import { Item } from "../../common/ListSection/styled";
import { skillset } from "./skillset";

export const Skills = () => (
  <ListSection
    title={<>My skillset includes</>}
    items={
      skillset.map(skill => (
        <Item key={skill.id}>
          {skill.content}
        </Item>
      ))
    }
  />
)