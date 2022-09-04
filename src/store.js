import React, { createContext, useState } from "react";

export const StoreContext = createContext();

const StoreContextProvider = ({ children }) => {
  const [searchItem, setSearchItem] = useState();

  return (
    <StoreContext.Provider
      value={{
        searchItem,
        setSearchItem,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
