import {InputAnimated} from "@/components/(guest)/ui/input-animated.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useJwt} from "react-jwt";
import axios from "axios";
import {useState} from "react";
import {loginSchema} from "@/schema/auth/LoginSchema.js";
import {validateSchema} from "@/lib/utils.js";

export default function LoginForm() {

  const {decodedToken} = useJwt(localStorage.getItem("token"));

  const navigate = useNavigate();


  if (decodedToken?.userId) {
    return navigate('/dashboard')
  }

  let [errors, setErrors] = useState();

  async function handleLogin(event) {
    event.preventDefault()
    const loginForm = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value
    }

    const errorMessages = validateSchema(loginSchema, loginForm);

    if (errorMessages) {
      setErrors(errorMessages);
      return;
    }

    setErrors(null);

    try {
      const response = await axios.post('/auth/login', {
        email: loginForm.email,
        password: loginForm.password
      })
      if (response?.data) {
        localStorage.setItem('token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        return navigate("/dashboard")
      }
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        setErrors({ err: "Backend offline" });
      } else if (error.response.status === 400) {
        setErrors({ err: "Invalid email or password" });
      } else {
        setErrors({ err: "Internal Server Error" });
      }
    }


  }


  return (
    <form onSubmit={handleLogin}>
      <p className="text-[32px] font-medium tracking-wide">Sign In</p>
      <p className="text-[15px] text-gray-400 my-3">Please enter your credentials below to access your
        account.</p>
      <p className="custom-label">Email</p>
      <InputAnimated type="email" className={`${errors?.email ? 'error-input' : ''}`} name="email" placeholder="email@gmail.com"/>
      <p className="error-message">{errors?.email}</p>
      <p className="error-message">{errors?.err}</p>
      <p className="custom-label">Password</p>
      <InputAnimated type="password" className={`${errors?.password ? 'error-input' : '' }`} name="password"/>
      <p className="error-message">{errors?.password}</p>
      <Button type="submit" className="mt-8 py-6 uppercase w-full">Sign In</Button>
      {/*<p className="custom-label text-center">Or Continue with:</p>*/}
      {/*<div className="flex justify-center gap-4 text-[40px] mt-4">*/}
      {/*  <FcGoogle className="border dark:border-gray-300 p-2 rounded-full cursor-pointer"/>*/}
      {/*  <SiGithub className="border dark:border-gray-300 p-2 rounded-full cursor-pointer"/>*/}
      {/*  <div className="border dark:border-gray-300 rounded-full">*/}
      {/*    <FaLinkedin className="cursor-pointer p-2"/>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <p className="custom-label text-center mt-20">Don't you have an account ?
        <span className="text-orange-500 font-medium mx-3 cursor-pointer">
           <Link to="/register">
                Sign Up
           </Link>
          </span>
      </p>
    </form>
  )
}

