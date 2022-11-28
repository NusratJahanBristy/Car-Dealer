import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from '../../Layout/Main';
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Category/Categories/Categories";
import CategoriesItem from "../../Pages/Category/CategoriesItem/CategoriesItem";
import CategoryItem from "../../Pages/Category/CategoryItem/CategoryItem";
import AllUser from "../../Pages/Dashboard/Dashboard/AllUser/AllUser";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
// import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import SignUp from "../../Pages/SignUp/SignUp";
// import PrivateRoute from "../PrivateRoute/PrivateRoute";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path: '/blogs',
                element: <Blog></Blog>
              },
              {
                path: '/products/:id',
                element: <Categories></Categories>,
              

            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/dashboard',
                element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
                children:[
                    {
                        path:'/dashboard',
                        element:<Dashboard></Dashboard>
                    },
                    {
                        path:'/dashboard/allusers',
                        element:<AllUser></AllUser>
                    },
                ]
        },
            {
                path: '*', element: <ErrorPage></ErrorPage>
        
              }
        ]
    }
])
export default router;