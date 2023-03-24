import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";

export const router = createBrowserRouter([
    {
        path: "*", element: <Login/>
    },
    {
        path: '/signup', element: <Signup/>
    },
    {
        path: "/dashboard", element: <Dashboard/>
    }
])