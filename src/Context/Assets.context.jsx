import React, { createContext, useState } from "react";

export const AssetsContext = createContext();

export const AssetsProvider = ({ children }) => {
  const [selectedAsset, setSelectedAsset] = useState();

  const value = { setSelectedAsset, selectedAsset };

  return (
    <AssetsContext.Provider value={value}>{children}</AssetsContext.Provider>
  );
};
