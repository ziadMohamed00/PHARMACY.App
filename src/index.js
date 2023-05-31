import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './Home';
import Medication from './Medication';
import Beauty from './Beauty';
import Login from './Login';
import Help from './Help';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home /> ,

  },
  {
    path: "/Medication",
    element: <Medication /> ,
  },
  {
    path: "/Beauty",
    element: <Beauty /> ,
  },
  {
    path: "/Login",
    element: <Login /> ,
  },
  {
    path: "/Help",
    element: <Help /> ,
  },
  
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);

