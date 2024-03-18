import Layout from "@/pages/(auth)/layout.jsx";
import AbilitesDepartmentSection from "@/components/(auth)/Section/AbilitesDepartmentSection.jsx";
import {Link, useNavigate} from "react-router-dom";
import DepartmentMembersTable from "@/components/(auth)/Table/DepartmentMembersTable.jsx";
import {FaExclamation, FaLaptop} from "react-icons/fa";
import SelectCustom from "@/components/(auth)/SelectCustom.jsx";
import {IoTimeOutline} from "react-icons/io5";
import {useParams} from "react-router";
import axios from "axios";
import {useEffect, useState} from "react";
import {RiTeamFill} from "react-icons/ri";
import {useJwt} from "react-jwt";

export default function DepartmentId() {


  const {id} = useParams();
  const [department, setDepartment] = useState();
  const [managerDepartment, setManagerDepartment] = useState();
  const [membersDepartment, setMembersDepartment] = useState();
  const cardInfo = [
    {
      id: 1,
      title: "Total members",
      icon: <RiTeamFill/>
    },
    {
      id: 2,
      title: "Total abilities",
      icon: <FaLaptop/>
    },
    {
      id: 3,
      title: "asd",
      // icon:
    },
    {
      id: 4,
      title: "Created At",
      icon: <IoTimeOutline/>
    },
  ]
  const navigate = useNavigate();
  const {decodedToken} = useJwt(localStorage.getItem('token'));


  useEffect(() => {

    if (decodedToken && decodedToken?.role !== 'Organization Admin' && decodedToken?.role !== "Department Manager") {
      return navigate("/dashboard")
    }
    async function getDepartment() {
      const response = await axios.get(`/department/${id}`)
      setDepartment(response.data);
    }

    async function getManagerDepartment() {
      const response = await axios.get(`/department/${id}/manager`)
      setManagerDepartment(response.data);
    }

    async function getMembersDepartment() {
      const response = await axios.get(`/department/${id}/members`)
      setMembersDepartment(response.data);
    }

    async function getDepartmentSkills() {
      const {data} = await axios.get(`/department/${id}/skills`)

      console.log(data)
    }

    // if (!decodedToken) {
    //   return navigate("/login")
    // }
    getDepartment();
    getManagerDepartment();
    getMembersDepartment();
    getDepartmentSkills()

  }, [id]);


  return (
    <Layout>
      <div className="grid grid-cols-[800px_auto]">
        <div>
          <p className="text-[20px] font-medium text-primary-purple">{department?.name}</p>
          {/*<div className="flex items-center gap-5 mt-10">*/}
          {/*  <Modal title={<Button className="text-green-500 bg-white hover:bg-white">Edit department*/}
          {/*    details</Button>} subtitle="Edit department details" formElement={<DepartmentForm/>}/>*/}
          {/*  <Button className="text-red-500 bg-white hover:bg-white">Delete department</Button>*/}
          {/*</div>*/}
          <p className="custom-label mt-12">Description</p>
          <p className="text-[15px] mt-5 text-gray-500">{department?.description}</p>
          {managerDepartment ? (
              <p className="mt-10 custom-label">Department manager: <span
                className="text-primary-purple mx-3 font-medium cursor-pointer">{managerDepartment?.name}</span></p>
            ) :
            <div className="mt-10 flex items-center gap-3">
              <FaExclamation/>
              <p>This department has no manager</p>
              <Link to="/members">
                <p className="text-primary-purple">Add a manager</p>
              </Link>
            </div>
          }

          {/*<div className="flex  gap-10 mt-20">*/}
          {/*  {cardInfo.map(function (info) {*/}
          {/*    return (*/}
          {/*      <div key={info.id} className="flex gap-3 items-center bg-gray-50 p-6 rounded-xl">*/}
          {/*        <div className="text-[20px]">{info.icon}</div>*/}
          {/*        <div>*/}
          {/*          <p className="custom-label mt-0">{info.title}</p>*/}
          {/*          <p className="mt-1 text-primary-purple font-medium">20.10.2020</p>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    )*/}
          {/*  })}*/}
          {/*</div>*/}
        </div>
        <AbilitesDepartmentSection/>
      </div>
      {membersDepartment?.length > 0 ? (
          <div className="mt-8">
            <p className="custom-label mt-10">Members</p>
            <div className="flex items-center gap-5 my-5">
              <input type="text" className="custom-input" placeholder="Looking for a member..."/>
              <SelectCustom/>
            </div>
            {department && <DepartmentMembersTable departmentId={department._id} membersDepartment={membersDepartment}/>}
          </div>
        ) :
        <div className="flex items-center gap-3">
          <p>There are currently no members in this department.</p>
          <Link to="/members">
            <p className="text-primary-purple">Add a member</p>
          </Link>
        </div>
      }
    </Layout>
  )
}
