import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Pages/MainLayouts/MainLayouts";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Home/OurService/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CartDetails from "../Pages/CartDetails/CartDetails";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoutes>
            <Checkout></Checkout>
          </PrivateRoutes>
        ),
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
      {
        path: "/carts",
        element: (
          <PrivateRoutes>
            <CartDetails></CartDetails>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);

export default router;
