import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <home/>,
            },
            {
                path:"/orders",
                element:<div>Orders</div>
            },
            {
                path:"/about",
                element:<div>about</div>
            }
        ]
    },
]);

export default router;
