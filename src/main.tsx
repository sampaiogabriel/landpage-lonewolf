import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import ErrorPage from './pages/ErrorPage';
import PontosDeVenda from './pages/PontosDeVenda';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio />,
    errorElement: <ErrorPage />
  },
  {
    path: "/catalogo",
    element: <Catalogo />,
    errorElement: <ErrorPage />
  },
  {
    path: "/pontos-de-venda",
    element: <PontosDeVenda />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
