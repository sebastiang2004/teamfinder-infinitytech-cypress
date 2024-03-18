import axios from "axios";
import {useState} from "react";
import {getDepartments, validateSchema} from "@/lib/utils.js";
import {departmentSchema} from "@/schema/department/DepartmentSchema.js";
import {useJwt} from "react-jwt";
import notify from "@/alert/Notify.js";
import {Button} from "@/components/ui/button.jsx";
import {useAtom} from "jotai/index";
import {departmentsAtom} from "@/store/index.js";

export default function DepartmentForm() {

  const [errors, setErrors] = useState(null);
  const [, setDepartments] = useAtom(departmentsAtom);

  const {decodedToken} = useJwt(localStorage.getItem('token'));

  async function handleCreateDepartment(event) {
    event.preventDefault();
    const departmentForm = {
      name: event.target.elements.name.value,
      description: event.target.elements.description.value
    }
    const errorMessages = validateSchema(departmentSchema, departmentForm);

    if (errorMessages) {
      setErrors(errorMessages)
      return;
    }

    setErrors(null);

    await axios.post("/department/", {
      name: departmentForm.name,
      description: departmentForm.description,
      organization: decodedToken.organizationId
    });
    const data = await getDepartments(decodedToken.organizationId)

    setDepartments(data)

    await notify("The department was successfully added");
  }


  return (
    <form onSubmit={handleCreateDepartment}>
      <p className="custom-label">Department Name</p>
      <input type="text" name="name" className={`${errors?.name ? 'error-input' : 'custom-input'}`}/>
      <p className="error-message">{errors?.name}</p>
      <p className="custom-label">Description</p>
      <textarea className={`h-28 ${errors?.description ? 'error-input' : 'custom-input'}`} name="description"/>
      <p className="error-message">{errors?.description}</p>
      <Button type="submit" className="px-20 mt-10 uppercase text-[13px]">Add a department</Button>
    </form>
  )
}
