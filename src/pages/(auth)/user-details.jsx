import Layout from "@/pages/(auth)/layout.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import axios from "axios";
import {useJwt} from "react-jwt";
import {useEffect, useState} from "react";
import {validateSchema} from "@/lib/utils.js";
import {updateUserDetailsSchema} from "@/schema/user/UpdateUserDetailsSchema.js";
import editAlert from "@/alert/EditAlert.js";
import {useNavigate} from "react-router-dom";

export default function UserDetails() {

  const {decodedToken} = useJwt(localStorage.getItem('token'));

  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState();
  const navigate = useNavigate()

  useEffect(() => {
    async function getUser() {
      const response = await axios.get(`/user/${decodedToken?.userId}`);
      setUser(response.data);
    }

    if (decodedToken) {
      getUser()
    }
    // if (!decodedToken){
    //   return navigate("/login")
    // }
  }, [decodedToken])


  async function handleEditUser(event) {
    event.preventDefault();
    const userDetailsForm = {
      name: event.target.elements.name.value,
      organizationName: event.target.elements.organizationName.value,
      organizationAddress: event.target.elements.address.value,
      email: event.target.elements.email.value,
      // password: event.target.elements.password.value,
    }
    const errorMessages = validateSchema(updateUserDetailsSchema, userDetailsForm);
    if (errorMessages) {
      setErrors(errorMessages)
      return
    }
    setErrors(null)
    await axios.put(`/user/${decodedToken?.userId}`, {
      name: userDetailsForm.name,
      email: userDetailsForm.email,
    });
    await editAlert("The user details have been successfully edited.")
  }

  return (
    <Layout>
      <p className="text-[20px]">User Details</p>
      <form onSubmit={handleEditUser}>
        <p className="custom-label">Change your name</p>
        <input type="text" name="name" className={`mt-2 ${errors?.name ? "error-input" : "custom-input"}`}
               defaultValue={user?.name}/>
        <p className="error-message">{errors?.name}</p>
        {user?.role === "Organization Admin" && (
          <div>
            <p className="custom-label">Change your organization name</p>
            <input type="text" name="organizationName" className="custom-input mt-2"/>
            <p className="custom-label">Change address</p>
            <input type="text" name="address" className={`mt-2 ${errors?.address ? "error-input" : "custom-input"}`}/>
          </div>
        )}
        <p className="custom-label">Change email</p>
        <input type="text" name="email" className={`mt-2 ${errors?.email ? "error-input" : "custom-input"}`}
               defaultValue={user?.email}/>
        <p className="error-message">{errors?.email}</p>
        {/*<p className="custom-label">Reset password</p>*/}
        {/*<input type="text" name="password" className="custom-input mt-2"/>*/}
        <Button className="mt-8 px-10 py-6 uppercase bg-primary-purple">Edit account settings</Button>
      </form>
    </Layout>
  )
}
