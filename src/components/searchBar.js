import React from "react";
import useOnlineStatus from "./useOnlineStatus";

const SearchBar = (props) => {
  const isOnline = useOnlineStatus();

  return (
    <div className="col col-sm-4">
      <input
        disabled={!isOnline}
        className="form-control"
        type="text"
        data-testid="search-text"
        value={isOnline ? props.search : "Reconnecting..."}
        placeholder={isOnline ? "Type to search" : "Reconnecting..."}
        onChange={(event) => {
          props.setSearch(event.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
