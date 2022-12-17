import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tab } from "./Tab";
import { useArgs } from "@storybook/client-api";
import { Badge } from "../Badge/Badge";

export default {
  title: "Components/Tab",
  component: Tab.Container,
} as ComponentMeta<typeof Tab.Container>;

const Template: ComponentStory<typeof Tab.Container> = (args) => {
  const [_, updateArgs] = useArgs();

  return (
    <Tab.Container {...args} onChange={(index) => updateArgs({ index })}>
      <Tab.Headers>
        <Tab.HeaderItem disabled>Ao vivo</Tab.HeaderItem>
        <Tab.HeaderItem>
          Entretenimento <Badge variant="default">5</Badge>
        </Tab.HeaderItem>
        <Tab.HeaderItem>Esportes</Tab.HeaderItem>
        <Tab.HeaderItem>Musica</Tab.HeaderItem>
        <Tab.HeaderItem>Noticias</Tab.HeaderItem>
      </Tab.Headers>
      <Tab.Panels>
        <Tab.PanelItem>lorem ipsum</Tab.PanelItem>
        <Tab.PanelItem>lorem ipsum 2</Tab.PanelItem>
        <Tab.PanelItem>lorem ipsum 3</Tab.PanelItem>
        <Tab.PanelItem>lorem ipsum 4</Tab.PanelItem>
        <Tab.PanelItem>lorem ipsum 5</Tab.PanelItem>
      </Tab.Panels>
    </Tab.Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  index: 1,
};
