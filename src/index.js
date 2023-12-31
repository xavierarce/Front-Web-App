import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import Home from "./routes/home/Home";
import AssetListPage from "./routes/AssetListPage/AssetListPage";
import AssetPage from "./routes/AssetPage/AssetPage";
import EresPropietario from "./routes/EresPropietario/EresPropietario";
import { AuthContext, AuthProvider } from "./Context/Login.context";
import ArticulosPage from "./routes/ArticulosPage/ArticulosPage";
import ContactanosPage from "./routes/ContactanosPage/ContactanosPage";
import QuienesSomosPage from "./routes/QuienesSomosPage/QuienesSomosPage";
import { AssetsProvider } from "./Context/Assets.context";
import TusDatos from "./routes/TusDatos/TusDatos";
import FavoritosSection from "./routes/Favoritos/Favoritos";
import VisitasPage from "./routes/VisitasPage/VisitasPage";
import PreguntasPage from "./routes/Preguntas/PreguntasPage";
import PrivateRoute from "./routes/PrivateRoute";



const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "bienes", element: <AssetListPage /> },
      { path: "bienes/:id", element: <AssetPage /> },
      { path: "eres-propietario", element: <EresPropietario /> },
      { path: "articulos", element: <ArticulosPage /> },
      { path: "contactanos", element: <ContactanosPage /> },
      { path: "quienes-somos", element: <QuienesSomosPage /> },
    ],
  },
  {
    path: "/cuenta",
    element: <PrivateRoute />,
    children: [
      { path: "", element: <TusDatos /> },
      { path: "favoritos", element: <FavoritosSection /> },
      { path: "visitas", element: <VisitasPage /> },
      { path: "preguntas", element: <PreguntasPage /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AssetsProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </AssetsProvider>
  </React.StrictMode>
);

reportWebVitals();
