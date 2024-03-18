import Layout from "@/pages/(auth)/layout.jsx";
import Modal from "@/components/Modal.jsx";
import DepartmentForm from "@/components/(auth)/Form/DepartmentForm.jsx";
import DepartmentCard from "@/components/(auth)/Card/DepartmentCard.jsx";
import {InputAnimated} from "@/components/(guest)/ui/input-animated.jsx";
import {IoGrid} from "react-icons/io5";
import {MdMenu} from "react-icons/md";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button.jsx";
import {useJwt} from "react-jwt";
import {getDepartments} from "@/lib/utils.js";
import {useAtom} from "jotai";
import {departmentsAtom} from "@/store/index.js";
import {useNavigate} from "react-router-dom";

export default function Departments() {

  const {decodedToken} = useJwt(localStorage.getItem('token'));

  const [activeGrid, setActiveGrid] = useState(false);
  const [departments, setDepartments] = useAtom(departmentsAtom);
  const navigate = useNavigate();

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
      if (decodedToken?.role !== 'Organization Admin' && decodedToken?.role !== "Department Manager") {
        return navigate("/dashboard")
      }
      fetchDepartments()
    }
    // if (!decodedToken) {
    //   return navigate("/login")
    // }
    }, [decodedToken, navigate, setDepartments]);


  return (
    <Layout>
      <div className="md:flex justify-between">
        <Modal
          title={<Button className="bg-primary-purple md:m-0 mb-8 dark:bg-white uppercase text-[12px] px-14">Create a
            department</Button>}
          subtitle="Add a department"
          formElement={<DepartmentForm/>}
        />
        <InputAnimated className="lg:w-96 md:w-64 w-full" placeholder="Search for a department...."/>
        <div className="md:flex hidden items-center cursor-pointer gap-3">
          <IoGrid
            onClick={() => setActiveGrid(false)}
            className={`text-[20px] ${!activeGrid ? 'text-primary-purple' : ''}`}
          />
          <MdMenu
            onClick={() => setActiveGrid(true)}
            className={`text-[28px] ${activeGrid ? 'text-primary-purple' : ''}`}
          />
        </div>
      </div>
      <div className={`grid gap-5 mt-14 ${activeGrid ? 'grid-cols-1' : 'xl:grid-cols-3 lg:grid-cols-2 grid-cols-1'} "`}>
        {departments?.map(function (department) {
          return (
            <DepartmentCard key={department.id} department={department}/>
          )
        })}
      </div>
      {departments?.length === 0 && (
        <div className="text-center text-[30px] mt-32">There is no department created</div>
      )}
    </Layout>
  )
}
