import {Button} from "@/components/ui/button.jsx";
import SelectCustom from "@/components/(auth)/SelectCustom.jsx";
import axios from "axios";
import {useParams} from "react-router";
import {useJwt} from "react-jwt";
import notify from "@/alert/Notify.js";
import {validateSchema} from "@/lib/utils.js";
import {skillSchema} from "@/schema/skill/SkillSchema.js";
import {useState} from "react";

export default function AbilityForm() {

  const {id} = useParams();
  const {decodedToken} = useJwt(localStorage.getItem('token') ?? '');
  const [errors, setErrors] = useState(null);

  async function handleCreateSkill(event) {
    event.preventDefault();
    const skillForm = {
      category: event.target.elements.category.value,
      name: event.target.elements.skillName.value,
      description: event.target.elements.description.value
    }
    const errorMessages = validateSchema(skillSchema, skillForm);
    if (errorMessages) {
      setErrors(errorMessages)
      return
    }
    setErrors(null)
    try {
      await axios.post(`/skill`, {
        category: skillForm.category,
        name: skillForm.skillName,
        description: skillForm.description,
        author: decodedToken.userId,
        departments: id,
        organization: decodedToken.organization
      })
      await notify("The skill has been successfully added")
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <form onSubmit={handleCreateSkill} className="flex flex-col">
      {/*<p className="custom-label">Select a skill - Optional*</p>*/}
      {/*<div className="mt-3">*/}
      {/*  <SelectCustom/>*/}
      {/*</div>*/}
      <p className="custom-label">Or Create Your Category Skill</p>
      <input type="text" className="custom-input" name="category" placeholder="Name"/>
      <p className="error-message">{errors?.category}</p>
      <p className="custom-label">Skill Name</p>
      <input type="text" className="custom-input" name="skillName" placeholder="Name"/>
      <p className="error-message">{errors?.name}</p>
      <p className="custom-label">Description</p>
      <textarea className="custom-input" name="description" placeholder="Description"/>
      <p className="error-message">{errors?.description}</p>
      <Button type="submit" className="mt-8">Add skill</Button>
    </form>
  )
}
