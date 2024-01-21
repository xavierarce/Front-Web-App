import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./routes/App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthProvider } from "./Context/Login.context";
import { AssetsProvider } from "./Context/Assets.context";
import TusDatos from "./routes/Cuenta Pages/TusDatos/TusDatos";
import VisitasPage from "./routes/Cuenta Pages/VisitasPage/VisitasPage";
import QuestionsPageUser from "./routes/Cuenta Pages/QuestionsPageUser/QuestionsPage";
import PrivateRouteCuenta from "./routes/Cuenta Pages/PrivateRouteCuenta PrivateRouteCuenta";
import FavoritosSection from "./routes/Cuenta Pages/FavoritosSection/FavoritosSection";
import AssetListPage from "./routes/MainApp/AssetListPage/AssetListPage";
import AssetPage from "./routes/MainApp/AssetPage/AssetPage";
import EresPropietario from "./routes/MainApp/EresPropietario/EresPropietario";
// import ArticulosPage from "./routes/MainApp/ArticulosPage/ArticulosPage";
import ContactanosPage from "./routes/MainApp/ContactanosPage/ContactanosPage";
import QuienesSomosPage from "./routes/MainApp/QuienesSomosPage/QuienesSomosPage";
import Home from "./routes/MainApp/home/Home";
// import PropietariosPage from "./routes/AGENTS APP/PropietariosPage/PropietariosPage";
import BienesPage from "./routes/AGENTS APP/BienesPage/BienesPage";
import NewAssetPage from "./routes/AGENTS APP/NewAssetPage/NewAssetPage";
import EditAssetPage from "./routes/AGENTS APP/EditAssetPage.jsx/EditAssetPage";
import ImagesOrder from "./routes/AGENTS APP/ImagesOrder/ImagesOrder";
import AgentPrivateRoute from "./routes/AGENTS APP/AgentPrivateRoute";
import ErrorPage from "./routes/ErrorRoute/ErrorPage";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <Home /> },
      { path: "bienes", element: <AssetListPage /> },
      { path: "bienes/:name/:ucid", element: <AssetPage /> },
      { path: "eres-propietario", element: <EresPropietario /> },
      // { path: "articulos", element: <ArticulosPage /> },
      { path: "contactanos", element: <ContactanosPage /> },
      { path: "quienes-somos", element: <QuienesSomosPage /> },
    ],
  },
  {
    path: "/cuenta",
    element: <PrivateRouteCuenta />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <TusDatos /> },
      { path: "favoritos", element: <FavoritosSection /> },
      { path: "visitas", element: <VisitasPage /> },
      { path: "preguntas", element: <QuestionsPageUser /> },
    ],
  },
  {
    path: "/agenciaadmin",
    element: <AgentPrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      { path: "", element: <BienesPage /> },
      { path: "bien/:name/:ucid", element: <EditAssetPage /> },
      { path: "bien/ordenimagenes/:name/:ucid", element: <ImagesOrder /> },
      { path: "nuevobien", element: <NewAssetPage /> }, // Nested under BienesPage
      // { path: "propietarios", element: <PropietariosPage /> },
      { path: "visitas", element: <VisitasPage /> },
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
