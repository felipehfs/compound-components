import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useArgs } from "@storybook/client-api";
import { Dialog } from "./Dialog";

export default {
  title: "Components/Dialog",
  component: Dialog.Container,
} as ComponentMeta<typeof Dialog.Container>;

const Template: ComponentStory<typeof Dialog.Container> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <Dialog.Container {...args} onClose={() => updateArgs({ open: false })}>
      <Dialog.Header title="Alerta" />
      <Dialog.Content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eaque
        quibusdam maiores ratione inventore soluta quisquam quo deleniti
        corporis recusandae velit commodi cumque quasi perspiciatis sunt eos
        culpa, voluptate cupiditate.
      </Dialog.Content>
      <Dialog.Footer />
    </Dialog.Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: true,
};
