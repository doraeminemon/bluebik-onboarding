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
    // first page of the form
    const fname = screen.getByLabelText('First name')
    fireEvent.change(fname, { target: { value: 'Son' } })
    const lname = screen.getByLabelText('Last name')
    fireEvent.change(lname, { target: { value: 'Do' } })
    const idno = screen.getByTestId("idno")
    fireEvent.change(idno, { target: { value: '123456' } })
    const submitButton = screen.getByTestId('submit-button')
    expect(submitButton).toBeEnabled();
    fireEvent.click(submitButton)
    // second page of the form
    const email = screen.getByLabelText('Email')
    fireEvent.change(email, { target: { value: 'abc@gmail.com' } })
    const phoneNumber = screen.getByLabelText('Phone number')
    fireEvent.change(phoneNumber, { target: { value: '123456' } })
    const dateOfBirth = screen.getByLabelText('Date of birth')
    fireEvent.change(dateOfBirth, { target: { value: '2020-03-11' } })
    expect(submitButton).toBeEnabled()
    fireEvent.click(submitButton)
    // third page of the form
    const paymentCheckbox = screen.getByLabelText('Payment')
    fireEvent.click(paymentCheckbox)
    expect(submitButton).toBeEnabled()
    fireEvent.click(submitButton)
    // finish
    expect(screen.getByTestId('code'))
  })
});