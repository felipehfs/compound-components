import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ["primary", "secundary"],
      control: { type: "inline-radio" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  children: "Confirmar",
  variant: "primary",
};
