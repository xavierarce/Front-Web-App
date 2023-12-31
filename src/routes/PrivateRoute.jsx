// PrivateRoute.js
import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { AuthContext } from "../Context/Login.context";

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        {...rest}
        element={currentUser ? <Element /> : <Navigate to="/" replace />}
      />
    </Routes>
  );
};

export default PrivateRoute;
