import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorCustom from './Components/ErrorCustom/ErrorCustom';
import AppliedJob from './Components/AppliedJobs/AppliedJob';
import Statistics from './Components/Statistics/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorCustom></ErrorCustom>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/applied',
        element: <AppliedJob></AppliedJob>,
        loader: () => fetch('jobs.json')

      },
      {
        path: '/jobs/:id',
        loader: () => fetch('jobs.json'),
        element: <JobDetails></JobDetails>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
