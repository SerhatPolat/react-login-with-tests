import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./login";

describe("Login", () => {
  test("user logs in and logged in message is displayed", async () => {
    const { getByText, getByLabelText, getByRole, findByText } = render(
      <Login />
    );
    expect(getByText("Name:")).toBeInTheDocument();
    const nameInput = getByLabelText("Name:");
    userEvent.type(nameInput, "Serhat");
    expect(nameInput).toHaveValue("Serhat");
    const loginBtn = getByRole("button", { name: "Login" });
    userEvent.click(loginBtn);
    expect(await findByText("Serhat logged in!")).toBeInTheDocument();
  });
});
