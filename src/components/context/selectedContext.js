import { useState, createContext } from "react";

export const SelectedContext = createContext();

function SelectedContextProvider(props) {
  const [selectedMovie, setSelectedMovie] = useState({});

  const selected = { selectedMovie, setSelectedMovie };

  return (
    <SelectedContext.Provider value={selected}>
      {props.children}
    </SelectedContext.Provider>
  );
}

export default SelectedContextProvider;
