import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("badge", () => {
  test("should render a badge", () => {
    render(<Badge variant="default">10</Badge>);

    expect(screen.getByText(10)).toBeInTheDocument();
  });
});
