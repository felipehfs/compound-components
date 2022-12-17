import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import { Select, OptionItem } from "./Select";
import { OptGroup } from "./OptGroup";

export default {
  component: Select,
  title: "Components/Select",
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <Select {...args} onChange={(value) => updateArgs({ value })}>
      <OptionItem label="Option1" value="1">
        Option1
      </OptionItem>
      <OptionItem label="Option2" value="2">
        Option2
      </OptionItem>
    </Select>
  );
};

export const Default = Template.bind({});
Default.args = {
  placeholder: "Selecione um valor",
  value: null,
};

export const GroupBy: ComponentStory<typeof Select> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <Select {...args} onChange={(value) => updateArgs({ value: value })}>
      <OptionItem label="Option1" value="1">
        Option1
      </OptionItem>
      <OptionItem label="Option2" value="2">
        Option2
      </OptionItem>
      <OptionItem label="Option3" value="3">
        Option3
      </OptionItem>
      <OptGroup label="Special cases">
        <OptionItem label="Option4" value="4">
          Option4
        </OptionItem>
      </OptGroup>
    </Select>
  );
};

GroupBy.args = {
  placeholder: "Selecione um valor",
  value: null,
};
