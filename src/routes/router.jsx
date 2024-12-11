import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SingIn from "../pages/SingIn";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>PAGE NOT FOUND......!!!!!</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/signIn',
                element: <SingIn></SingIn>
            }
        ]
    }
])

export default router;