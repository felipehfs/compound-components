import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Badge } from "./Badge";

export default {
  title: "Components/badge",
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = ({ children, ...rest }) => {
  return <Badge {...rest}>{children}</Badge>;
};

export const Default = Template.bind({});

Default.args = {
  children: 20,
  variant: "default",
};
