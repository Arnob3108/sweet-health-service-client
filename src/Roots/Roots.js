import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Home from "../Pages/HomePage/Home";
import SignIn from "../Pages/SignIn&Register/SignIn";
import Services from "../Pages/Services/Services";
import Register from "../Pages/SignIn&Register/Register";
import PrivateRoot from "./PrivateRoot";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Reviews from "../Pages/Reviews/Reviews";
import AddService from "../Pages/AddService/AddService";
import MyReviews from "../Pages/MyReview/MyReviews";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: <Blogs></Blogs>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://review-server-psi.vercel.app/service/${params.id}`),
      },
      {
        path: "addService",
        element: (
          <PrivateRoot>
            <AddService></AddService>
          </PrivateRoot>
        ),
      },
      {
        path: "myReview",
        element: (
          <PrivateRoot>
            <MyReviews></MyReviews>
          </PrivateRoot>
        ),
      },
    ],
  },
]);
