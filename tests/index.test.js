import Home from "../src/app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
  it("renders a calculator", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("first")).toBeInTheDocument();
    expect(screen.getByTestId("last")).toBeInTheDocument();
    expect(screen.getByTestId("idno")).toBeInTheDocument();
  });
});