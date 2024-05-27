import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import RecipeForm from './Pages/RecipeForm.jsx';
import SignupForm from './Pages/SignupForm.jsx';
import SigninForm from './Pages/SigninForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children :[
      {
        path :'/',
        element: <Home/>
      },
      {
        path :'/about',
        element: <About/>
      },
      {
        path :'/contact',
        element: <Contact/>
      },
      {
        path: "/recipes/create", //http://localhost:5173/recipes/create
        element: <RecipeForm />
      },
      {
        path: "/recipes/edit/:id", //http://localhost:5173/recipes/edit/id
        element: <RecipeForm />
      },
      {
        path: "/sign-in", //http://localhost:5173/recipes/edit/id
        element: <SigninForm />
      },
      {
        path: "/sign-up", //http://localhost:5173/recipes/edit/id
        element: <SignupForm />
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
