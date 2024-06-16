import App from '../App.jsx'
import Home from '../Pages/Home.jsx';
import About from '../Pages/About.jsx';
import Contact from '../Pages/Contact.jsx';
import RecipeForm from '../Pages/RecipeForm.jsx';
import SignUpForm from '../Pages/SignupForm.jsx';
import SignInForm from '../Pages/SigninForm.jsx';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext.jsx';

export default function Index() {

    let { user } = useContext(AuthContext);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    path: "/", //http://localhost:5173/
                    element: user ? <Home /> : <Navigate to={'/sign-in'} />
                },
                {
                    path: "/about", //http://localhost:5173/about
                    element: <About />
                },
                {
                    path: "/contact", //http://localhost:5173/contact
                    element: <Contact />
                },
                {
                    path: "/recipes/create", //http://localhost:5173/recipes/create
                    element: user ? <RecipeForm /> : <Navigate to={'/sign-in'} />
                },
                {
                    path: "/recipes/edit/:id", //http://localhost:5173/recipes/edit/id
                    element: <RecipeForm />
                },
                {
                    path: "/sign-in", //http://localhost:5173/sign-in
                    element: !user ? <SignInForm /> : <Navigate to={'/'} />
                },
                {
                    path: "/sign-up", //http://localhost:5173/sign-up
                    element: !user ? <SignUpForm /> : <Navigate to={'/'} />
                },
            ]
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}