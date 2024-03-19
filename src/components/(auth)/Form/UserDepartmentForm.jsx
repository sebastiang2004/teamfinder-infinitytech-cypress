import {useEffect} from "react";
import {getDepartments} from "@/lib/utils.js";
import {useJwt} from "react-jwt";
import {useAtom} from "jotai";
import {departmentsAtom, selectedValueAtom} from "@/store/index.js";
import {Button} from "@/components/(guest)/ui/button.jsx";
import axios from "axios";
import notify from "@/alert/Notify.js";
import SelectDepartment from "@/components/(auth)/Select/SelectDepartment.jsx";

export default function UserDepartmentForm({memberId}) {

  const {decodedToken} = useJwt(localStorage.getItem('token'));
  const [departments, setDepartments] = useAtom(departmentsAtom);
  const [departmentIdSelected] = useAtom(selectedValueAtom);

  useEffect(() => {
    async function fetchDepartments() {
      try {
        const data = await getDepartments(decodedToken.organizationId)
        setDepartments(data)
      } catch (error) {
        console.log(error)
      }
    }

    if (decodedToken) {
      fetchDepartments()
    }
  }, [decodedToken, setDepartments]);

  async function handleAssignDepartment(event) {
    event.preventDefault();
    try {
      await axios.put(`/user/${memberId}`, {
        department: departmentIdSelected
      })
      await notify(`The department was assigned successfully`)
    } catch (error) {
      console.log(error.response.data)
    }

  }


  return (
    <form onSubmit={handleAssignDepartment}>
      <p className="custom-label">Choose department</p>
      <div className="mt-3">
        <SelectDepartment items={departments}/>
      </div>
      <Button type="submit" className="mt-10 px-10 py-5">Save details</Button>
    </form>
  )
}
