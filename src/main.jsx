import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Catagory from "./Components/Catagory";
import Details from "./Components/Details";
import Statistics from "./Components/Statistics";
import Jobs from "./Components/Jobs";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`data.json`),
      },
      {
        path: `details/:id`,
        element: <Details></Details>,
        loader: ({ params }) => fetch(`data.json/${params.id}`),
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
