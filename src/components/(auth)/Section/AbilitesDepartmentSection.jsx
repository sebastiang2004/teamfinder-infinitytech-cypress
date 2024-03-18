import Modal from "@/components/Modal.jsx";
import AbilityForm from "@/components/(auth)/Form/AbilityForm.jsx";
import {Edit, X} from "lucide-react";
import {Button} from "@/components/ui/button.jsx";
import TooltipCustom from "@/components/(auth)/Tooltip.jsx";
import {FaTasks} from "react-icons/fa";
import AbilityDetails from "@/components/(auth)/AbilityDetails.jsx";
import {useEffect, useState} from "react";
import {useParams} from "react-router";
import axios from "axios";

export default function AbilitesDepartmentSection() {

  const [skills, setSkills] = useState(null);
  const {id} = useParams();


  useEffect(() => {
    async function getDepartmentSkills() {
      const {data} = await axios.get(`/department/${id}/skills`)

      setSkills(data);
    }

    getDepartmentSkills()

  }, [id]);

  // async function handleDeleteSkill() {
  //   await axios.delete("/")
  // }


  return (
    <div className="flex flex-col p-12 bg-gray-50 rounded-xl min-w-[500px] h-[500px] overflow-y-scroll ">
      <Modal title={<Button className="bg-primary-purple uppercase text-[12px] px-14">Create a skill</Button>}
             subtitle="Create a skill for your department"
             formElement={<AbilityForm/>}
      />
      <div className="mt-10 text-[12px] font-medium">
        {skills?.map(function (skill) {
          return (
            <div
              className="grid grid-cols-[300px_auto] justify-between w-full bg-gray-100 hover:bg-gray-200 transition-all duration-300 p-4 mt-5 items-center rounded-md cursor-pointer">
              <p className="uppercase text-[14px]">{skill.category}</p>
              <div className="flex items-center gap-2">
                <TooltipCustom
                  element={<Modal title={<FaTasks size={16} className="mt-1"/>}
                                  subtitle="View more details about this skill"
                                  formElement={<AbilityDetails/>}/>} text="View details"/>
                <TooltipCustom element={<Modal title={<Edit size={16} className="mt-1"/>} subtitle="Edit skill"
                                               formElement={<AbilityForm/>}/>} text="Edit skill"/>
                <TooltipCustom element={<X size={16}/>} text="Delete ability"/>
              </div>
            </div>
          )
        })}

      </div>
      {skills?.length === 0 &&
        <p className="capitalize font-medium text-center">there is no skill for this department</p>
      }
    </div>
  )
}
