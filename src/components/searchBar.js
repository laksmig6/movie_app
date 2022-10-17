import React from "react";

const SearchBar = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        className="form-control"
        type="text"
        data-testid="search-text"
        value={props.search}
        placeholder="Type to search"
        onChange={(event) => {
          props.setSearch(event.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
