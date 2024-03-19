import Layout from "@/pages/(auth)/layout.jsx";
import Modal from "@/components/Modal.jsx";
import SignInURLForm from "@/components/(auth)/Form/SignInURLForm.jsx";
import MembersTable from "@/components/(auth)/Table/MembersTable.jsx";
import {Button} from "@/components/ui/button.jsx";
import SelectCustom from "@/components/(auth)/SelectCustom.jsx";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useTokenDecoding} from "@/hooks/token-decoding.js";

export default function Members() {

  const decodedToken = useTokenDecoding()
  const navigate = useNavigate();

  useEffect(() => {
    if (decodedToken && decodedToken?.role !== 'Organization Admin' && decodedToken?.role !== "Department Manager") {
      return navigate("/dashboard")
    }
    // if (!decodedToken) {
    //   return navigate("/login")
    // }
    }, [decodedToken, navigate]);


  return (
    <Layout>
      <p className="text-[20px]">Members</p>
      <div className="flex  items-center mt-10 gap-20">
        <Modal title={<Button className="px-10 py-4">Add a member</Button>} subtitle="Add a member"
               formElement={<SignInURLForm/>}/>
        {/*<input type="text" className="custom-input mt-0" placeholder="Search for a member..."/>*/}
        {/*<SelectCustom/>*/}
      </div>
      <div className="mt-16">
        <MembersTable/>
      </div>
    </Layout>
  )
}
