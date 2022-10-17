import { render, screen } from "@testing-library/react";
import MovieTitle from "./movieTitle";

test("renders learn react link", () => {
  const app = render(<MovieTitle heading="Title" />);
  const title = screen.getByText("Title");
  expect(title).toBeInTheDocument();
});
