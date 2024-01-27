import { render } from "@testing-library/react";

import App from "./App";

const originalViteEnv = import.meta.env.VITE_ENV;

beforeEach(() => {
  import.meta.env.VITE_ENV = originalViteEnv;
});

describe("App", () => {
  it("should render", () => {
    const component = render(<App />);
    expect(component).toMatchSnapshot();
  });

  it("should render the production tag", () => {
    const { queryByText } = render(<App />);
    expect(
      queryByText("THIS WILL BE APPEAR ONLY IN PROD MODE")
    ).not.toBeInTheDocument();
  });
});
