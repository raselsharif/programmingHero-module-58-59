import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Pages/MainLayouts/MainLayouts";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Home/OurService/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/servicedetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
