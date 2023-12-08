import { composeStories } from "@storybook/react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import * as stories from "./page.stories";

const { Default } = composeStories(stories);

describe("page", () => {
  test("レンダリングすること", () => {
    render(<Default />);
    expect(screen.getByText("web")).toBeInTheDocument();
  });
});
