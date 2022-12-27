import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Page404 from "../Home/Home/404Page";
import Login from "../Home/Home/Login/Login";
import MyBooking from "../Home/Home/MyBooking/MyBooking";
import Payment from "../Home/Home/Payment/Payment"
import Register from "../Home/Home/Register/Register";
import Main from "../Layout/Main";

export const routers = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/payment',
                element: <Payment/>
            },
            {
                path: '/myBooking',
                element: <MyBooking/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '*',
        element: <Page404/>
    }
])