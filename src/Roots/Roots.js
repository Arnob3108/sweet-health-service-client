import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/HomePage/Home";
import SignIn from "../Pages/SignIn&Register/SignIn";
import Services from "../Pages/Services/Services";
import Register from "../Pages/SignIn&Register/Register";
import PrivateRoot from "./PrivateRoot";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "services",
        element: <Services></Services>,
      },
      {
        path: "blogs",
        element: (
          <PrivateRoot>
            <Blogs></Blogs>
          </PrivateRoot>
        ),
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
    ],
  },
]);
