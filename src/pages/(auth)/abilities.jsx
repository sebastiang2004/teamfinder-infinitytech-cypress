import Layout from "@/pages/(auth)/layout.jsx";
import SelectCustom from "@/components/(auth)/SelectCustom.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "@/components/ui/button.jsx";
import {Link, useNavigate} from "react-router-dom";
import {useJwt} from "react-jwt";

export default function Abilities() {

  const [skills, setSkills] = useState(null);
  const {decodedToken} = useJwt(localStorage.getItem('token'));
  const navigate = useNavigate();
  useEffect(() => {
    async function getSkills() {
      await axios.get("/skills")
      setSkills(skills)
    }

    // if (!decodedToken) {
    //   return navigate("/login")
    // }

    getSkills();
  }, []);


  return (
    <Layout>
      <p className="text-[20px]">Abilities</p>
      {skills && (
        <div className="md:flex gap-8 items-center mt-10">
          <input type="text" className="custom-input md:mt-0 mt-5" placeholder="Looking for a skill....."/>
          <div className="md:mt-0 mt-5">
            <SelectCustom/>
          </div>
        </div>
      )}
      <div className="mt-14 h-[700px] overflow-y-scroll">
        {skills?.map(function (skill) {
          return (
            <p>{skill.category}</p>
            // <Skill key={item.id} skill={item}/>
          )
        })}
        {!skills && <div className='flex justify-center items-center gap-5 text-[20px]'>
          <p>There is no skill</p>
          <Link to="/departments">
            <Button className="bg-primary-purple px-10">Add a skill</Button>
          </Link>
        </div>}
      </div>
    </Layout>
  )
}
