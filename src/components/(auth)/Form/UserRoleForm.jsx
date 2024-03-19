import SelectCustom from "@/components/(auth)/SelectCustom.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import axios from "axios";
import {useAtom} from "jotai/index";
import {selectedValueAtom} from "@/store/index.js";
import notify from "@/alert/Notify.js";
import SelectRole from "@/components/(auth)/Select/SelectRole.jsx";


export default function UserRoleForm({memberId}) {


  const roles = [
    {
      id: 1,
      name: "Organization Admin"
    },
    {
      id: 2,
      name: "Employee"
    },
    {
      id: 3,
      name: "Department Manager"
    },
    {
      id: 4,
      name: "Project Manager"
    },
  ];

  const [selectedRole] = useAtom(selectedValueAtom);

  async function handleAssignRole(event) {
    event.preventDefault();
    try {
      await axios.put(`/user/${memberId}`, {
        role: selectedRole
      })
      await notify(`You have assigned the ${selectedRole} role to this user`)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={handleAssignRole}>
      <p className="custom-label">Select Role</p>
      <div className="mt-3">
        <SelectRole items={roles}/>
      </div>
      <Button type="submit" className="mt-10 px-10 py-5">Save details</Button>
    </form>
  )
}
