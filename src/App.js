import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/header";
import Favourites from "./pages/Favourites";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FavouriteContextProvider from "./components/context/favouritesContext";
import SelectedContextProvider from "./components/context/selectedContext";

const App = () => {
  return (
    <>
      <Header />
      <SelectedContextProvider>
        <FavouriteContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/details/id=1" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </FavouriteContextProvider>
      </SelectedContextProvider>
    </>
  );
};

export default App;
