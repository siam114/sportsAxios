import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Root from "../layout/Root";
import About from "../component/About";
import AddEquipment from "../page/AddEquipment";
import ErrorPage from "../page/ErrorPage";
import AllEquipment from "../page/AllEquipment";
import EquipmentList from "../page/EquipmentList";
import AuthLayout from "../layout/AuthLayout";
import LogIn from "../page/LogIn";
import Register from "../page/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/addEquipment',
                element: <AddEquipment/>
            },
            {
                path: '/allList',
                element: <EquipmentList/>
            },
            {
                path: '/allSports',
                element: <AllEquipment/>,
                loader: ()=>fetch('http://localhost:5000/equipment')
            },
            {
                path: '/about',
                element: <About/>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: '/auth/login',
                element: <LogIn/>
            },
            {
                path: '/auth/register',
                element: <Register/>
              }
        ]
    },
   
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default router;