import { fireEvent, render, screen } from "@testing-library/react";
import { Tab } from "./Tab";

test("should render a tab panel properly", async () => {
  const onChange = jest.fn();
  render(
    <Tab.Container index={0} onChange={onChange}>
      <Tab.Headers>
        <Tab.HeaderItem>Musica</Tab.HeaderItem>
        <Tab.HeaderItem>Noticias</Tab.HeaderItem>
      </Tab.Headers>
      <Tab.Panels>
        <Tab.PanelItem>lorem ipsum 1</Tab.PanelItem>
        <Tab.PanelItem>lorem ipsum 2</Tab.PanelItem>
      </Tab.Panels>
    </Tab.Container>
  );

  expect(screen.getByText("lorem ipsum 1")).toBeVisible();
  expect(screen.queryByText("lorem ipsum 2")).toBeFalsy();
});

test("should update a panel properly", async () => {
  const onChange = jest.fn();
  render(
    <Tab.Container index={0} onChange={onChange}>
      <Tab.Headers>
        <Tab.HeaderItem>Musica</Tab.HeaderItem>
        <Tab.HeaderItem>Noticias</Tab.HeaderItem>
      </Tab.Headers>
      <Tab.Panels>
        <Tab.PanelItem>lorem ipsum 1</Tab.PanelItem>
        <Tab.PanelItem>lorem ipsum 2</Tab.PanelItem>
      </Tab.Panels>
    </Tab.Container>
  );

  fireEvent.click(screen.getByText("Noticias"));
  expect(onChange).toBeCalled();
});
