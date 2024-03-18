import TooltipCustom from "@/components/(auth)/Tooltip.jsx";
import Modal from "@/components/Modal.jsx";
import {FaTasks} from "react-icons/fa";
import AbilityDetails from "@/components/(auth)/AbilityDetails.jsx";
import {Edit, X} from "lucide-react";

export default function Skill({skill}) {
  return (
  <ul>
    <li className="flex justify-between w-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 px-8 h-14 mt-5 items-center rounded-md cursor-pointer">
      <p className="uppercase text-[14px] font-medium">{skill.ability}</p>
      <div className="flex items-center gap-2">
        <TooltipCustom element={<Modal title={<FaTasks size={16} className="mt-1"/>}
                                       subtitle="View more details about this skill"
                                       formElement={<AbilityDetails/>}/>} text="View details"/>
        {/*<TooltipCustom element={<Modal title={<Edit size={16} className="mt-1"/>} subtitle="Edit skill"*/}
        {/*                               formElement={<AbilityForm/>}/>} text="Edit skill"/>*/}
        <TooltipCustom element={<X size={16}/>} text="Delete ability"/>
      </div>
    </li>
  </ul>
  )
}
