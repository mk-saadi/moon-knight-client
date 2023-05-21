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
import PrivateRoute from "./component/private/PrivateRoute";
import Products from "./component/prouducts/Products";
import AllToys from "./component/figure/AllToys";
import MyToys from "./component/figure/MyToys";
import AddToys from "./component/figure/AddToys";
import Blog from "./component/blog/Blog";
import FigD from "./component/figure/FigD";
import AddDB2 from "./component/addDB2.jsx/AddDB2";
import EditMyToys from "./component/figure/EditMyToys";
import ErrorPage from "./component/errorPage/ErrorPage";
import Categoriies from "./component/category/Categoriies";
import CategoryD from "./component/category/CategoryD";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
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
                path: "/products/:id",
                element: (
                    <PrivateRoute>
                        <Products />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://server-anime-fig-mk-saadi.vercel.app/figures/${params.id}`),
            },
            {
                path: "/allToys",
                element: <AllToys />,
                loader: () => fetch("https://server-anime-fig-mk-saadi.vercel.app/addedFigure"),
            },
            {
                path: "/figDetails/:id",
                element: (
                    <PrivateRoute>
                        <FigD></FigD>
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://server-anime-fig-mk-saadi.vercel.app/addedFigure/${params.id}`),
            },
            {
                path: "/myToys",
                element: (
                    <PrivateRoute>
                        <MyToys />
                    </PrivateRoute>
                ),
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/addAToys",
                element: (
                    <PrivateRoute>
                        <AddToys />
                    </PrivateRoute>
                ),
            },
            {
                path: "/addDB2",
                element: (
                    <PrivateRoute>
                        <AddDB2 />
                    </PrivateRoute>
                ),
            },
            {
                path: "/editMyToys/:id",
                element: (
                    <PrivateRoute>
                        <EditMyToys />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(`https://server-anime-fig-mk-saadi.vercel.app/addedFigure/${params.id}`),
            },
            {
                path: "/category",
                element: <Categoriies />,
            },
            {
                path: "/categoryD/:id",
                element: <CategoryD />,
                loader: ({ params }) =>
                    fetch(`https://server-anime-fig.vercel.app/addedFigure/${params.id}`),
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
