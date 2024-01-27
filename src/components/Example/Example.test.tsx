import { render } from "@testing-library/react";

import { Example } from ".";

describe("Example", () => {
  it("should render", () => {
    const component = render(<Example />);
    expect(component).toMatchSnapshot();
  });
});
