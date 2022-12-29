import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { OptionItem, Select } from "./Select";

test("should be possible select a value", async () => {
  const placeholder = "Selecione um valor";
  const onChange = jest.fn();
  render(
    <Select onChange={onChange} placeholder={placeholder} value={null}>
      <OptionItem label="Option1" value="1">
        Opção 1
      </OptionItem>
    </Select>
  );

  fireEvent.click(screen.getByText(placeholder));
  const option = await screen.findByText("Opção 1", { exact: false });
  fireEvent.click(option);
  expect(onChange).toBeCalled();
});
