import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/(guest)/ui/card.jsx";
import {FaTasks} from "react-icons/fa";
import {MdDeleteOutline, MdModeEdit} from "react-icons/md";
import TooltipCustom from "@/components/(auth)/Tooltip.jsx";
import Modal from "@/components/Modal.jsx";
import EditAbilityForm from "@/components/(auth)/Form/EditAbilityForm.jsx";

export default function MemberCard() {


  return (
    <Card className="hover:shadow-md rounded-xl dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-[18px]">
          <p className="flex justify-center text-[10px] rounded-full text-white bg-purple-400 w-28 py-1">Programming</p>
          <p className="mt-4">Iriciuc Marina-Cristina</p>
        </CardTitle>
        <CardDescription >
          <p className="text-[14px]">iriciucmarina@yahoo.co</p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col justify-center">
          <p className="text-[14px] text-gray-400"><span className="text-primary-purple text-[18px]">10</span> abilities</p>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <Modal subtitle='ad' title='da' formElement={<EditAbilityForm/>}/>
          {/*<TooltipCustom element={<FaTasks/>} text="View details"/>*/}
          {/*<TooltipCustom element={<MdModeEdit/>} text="Edit member abilities"/>*/}
          {/*<TooltipCustom element={<MdDeleteOutline/>} text="Remove member"/>*/}
        </div>
      </CardFooter>
    </Card>
  )
}
