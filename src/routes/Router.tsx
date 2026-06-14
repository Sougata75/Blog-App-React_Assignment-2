
import { createBrowserRouter } from 'react-router-dom'
import LogIn from '../pages/auth/LogIn';
import Wrapper from '../layout/Wrapper';
import BlogPge from '../pages/BlogPge';
import Podcasts from '../pages/Podcasts';
import Author from '../pages/Author';
import { lazy, Suspense } from 'react';
import Notfound from '../components/Notfound';
import ErrorBoundery from '../components/ErrorBoundery';
import IndividualPage from '../components/IndividualPage';

const Home = lazy(() => import("../pages/Home"));

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
                <Suspense fallback = {<p>Loading ..... </p>}>
                <Home/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
            {
                path:"/blogs",
                element:(
                <Suspense fallback = {<p>Loading ..... </p>}>
                <BlogPge/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
            {
                path: "/podcasts",
                element: (
                <Suspense fallback = {<p>Loading ..... </p>}>
                <Podcasts/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
            {
                path: "/author",
                element: (
                <Suspense fallback = {<p>Loading ..... </p>}>
                <Author/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>
            },
            {
             path: "/blogPost/:id",
                element: (
                <Suspense fallback = {<p>Loading ..... </p>}>
                <IndividualPage/>
                </Suspense>
                ),
                errorElement: <ErrorBoundery/>   
            }
        ],
    },{
        path: "*",
        element: <Notfound/>
    }
]);

export default Routes