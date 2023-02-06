import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,Routes, Route, Navigate
} from "react-router-dom";
import Home from "./routes/home"
import Admin from './routes/admin'
import Login from './routes/login';
import ErrorPage from "./routes/error-page";
import AuthService from './Services/AuthService';
import Staff from './routes/staff';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "/admin",
    element:  (localStorage.getItem("user") === null) ? <Navigate replace to="/"></Navigate>: (AuthService.getCurrentUser()[2].role === "admin")?<Admin/>:<Navigate replace to="/"></Navigate>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/staff",
    element:  (localStorage.getItem("user") === null) ? <Navigate replace to="/"></Navigate>: (AuthService.getCurrentUser()[2].role === "staff")?<Staff/>:<Navigate replace to="/"></Navigate>,
  },
  {
    path:"/",
    element: <Navigate replace to="/login" />
  }

]);
ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
)
