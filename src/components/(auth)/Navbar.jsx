import {IoMdNotifications} from "react-icons/io";
import {IoSettingsSharp} from "react-icons/io5";
import {CiLogin} from "react-icons/ci";
import {activeSidebarAtom} from "@/store/index.js";
import {useAtom} from "jotai/index";
import {VscLayoutSidebarLeft} from "react-icons/vsc";
import {useJwt} from "react-jwt";
import {FaUsers} from "react-icons/fa";
import {Link, useNavigate} from "react-router-dom";
import {MdDashboardCustomize} from "react-icons/md";
import {AiOutlineTeam} from "react-icons/ai";
import axios from "axios";

export default function Navbar() {


  const [activeSidebar, setActiveSidebar] = useAtom(activeSidebarAtom);
  const {decodedToken} = useJwt(localStorage.getItem('token') ?? '');
  const navigate = useNavigate();

  function signOut() {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common['Authorization'];
    return navigate("/login")
  }

  return (
    <>
      <div className="flex items-center justify-end bg-white h-16 px-20 gap-8">
        <VscLayoutSidebarLeft onClick={() => setActiveSidebar(!activeSidebar)} size={18}/>
        <Link to="/members">
          <FaUsers size={20}/>
        </Link>
        <Link to="/departments">
          <AiOutlineTeam size={20}/>
        </Link>
        <Link to="/dashboard">
          <MdDashboardCustomize size={20}/>
        </Link>
        <div className="hover:bg-gray-50 py-2 px-8">
          <p className="text-[15px] font-medium">{decodedToken?.email}</p>
          <p className="uppercase text-[12px] text-gray-400">{decodedToken?.role}</p>
        </div>
        <CiLogin onClick={signOut} size={20}/>
      </div>
    </>
  )
}
