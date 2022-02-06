import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./login";

describe("Login & Log out", () => {
  test("user logs in and logged in message is displayed + user logs out and reopens the login form", async () => {
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

    const logoutBtn = getByRole("button", { name: "Log out" });
    userEvent.click(logoutBtn);
    expect(getByText("Welcome!")).toBeInTheDocument();
  });
});
