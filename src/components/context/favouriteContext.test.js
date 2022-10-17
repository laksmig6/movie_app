// import React from " react";
// import TestRenderer from "react-test-renderer";
// import FavouriteContextProvider, {
//   FavouritesContext,
// } from "./favouritesContext";

// test("Render the component successfully", () => {
//   const value = {
//     favourites: [{ Post: "movie123" }],
//     setFavourites: () => {},
//     AddFavouriteMovies: () => {},
//     RemoveFavouriteMovie: () => {},
//   };
//   const element = new TestRenderer.create(
//     (
//       <FavouritesContext.Provider value={value}>
//         <div>{value.favourites.Post}</div>
//       </FavouritesContext.Provider>
//     )
//   );

//   const titleText = element.getByText("movie123");
//   expect(titleText).toBeInTheDocument();
// });
