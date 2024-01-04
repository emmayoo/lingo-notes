import { render, screen } from "@testing-library/react";
import Home from "./Home.tsx";

describe("<Home />", () => {
  it("data fetching", () => {
    render(<Home />);
    const initialState = screen.getByText("Loading");

    expect(initialState).toBeInTheDocument();
  });
});
