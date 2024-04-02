import { createContext, useState } from "react";

export const BookmarksContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function BookmarksContextProvider({ children }) {
  const [bookmarkIds, setBookmarkIds] = useState([]);

  function addFavorite(id) {
    setBookmarkIds((currentBookmarkIds) => {
      return [...currentBookmarkIds, id];
    });
  }

  function removeFavorite(id) {
    setBookmarkIds((currentBookmarkIds) => {
      return currentBookmarkIds.filter((bookId) => bookId != id);
    });
  }

  const value = {
    ids: bookmarkIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
}


export default BookmarksContextProvider;