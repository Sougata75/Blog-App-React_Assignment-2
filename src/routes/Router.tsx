
import { createBrowserRouter } from 'react-router-dom'
import LogIn from '../pages/auth/LogIn';
import Wrapper from '../layout/Wrapper';
import Home from '../pages/Home';
import BlogPge from '../pages/BlogPge';
import Podcasts from '../pages/Podcasts';
import Author from '../pages/Author';

const Routes = createBrowserRouter([
    {
        path:"/logIn",
        element: <LogIn/>
    },
    {
        path:"/",
        element: <Wrapper/>,
        children: [
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"/blogs",
                element: <BlogPge/>
            },
            {
                path: "/podcasts",
                element: <Podcasts/>
            },
            {
                path: "/author",
                element: <Author/>
            }

        ]
    }
]);

export default Routes