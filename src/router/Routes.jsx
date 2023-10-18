import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import MainLayout from "../mainLayout/MainLayout";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AddProduct from "../pages/addProduct/AddProduct";
import BrandAdd from "../pages/brandAdd/BrandAdd";
import BrandProduct from "../pages/brandProduct/BrandProduct";

const myCreateRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
        {
            path: '/',
            element: <Home />,
            loader:() => fetch('http://127.0.0.1:5000/brand')
        },
        {
            path: '/addProduct',
            element: <AddProduct/>  
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
            element: <BrandProduct />,
            loader: ({params}) => fetch(`http://127.0.0.1:5000/product/${params.brand_name}`)
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