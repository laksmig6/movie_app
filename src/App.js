import "./App.css";
import { Navigate, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Favourites from "./pages/Favourites";
import Details from "./pages/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import LoginForm from "./components/loginForm";
import FavouriteContextProvider from "./components/context/favouritesContext";

const App = () => {
  return (
    <>
      <Header />
      <FavouriteContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/details/" element={<Navigate to="/" />} />
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
