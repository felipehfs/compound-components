import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";

export default {
  component: Card.Container,
  title: "Components/Card",
} as ComponentMeta<typeof Card.Container>;

const Template: ComponentStory<typeof Card.Container> = () => {
  return (
    <Card.Container>
      <Card.Image
        src="https://images.unsplash.com/photo-1670985099560-aa91caf54f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
        alt="Photo Card"
      />
      <Card.Content>
        <h3>Férias legais</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          odio in esse mollitia, laboriosam facere nemo quia amet eveniet
          repudiandae suscipit nisi odit repellendus culpa porro molestiae.
          Dolorum, accusantium repellat?
        </p>
      </Card.Content>
    </Card.Container>
  );
};

export const Default = Template.bind({});
