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
import {ThemeProvider} from "@/components/(guest)/ThemeProvider.jsx";
import Dashboard from "@/pages/(auth)/dashboard.jsx";
import Error from "@/components/(guest)/Error.jsx";
import Projects from "@/pages/(auth)/projects/projects.jsx";
import ProjectSlug from "@/pages/(auth)/projects/slug.jsx";
import Departments from "@/pages/(auth)/departments/departments.jsx";
import Members from "@/pages/(auth)/members/members.jsx";
import Abilities from "@/pages/(auth)/abilities.jsx";
import UserDetails from "@/pages/(auth)/user-details.jsx";
import DepartmentId from "@/pages/(auth)/departments/id.jsx";
import RegisterEmployee from "@/pages/(guest)/register-employee.jsx";
import MemberId from "@/pages/(auth)/members/id.jsx";
import axios from 'axios'
import AuthProvider from "@/components/(auth)/AuthProvider.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <Error/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
  {
    path: "/projects",
    element: <Projects/>
  },
  {
    path: "/projects/:slug",
    element: <ProjectSlug/>
  },
  {
    path: "/departments",
    element: <Departments/>
  },
  {
    path: "/departments/:id",
    element: <DepartmentId/>
  },
  {
    path: "/members",
    element: <Members/>
  },
  {
    path: "/member/:id",
    element: <MemberId/>
  },
  {
    path: "/abilities",
    element: <Abilities/>
  },
  {
    path: "/user-details",
    element: <UserDetails/>
  },
  {
    path: "/register-employee",
    element: <RegisterEmployee/>
  },
]);

// https://atc-2024-infinitytech-be-linux-web-app.azurewebsites.net
axios.defaults.baseURL = import.meta.env.VITE_API_URL
if (localStorage.getItem('token')) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      {/*<AuthProvider>*/}
        <div style={{fontFamily: "Poppins"}} className="bg-white dark:bg-black">
          <RouterProvider router={router}/>
        </div>
      {/*</AuthProvider>*/}
    </ThemeProvider>
  </React.StrictMode>,
)
