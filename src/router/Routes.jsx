import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../pages/addProduct/AddProduct";
import BrandAdd from "../pages/brandAdd/BrandAdd";
import BrandProduct from "../pages/brandProduct/BrandProduct";
import UpdateProduct from "../pages/updateProduct/UpdateProduct";
import ProductDetails from "../pages/productDetails/ProductDetails";
import PrivateRoutes from "../pages/privateRoutes/PrivateRoutes";
import ErrorMessage from "../pages/errorMessagePage/ErrorMessage";
import MyCart from "../pages/myCartPage/MyCart";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorMessage/>, 
    children: [
        {
            path: '/',
            element: <Home/>,
            loader:() => fetch('https://techno-store-server-ass10.vercel.app/brand')
        },
        {
            path: '/addProduct',
            element: <PrivateRoutes><AddProduct/></PrivateRoutes>,  
        },
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },
       
        {
            path: '/brandProduct/:brand_name',
            element: <BrandProduct/>,
            loader: ({params}) => fetch(`https://techno-store-server-ass10.vercel.app/product/${params.brand_name}`)
        },
        {
            path: '/updateProduct/:id',
            element: <PrivateRoutes><UpdateProduct/></PrivateRoutes>,
            loader: () => fetch('https://techno-store-server-ass10.vercel.app/product')
        },
        {
            path: '/productDetails/:id',
            element: <PrivateRoutes><ProductDetails/></PrivateRoutes>,
            loader: () => fetch('https://techno-store-server-ass10.vercel.app/product')
        },
        {
            path: '/myCart',
            element: <PrivateRoutes><MyCart/></PrivateRoutes>,
            loader: () => fetch('https://techno-store-server-ass10.vercel.app/cart')
        },



        // brand name and image for add to database 
        {
            path: '/brandAdd',
            element: <BrandAdd/>
        },
    ]
  },
]);

export default myCreateRouter;