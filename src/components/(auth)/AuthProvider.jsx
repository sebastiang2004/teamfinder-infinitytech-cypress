import {useEffect} from "react";
import axios from "axios";

export default function AuthProvider({children}) {

  useEffect(() => {
    async function verifyToken() {
      try {
        await axios.get("/auth/verifiy")
      } catch (error) {
        localStorage.removeItem("token")
        delete axios.defaults.headers.common['Authorization']
      }
    }
    if (localStorage.getItem("token")){
      verifyToken();
    }
  }, []);

  return (
    <>
      {children}
    </>
  )
}
