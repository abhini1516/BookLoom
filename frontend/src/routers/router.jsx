import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
<<<<<<< HEAD
import CartPage from "../pages/books/CartPage.jsx";
import CheckOutPage from "../pages/books/CheckOutPage.jsx";
=======
import SingleBook from "../pages/books/SingleBook.jsx";
>>>>>>> 1cc83177bb81eb5a3e1a1177deebb2379a81fa1b

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
<<<<<<< HEAD
              path: "/cart",
              element: <CartPage />
            },
            {
              path:"/checkout",
              element: <CheckOutPage/>
            }
=======
                path: "/books/:id",
                element: <SingleBook />
            }
            
>>>>>>> 1cc83177bb81eb5a3e1a1177deebb2379a81fa1b
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
