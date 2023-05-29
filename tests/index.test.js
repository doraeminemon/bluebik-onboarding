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
    expect(screen.getByTestId("submit-button")).toBeInTheDocument();
    expect(screen.getByTestId("submit-button")).toBeDisabled();
  });

  it("enabled the button upon filling the form", () => {
    render(<Home />);
    const fname = screen.getByLabelText('First name')
    fireEvent.change(fname, { target: { value: 'Son' } })
    const lname = screen.getByLabelText('Last name')
    fireEvent.change(lname, { target: { value: 'Son' } })
    const idno = screen.getByTestId("idno")
    fireEvent.change(idno, { target: { value: '123456' } })
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeEnabled();
    fireEvent.click(submitButton)
    const email = screen.getByLabelText('Email')
    fireEvent.change(email, { target: { value: 'abc@gmail.com' } })
    const phoneNumber = screen.getByLabelText('Phone number')
    fireEvent.change(phoneNumber, { target: { value: '123456' } })
    const dateOfBirth = screen.getByLabelText('Date of birth')
    fireEvent.change(dateOfBirth, { target: { value: '123456' } })
    // expect(submitButton).toBeEnabled()
  })
});