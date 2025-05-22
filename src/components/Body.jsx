import { createBrowserRouter, RouterProvider } from "react-router-dom"
import LandingPage from "./LandingPage"
import Login from "./Login"
import Signup from "./SignUp"
import Profile from "./Profile"
const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <LandingPage />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/profile",
            element: <Profile />
        }
    ])
    return(
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body;
