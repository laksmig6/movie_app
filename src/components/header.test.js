import { render, screen } from "@testing-library/react";
import Header from "../components/header";

describe("Navigation Link", () => {
  it("favourites should navigate to favourites page", () => {
    const header = render(<Header />);

    console.log("***", header.debug());
    expect(screen.getByRole("link")).toHaveAttribute("to", "/favourites");
  });
  // it('home should navigate back to home', ()=>{

  // })
});
