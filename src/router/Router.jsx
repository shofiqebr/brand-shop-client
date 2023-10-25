import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../root/Root";
import Home from "../pages/Home";

import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../pages/addProduct/AddProduct";
import MyCart from "../pages/myCart/MyCart";

import NotFound from "../pages/notfound/NotFound";


import BrandProducts from './../components/brandproducts/BrandProducts';
import CarDetail from "../components/cardetail/CarDetail";









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
                path: '/brandproducts/:brandName',
                element:<BrandProducts></BrandProducts>,
                loader: () => fetch(' https://automotive-brand-shop-serverside-4h7p7nxyj.vercel.app/car')
            },
            {
                path: '/cardetail/:id',
                element: <CarDetail></CarDetail>,
                loader: ({params}) => fetch(` https://automotive-brand-shop-serverside-4h7p7nxyj.vercel.app/car/${params.id}`)
            }
          
              ]
    
        }
          ]);


export default router;