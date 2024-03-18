import {InputAnimated} from "@/components/(guest)/ui/input-animated.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {validateSchema} from "@/lib/utils.js";
import {registerSchema} from "@/schema/auth/RegisterSchema.js";
import {useState} from "react";
import {useJwt} from "react-jwt";

export default function RegisterForm() {

  const [errors, setErrors] = useState(null);

  const navigate = useNavigate()

  const {decodedToken} = useJwt(localStorage.getItem('token') ?? '')

  if (decodedToken?.userId) {
    return navigate('/dashboard')
  }

  async function handleRegister(event) {
    event.preventDefault()
    const registerForm = {
      name: event.target.elements.name.value,
      organizationName: event.target.elements.organizationName.value,
      address: event.target.elements.address.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
      confirmPassword: event.target.elements.confirmPassword.value
    };
    const errorsMessages = validateSchema(registerSchema, registerForm);
    if (errorsMessages) {
      setErrors(errorsMessages)
      return
    }
    setErrors(null)
    try {
      const response = await axios.post("/auth/signup", {
        name: registerForm.name,
        organization_name: registerForm.organizationName,
        organization_address: registerForm.address,
        email: registerForm.email,
        password: registerForm.password
      })
      if (response?.data?.token) {
        localStorage.setItem('token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        return navigate("/dashboard")
      }
    } catch (e) {
      setErrors({
        error: e.response.data.error
      })
      console.log(e.response.data)
    }
  }

  console.log(errors)


  return (
    <form onSubmit={handleRegister}>
      <p className="text-[32px] font-medium tracking-wide">Sign Up</p>
      <p className="text-[15px] text-gray-400 my-3">Please enter your credentials below to access your
        account.
      </p>
      <p className="custom-label">Your name</p>
      <InputAnimated type="text" className={`${errors?.name ? 'error-input' : ''}`} name="name" placeholder="John Doe"/>
      <p className="error-message"> {errors?.name}</p>
      <p className="custom-label">Organization Name</p>
      <InputAnimated type="text" className={`${errors?.organizationName ? 'error-input' : ''}`} name="organizationName" placeholder="Organization Name"/>
      <p className="error-message"> {errors?.organizationName}</p>
      <p className="custom-label">Address</p>
      <InputAnimated type="text" className={`${errors?.address ? 'error-input' : ''}`} name="address" placeholder="Lost Creek Road"/>
      <p className="error-message"> {errors?.address}</p>
      <p className="custom-label">Email</p>
      <InputAnimated type="email" className={`${errors?.email ? 'error-input' : ''}`} name="email" placeholder="email@gmail.com"/>
      <p className="error-message"> {errors?.email}</p>
      <p className="error-message"> {errors?.error}</p>
      <p className="error-message"> </p>
      <p className="custom-label">Password</p>
      <InputAnimated type="password" className={`${errors?.password ? 'error-input' : ''}`} name="password"/>
      <p className="error-message"> {errors?.password}</p>
      <p className="custom-label">Confirm Password</p>
      <InputAnimated name="confirmPassword" className={`${errors?.confirmPassword ? 'error-input' : ''}`}  type="password"/>
      <p className="error-message">{errors?.confirmPassword}</p>
      <Button type="submit" className="mt-8 py-6 uppercase w-full">Sign Up</Button>
      <p className="custom-label text-center mt-20">Already a member ?
        <span className="text-primary-purple font-medium mx-3 cursor-pointer">
            <Link to="/login">Sign In</Link>
          </span>
      </p>
    </form>
  )
}


