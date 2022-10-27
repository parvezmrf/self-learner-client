import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import CourseDetails from "../../Pages/Courses/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import LoginEmailPassword from "../../Pages/Login/LoginEmailPassword";
import Register from "../../Pages/Login/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/course/:id',
                loader: ({ params }) => fetch(`https://self-learner-server.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/loginemailpssword',
                element: <LoginEmailPassword></LoginEmailPassword>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])