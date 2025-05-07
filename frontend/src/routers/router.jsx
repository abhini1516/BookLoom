import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
import CartPage from "../pages/books/CartPage.jsx";
import CheckOutPage from "../pages/books/CheckOutPage.jsx";
import SingleBook from "../pages/books/SingleBook.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/orders",
                element: <div>Orders</div>
            },
            {
                path: "/about",
                element: <div>about</div>
            },
            {
                path: "/cart",
                element: <CartPage />
            },
            {
                path: "/checkout",
                element: <PrivateRoute><CheckOutPage /></PrivateRoute>
            },
            {
                path: "/books/:id",
                element: <SingleBook />
            }

        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
]);

export default router;
