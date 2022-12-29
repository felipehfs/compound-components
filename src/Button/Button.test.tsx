import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("should be possible click in button", () => {
  const action = jest.fn();
  render(
    <Button onClick={action} variant="primary">
      {" "}
      Salvar
    </Button>
  );

  fireEvent.click(screen.getByText("Salvar"));
  expect(action).toBeCalled();
});
