import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Select, OptionItem } from "./Select";

export default {
  component: Select,
  title: "Components/Select",
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select {...args}>
    <OptionItem label="Option1" value="1">
      Option1
    </OptionItem>
    <OptionItem label="Option2" value="2">
      Option2
    </OptionItem>
  </Select>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Selecione um valor",
};
