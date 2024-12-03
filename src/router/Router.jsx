import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Root from "../layout/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default router;