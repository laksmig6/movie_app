import React, { useState, useEffect } from "react";

const SearchBar = (props) => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="col col-sm-4">
      <input
        disabled={!isOnline}
        className="form-control"
        type="text"
        data-testid="search-text"
        value={props.search}
        placeholder={isOnline ? "Type to search" : "Reconnecting..."}
        onChange={(event) => {
          props.setSearch(event.target.value);
        }}
      />
    </div>
  );
};
export default SearchBar;
