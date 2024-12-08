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
import Details from "../component/Details";
import PrivateRoute from "./PrivateRoute";
import AllProduct from "../component/AllProduct";
import UpdateEquipment from "../page/UpdateEquipment";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: ()=>fetch('http://localhost:5000/equipment-home')
            },
            {
                path: '/addEquipment',
                element: <PrivateRoute><AddEquipment/></PrivateRoute>
            },
            {
                path: '/updateEquipment/:id',
                element: <UpdateEquipment/>,
                loader: ({params}) => fetch(`http://localhost:5000/equipment/${params.id}`) 
            },
            {
                path: '/allList',
                element: <EquipmentList/>,
                loader: ()=>fetch('http://localhost:5000/equipment')
            },
            {
                path: '/allSports',
                element: <AllEquipment/>,
                // loader: ()=>fetch('http://localhost:5000/equipment')
            },
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/equipment/:id/details',
                element:<PrivateRoute><Details/></PrivateRoute>,
                loader: ({params})=>fetch(`http://localhost:5000/equipment/${params.id}`)
            },
            {
                path: '/products',
                element: <PrivateRoute> <AllProduct/></PrivateRoute>,
                loader: ()=>fetch('http://localhost:5000/equipment')
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