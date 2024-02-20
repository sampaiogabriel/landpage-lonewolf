import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Inicio from './pages/Inicio';
import Catalogo from './pages/Catalogo';
import Produto from './pages/Produto';
import ErrorPage from './pages/ErrorPage';

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
    path: "/produto",
    element: <Produto />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
