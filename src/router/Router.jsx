import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Root from "../layout/Root";
import About from "../component/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
          
        ]
    },
    {
        path: '/about',
        element: <About/>
    }
    
])

export default router;