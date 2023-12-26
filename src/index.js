import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home/Home";
import AssetList from "./routes/AssetList/AssetList";
import AssetPage from "./routes/AssetPage/AssetPage";
import EresPropietario from "./routes/EresPropietario/EresPropietario";
import { AuthProvider } from "./Context/Login.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "bienes", element: <AssetList /> },
      { path: "bienes/:id", element: <AssetPage /> },
      { path: "eres-propietario", element: <EresPropietario /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
