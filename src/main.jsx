import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Jobs from "./Components/Jobs";
import Blog from "./Components/Blog";
import ErrorPage from "./Components/ErrorPage";
import JobDetails from "./Components/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`data.json`),
      },
      {
        path: "details:/detailsId",
        element: <JobDetails></JobDetails>,
        /* loader: ({ params }) => fetch(`data.json/${params.detailsId}`), */
        // loader: ({params}) => fetch(`data.json`),
        
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
