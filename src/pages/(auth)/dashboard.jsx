import {useJwt} from "react-jwt";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Layout from "@/pages/(auth)/layout.jsx";

export default function Dashboard() {

  const {decodedToken} = useJwt(localStorage.getItem('token'));

  const navigate = useNavigate();

  useEffect(() => {

    // if (!decodedToken) {
    // return navigate("/login")
    // }
  }, [decodedToken, navigate]);


  return (
     <Layout>
       <p>Dashboard Page</p>
     </Layout>
  )
}
