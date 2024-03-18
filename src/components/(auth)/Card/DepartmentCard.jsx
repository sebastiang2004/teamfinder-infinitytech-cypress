import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/(guest)/ui/card.jsx";
import {FaTasks} from "react-icons/fa";
import {MdDeleteOutline} from "react-icons/md";
import TooltipCustom from "@/components/(auth)/Tooltip.jsx";
import {Link} from "react-router-dom";
import Modal from "@/components/Modal.jsx";
import DepartmentForm from "@/components/(auth)/Form/DepartmentForm.jsx";
import {Edit} from "lucide-react";
import axios from "axios";
import {useJwt} from "react-jwt";
import {useAtom} from "jotai";
import {departmentsAtom} from "@/store/index.js";
import {getDepartments} from "@/lib/utils.js";
import Swal from "sweetalert2";
import {deleteAlert} from "@/alert/DeleteAlert.js";
import {AnimatedTooltipUser} from "@/components/(guest)/AnimatedTooltipUser.jsx";

export default function DepartmentCard({department}) {

  const {decodedToken} = useJwt(localStorage.getItem('token') ?? '');

  const [, setDepartments] = useAtom(departmentsAtom)

  async function handleDeleteDepartment() {
    const result = await deleteAlert("Are you sure you want to delete this department?");
   try {
     if (result.isConfirmed) {
       await axios.delete(`/department/${department._id}`);
       const data = await getDepartments(decodedToken.organizationId)
       setDepartments(data)
       await Swal.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
       });
     } else
       await Swal.fire({
         title: "Cancelled",
         text: "Your file is safe :)",
         icon: "error"
       });
   }
   catch (error) {
     await Swal.fire({
       title: "Cancelled",
       text: error.response.data.message,
       icon: "error"
     });
   }


  }



  return (
    <Card className="hover:shadow-md rounded-xl dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-[18px]">
          <p className="flex justify-center text-[10px] rounded-full text-white bg-purple-400 w-28 py-1">Programming</p>
          <p className="mt-4">{department.name}</p>
        </CardTitle>
        <CardDescription>
          <p className="text-[14px] mt-3">{department.description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/*<div className="flex flex-col justify-center">*/}
        {/*  <AnimatedTooltipUser/>*/}
        {/*  <p className="text-[14px] text-gray-400 mt-10"><span*/}
        {/*    className="text-primary-purple text-[16px]">8</span> members</p>*/}
        {/*  <p className="text-[14px] text-gray-400"><span*/}
        {/*    className="text-primary-purple text-[18px]">10</span> abilities</p>*/}
        {/*</div>*/}
        <p className="text-[14px] text-gray-400">There Are No Members</p>
      </CardContent>
      <CardFooter className="flex justify-end gap-3">
        <Link to={`/departments/${department._id}`}>
          <TooltipCustom
            element={<FaTasks size={20} className="mt-2"/>}
            text="View details"
          />
        </Link>
        <TooltipCustom
          element={<Modal subtitle="Edit department details"
                          title={<Edit size={20} className="mt-2"/>}
                          formElement={<DepartmentForm/>}/>}
          text="Edit department"
        />
        <TooltipCustom
          element={<MdDeleteOutline onClick={handleDeleteDepartment} size={23}/>}
          text="Delete department"
        />
      </CardFooter>
    </Card>
  )
}
