
import { createBrowserRouter } from 'react-router-dom'
import LogIn from '../pages/auth/LogIn';
import Wrapper from '../layout/Wrapper';
import Home from '../pages/Home';
import BlogPge from '../pages/BlogPge';
import Podcasts from '../pages/Podcasts';
import Author from '../pages/Author';
import { Suspense } from 'react';
import Loading from '../components/Loading';
import Notfound from '../components/Notfound';
import ErrorBoundery from '../components/ErrorBoundery';

const Routes = createBrowserRouter([
    {
        path:"/logIn",
        element: <LogIn/>,
        errorElement: <ErrorBoundery/>
    },
    {
        path:"/",
        element: <Wrapper/>,
        children: [
            {
                path:"/",
                element: (
                <Suspense fallback = {<Loading/>}>
                <Home/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
            {
                path:"/blogs",
                element:(
                <Suspense fallback = {<Loading/>}>
                <BlogPge/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
            {
                path: "/podcasts",
                element: (
                <Suspense fallback = {<Loading/>}>
                <Podcasts/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
            {
                path: "/author",
                element: (
                <Suspense fallback = {<Loading/>}>
                <Author/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
        ],
    },{
        path: "*",
        element: <Notfound/>
    }
]);

export default Routes