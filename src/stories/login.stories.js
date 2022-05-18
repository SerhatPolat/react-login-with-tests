import Login from "../components/login";

export default {
  title: "Login",
  component: Login,
  parameters: {
    docs: {
      description: {
        component:
          "This is a basic login & logout system. User must to give a name input for logging in (it's not working with empty input you need to type something). After name input and clicked to login button, app gives '... logged in!' message and also renders log out button. If you click to log out button app logs out and goes back to the login section.",
      },
    },
  },
};

export const Default = () => <Login />;
