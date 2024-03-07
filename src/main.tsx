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
import App from './App'
import Outros from './pages/Outros';
import Produto from './pages/Produto';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Inicio />,
      },
      {
        path: "/catalogo",
        element: <Catalogo />,
      },
      {
        path: '/catalogo/:produto',
        element: <Produto />,
      },
      {
        path: "/catalogo/outros",
        element: <Outros />
      },
      {
        path: "/pontos-de-venda",
        element: <PontosDeVenda />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
