import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Pages/MainLayouts/MainLayouts";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Home/OurService/ServiceDetails";

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
      },
    ],
  },
]);

export default router;
