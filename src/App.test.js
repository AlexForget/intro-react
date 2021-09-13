import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

test("render an h1", () => {
    const { getByText } = render(<App />);
    const h1 = getByText(/React testing library/);
    expect(h1).toHaveTextContent("React testing library");
});