import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Pages/MainLayouts/MainLayouts";
import Home from "../components/Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
