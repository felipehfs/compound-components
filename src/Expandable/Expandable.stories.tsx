import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Expandable } from "./Expandable";

export default {
  component: Expandable.Container,
  title: "Components/Expandable",
} as ComponentMeta<typeof Expandable.Container>;

const Template: ComponentStory<typeof Expandable.Container> = (args) => (
  <Expandable.Container>
    <Expandable.Content>{args.children}</Expandable.Content>
    <Expandable.Disclousure />
  </Expandable.Container>
);

export const Default = Template.bind({});
Default.args = {
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In consequuntur
      eveniet repellendus exercitationem ad voluptate labore voluptatum earum
      placeat quam, facilis numquam vel sunt iste rerum laboriosam nulla
      inventore maxime?
    </p>
  ),
};
