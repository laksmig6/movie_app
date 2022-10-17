import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./searchBar";

describe("SearchBar Input value", () => {
  it("updates on change", () => {
    const setSearch = jest.fn(() => {});

    const { queryByPlaceholderText } = render(
      <SearchBar setSearch={setSearch} />
    );

    const searchInput = queryByPlaceholderText("Type to search");

    fireEvent.change(searchInput, { target: { value: "star" } });

    expect(searchInput.value).toBe("star");
  });
});
