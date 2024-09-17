import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';

import * as root from "./routes/root";
import * as index from "./routes/index";
import * as about from "./routes/about";
import * as error from "./routes/error";

function main() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <root.Page />,
      errorElement: <error.Page />,
      children: [
        {
          index: true,
          element: <index.Page />,
          errorElement: <error.Page />,
        },
        {
          path: "/about",
          element: <about.Page />,
          errorElement: <error.Page />,
        },
      ],
    }
  ], {})

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

main();
