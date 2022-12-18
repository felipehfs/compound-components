import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SpinButton } from "./SpinButton";
import { useArgs } from "@storybook/client-api";

export default {
  component: SpinButton.Container,
  title: "Components/SpinButton",
} as ComponentMeta<typeof SpinButton.Container>;

const Template: ComponentStory<typeof SpinButton.Container> = (args) => {
  const [_, updateArgs] = useArgs();
  return (
    <SpinButton.Container {...args} setValue={(value) => updateArgs({ value })}>
      <SpinButton.IncrementButton>👍</SpinButton.IncrementButton>
      <SpinButton.Label />
      <SpinButton.DecrementButton>👎</SpinButton.DecrementButton>
    </SpinButton.Container>
  );
};
export const Default = Template.bind({});
Default.args = {
  value: 0,
};
