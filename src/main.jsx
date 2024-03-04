import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/(guest)/Home.jsx";
import Login from "./pages/(guest)/login.jsx";
import Register from "@/pages/(guest)/register.jsx";
import {ThemeProvider} from "@/components/ThemeProvider.jsx";
import Dashboard from "@/pages/(admin)/dashboard.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    },,
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider>
            <div style={{fontFamily: "Poppins"}} className="bg-white dark:bg-primary-blue">
                <RouterProvider router={router}/>
            </div>
        </ThemeProvider>
    </React.StrictMode>,
)