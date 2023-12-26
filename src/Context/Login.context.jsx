import React, { createContext, useState } from 'react';

// Step 1: Create the context
const MyContext = createContext();

// Step 2: Create the provider component
export const MyContextProvider = ({ children }) => {
  const [state, setState] = useState(/* initial state */);

  const updateState = (newState) => {
    setState(newState);
  };

  // Provide the context value to the children
  return (
    <MyContext.Provider value={{ state, updateState }}>
      {children}
    </MyContext.Provider>
  );
};