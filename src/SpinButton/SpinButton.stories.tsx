import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SpinButton } from "./SpinButton";

export default {
  component: SpinButton.Container,
  title: "Components/SpinButton",
} as ComponentMeta<typeof SpinButton.Container>;

const Template: ComponentStory<typeof SpinButton.Container> = (args) => (
  <SpinButton.Container defaultValue={0}>
    <SpinButton.IncrementButton>👍</SpinButton.IncrementButton>
    <SpinButton.Label />
    <SpinButton.DecrementButton>👎</SpinButton.DecrementButton>
  </SpinButton.Container>
);

export const Default = Template.bind({});
