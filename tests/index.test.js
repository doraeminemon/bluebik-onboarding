import Home from "../src/app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("basic form", () => {
  it("renders a basic form", () => {
    render(<Home />);
    // check if all components are rendered
    expect(screen.getByTestId("first")).toBeInTheDocument();
    expect(screen.getByTestId("last")).toBeInTheDocument();
    expect(screen.getByTestId("idno")).toBeInTheDocument();
  });
});