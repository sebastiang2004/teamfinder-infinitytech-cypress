import {InputAnimated} from "@/components/(guest)/ui/input-animated.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import {useEffect, useState} from "react";
import {validateSchema} from "@/lib/utils.js";
import {registerEmployeeSchema} from "@/schema/auth/RegisterEmployeeSchema.js";
import axios from "axios";
import {useNavigate, useSearchParams} from "react-router-dom";

export default function EmployeeRegisterForm() {

  const [errors, setErrors] = useState(null);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function verifyExistingUrl() {
      try {
        await axios.get(`/organization/${searchParams.get("organizationId")}`)

      } catch (error) {
        return navigate("/")
      }
    }

    if (searchParams.get("organizationId")) {
      verifyExistingUrl()
    } else {
      return navigate("/")
    }
  }, [navigate, searchParams]);

  async function handleRegisterEmployee(event) {
    event.preventDefault();
    const registerEmployeeForm = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value
    }
    const errorMessages = validateSchema(registerEmployeeSchema, registerEmployeeForm);
    if (errorMessages) {
      setErrors(errorMessages)
      return
    }
    setErrors(null);
    try {
      const response = await axios.post("/employee/signup", {
        name: registerEmployeeForm.name,
        email: registerEmployeeForm.email,
        password: registerEmployeeForm.password,
        organizationId: searchParams.get("organizationId")
      })
      if (response?.data?.token) {
        localStorage.setItem('token', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
        return navigate("/dashboard")
      }
    } catch (e) {
      console.log(e.response.data)
    }
  }


  return (
    <form onSubmit={handleRegisterEmployee} className="flex flex-col justify-center px-32">
      <p className="text-[28px]">Sign Up</p>
      <p className="text-gray-400 text-[15px]">Please enter your credentials below to access your account.</p>
      <p className="custom-label">Your name</p>
      <InputAnimated type="text" name="name" className={`${errors?.name ? 'error-input' : ''}`}/>
      <p className="error-message">{errors?.name}</p>
      <p className="custom-label">Your email</p>
      <InputAnimated type="text" name="email" className={`${errors?.email ? 'error-input' : ''}`}/>
      <p className="error-message">{errors?.email}</p>
      <p className="custom-label">Your password</p>
      <InputAnimated type="password" name="password" className={`${errors?.password ? 'error-input' : ''}`}/>
      <p className="error-message">{errors?.password}</p>
      <Button type="submit" className="w-full uppercase mt-8 py-6">Sign Up</Button>
    </form>
  )
}
