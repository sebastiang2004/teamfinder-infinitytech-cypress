import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {MdDelete} from "react-icons/md";
import {FaPlus, FaUser} from "react-icons/fa";
import TooltipCustom from "@/components/(auth)/Tooltip.jsx";
import Modal from "@/components/Modal.jsx";
import UserProfileSection from "@/components/(auth)/Section/UserProfileSection.jsx";
import UserRoleForm from "@/components/(auth)/Form/UserRoleForm.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {useJwt} from "react-jwt";
import {deleteAlert} from "@/alert/DeleteAlert.js";
import Swal from "sweetalert2";
import UserDepartmentForm from "@/components/(auth)/Form/UserDepartmentForm.jsx";
import {GoProjectSymlink} from "react-icons/go";

export default function MembersTable() {

  const {decodedToken} = useJwt(localStorage.getItem('token') ?? '');
  const [members, setMembers] = useState([]);

  console.log(decodedToken)

  useEffect(() => {
    async function getUsers() {
      const response = await axios.get(`/organization/${decodedToken.organizationId}/members`)
      setMembers(response.data)
    }

    if (decodedToken) {
      getUsers();

    }
  }, [decodedToken]);

  async function handleDeleteMember(member) {
    const result = await deleteAlert("Are you sure you want to delete this member?");
    try {
      if (result.isConfirmed) {
        await axios.delete(`/user/delete/${member}`);
        await Swal.fire({
          title: "Deleted!",
          text: "Member has been deleted.",
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
    <div>
      {members.length > 0 ?
        <Table>
          <TableCaption className="mt-12">List of Organization Members</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Number of abilities</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {members?.map((member) => (
              <TableRow key={member._id}>
                <TableCell>{member?.name}</TableCell>
                <TableCell
                  className={`uppercase text-white font-semibold text-[12px] ${member.department ? 'bg-green-400' : 'bg-red-400'}`}>{member.department ? "assigned" : "unassigned"}</TableCell>
                <TableCell>{member?.role}</TableCell>
                <TableCell>{member?.email}</TableCell>
                <TableCell>{member?.skills.length}</TableCell>
                <TableCell>{member?.department?.name ?? '-'}</TableCell>
                <TableCell>{member.createdAt}</TableCell>
                <TableCell>
                  <div className="flex items-center text-[18px] gap-3">
                    {decodedToken.role === 'Organization Admin' && (
                      <>
                        <TooltipCustom
                          element={<Modal title={<FaPlus/>} subtitle="Add member role"
                                          formElement={<UserRoleForm memberId={member._id}/>}/>}
                          text="Assign a role"/>
                        <TooltipCustom element={<MdDelete onClick={() => handleDeleteMember(member._id)}/>}
                                       text="Delete Member"
                        />
                      </>
                    )}
                    <TooltipCustom
                      element={<Modal title={<GoProjectSymlink/>} subtitle="Add member in a department"
                                      formElement={<UserDepartmentForm memberId={member._id}/>}/>}
                      text="Assign a department"/>
                    <TooltipCustom
                      element={<Modal title={<FaUser/>} subtitle="Member Profile"
                                      formElement={<UserProfileSection member={member}/>}/>}
                      text="View details"/>

                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table> :
        <p className="text-center text-[25px] font-medium mt-20">There are no members</p>
      }
    </div>
  )
}
