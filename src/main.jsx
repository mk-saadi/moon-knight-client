import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Admin from "./component/admin/Admin";
import Home from "./component/home/Home";
import Login from "./component/auth/Login";
import Register from "./component/auth/Register";
import AuthProvider from "./component/authProvider/AuthProvider";
import FiguresD from "./component/figures/FiguresD";
import Category from "./component/home/Category";
import PrivateRoute from "./component/private/PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Admin></Admin>,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch("https://server-anime-fig-mk-saadi.vercel.app/figures"),
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/figures/:id",
                element: (
                    <PrivateRoute>
                        <FiguresD />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://server-anime-fig-mk-saadi.vercel.app/figures/${params.id}`),
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({ params }) =>
                    fetch(`https://server-anime-fig.vercel.app/figurein/${params.id}`),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </React.StrictMode>
);
