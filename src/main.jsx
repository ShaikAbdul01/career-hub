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
import AppliedJobs from "./Components/AppliedJobs";

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
        path: "/details/:detailsId",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => (`${params.detailsId}`),
        
      },
     
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "/blog",
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
