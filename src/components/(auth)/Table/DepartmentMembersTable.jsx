import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.jsx";
import TooltipCustom from "@/components/(auth)/Tooltip.jsx";
import {FaRegEdit, FaUser} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import Modal from "@/components/Modal.jsx";
import UserProfileSection from "@/components/(auth)/Section/UserProfileSection.jsx";
import axios from "axios";
import {deleteAlert} from "@/alert/DeleteAlert.js";
import Swal from "sweetalert2";

export default function DepartmentMembersTable({departmentId, membersDepartment}) {

  async function handleRemoveMember(member) {
    const result = await deleteAlert("Are you sure you want to remove this member from department?");
    try {
      if (result.isConfirmed) {
        await axios.delete(`/department/${departmentId}/members/${member}`)
        await Swal.fire({
          title: "Deleted!",
          text: "Member has been removed from department.",
          icon: "success"
        });
      } else
        await Swal.fire({
          title: "Cancelled",
          text: "The member is safe :)",
          icon: "error"
        });
    } catch (error) {
      await Swal.fire({
        title: "Cancelled",
        text: error.response.data.message,
        icon: "error"
      })
      console.log(error.response.data.message)
    }
  }


  return (
    <Table>
      <TableCaption className="mt-12">List of Department Members</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Number of abilities</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {membersDepartment?.map((member) => (
          <TableRow key={member._id}>
            <TableCell>{member.name}</TableCell>
            <TableCell>{member?.email}</TableCell>
            <TableCell>{member?.department}</TableCell>
            <TableCell>{member?.skills?.length ?? 0}</TableCell>
            <TableCell>
              <div className="flex items-center text-[18px] gap-3">
                <TooltipCustom
                  element={<Modal title={<FaUser/>} subtitle="View more details" formElement={<UserProfileSection/>}/>}
                  text="View details"/>
                <TooltipCustom
                  element={<Modal title={<FaRegEdit/>} subtitle="Edit user abilities"
                                  formElement={<UserProfileSection/>}/>}
                  text="Edit abilities"/>
                <TooltipCustom element={<MdDelete onClick={() => handleRemoveMember(member._id)}/>}
                               text="Remove Member"/>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
