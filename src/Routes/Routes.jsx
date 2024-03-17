import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Singup from "../Pages/Singup/Singup";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,

        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'singup',
          element: <Singup></Singup>
        },
        {
          path: 'checkout/:id',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-dun-sigma.vercel.app/services/${params.id}`)
        },
        {
          path: "bookings",
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>,
        }
      ]
    },
  ]);

  export default router;