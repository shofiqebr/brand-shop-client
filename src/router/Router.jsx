import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";
import Navbar from "../Navbar";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../pages/addProduct/AddProduct";
import MyCart from "../pages/myCart/MyCart";

import NotFound from "../pages/notfound/NotFound";

import BrandProducts from "../components/BrandProducts";



        const router = createBrowserRouter([
            {
              path: "/",
              element: <Root/>,
              errorElement: <NotFound/>,
              children:[
            {
                path: '/',
                element:<Home/>,
            },
            {
                path : '/navbar',
                element: <Navbar/>,
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/addProduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>,
            },
            {
                path: '/brandProducts/:id',
                element:<BrandProducts></BrandProducts>,
            },
          
              ]
    
        }
          ]);


export default router;