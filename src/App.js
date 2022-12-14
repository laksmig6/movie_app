import "./App.css";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Favourites from "./pages/Favourites";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import FavouriteContextProvider from "./components/context/favouritesContext";

const App = () => {
  return (
    <>
      <Header />
      <FavouriteContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/details" element={<Details />}>
            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </FavouriteContextProvider>
    </>
  );
};

export default App;
