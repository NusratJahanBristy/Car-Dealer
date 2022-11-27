import { createBrowserRouter } from "react-router-dom";
import Main from '../../Layout/Main';
import Blog from "../../Pages/Blog/Blog";
import Categories from "../../Pages/Category/Categories/Categories";
import CategoriesItem from "../../Pages/Category/CategoriesItem/CategoriesItem";
import CategoryItem from "../../Pages/Category/CategoryItem/CategoryItem";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
// import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Home from '../../Pages/Home/Home/Home'
import Login from "../../Pages/Home/Home/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
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
                path: '/singleCategory/:id',
                element: <Categories></Categories>,
                // loader: ({ params }) => fetch(`categoryItem.json/category/${params.id}`)

            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            // {
            //     path:'/dashboard',
            //     element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>
            // },
            {
                path: '*', element: <ErrorPage></ErrorPage>
        
              }
        ]
    }
])
export default router;