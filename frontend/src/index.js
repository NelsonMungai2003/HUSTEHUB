 import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import About from './pages/about';
import Contact from './pages/contact';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LogInSIgnUp from './components/LogInSIgnUp/LogInSignUp';
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"about",
    element:<About/>
  },
  {
    path:"contact",
    element:<Contact/>
  },
  {
    path:"signin",
    element:<LogInSIgnUp/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
