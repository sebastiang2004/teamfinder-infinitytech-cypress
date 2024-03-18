import SidebarAccordion from "@/components/(auth)/Sidebar/SidebarAccordion.jsx";
import Logo from "@/components/(guest)/Logo.jsx";
import SidebarSheet from "@/components/(auth)/Sidebar/SidebarSheet.jsx";
import Theme from "@/components/(guest)/Theme.jsx";
import {CiLogin} from "react-icons/ci";
import {activeSidebarAtom} from "@/store/index.js";
import {useAtom} from "jotai/index";
import {VscLayoutSidebarLeft} from "react-icons/vsc";

export default function Sidebar() {

  const [activeSidebar, setActiveSidebar] = useAtom(activeSidebarAtom);

  return (
    <div className={`sidebar sm:block hidden ${activeSidebar ? 'md:min-w-[30px] max-w-[30px]' : 'md:min-w-[250px] md:max-w-[250px]'} `}>
      <div className="flex items-center justify-between">
        <Logo/>
        <div onClick={() => setActiveSidebar(!activeSidebar)}>
          <VscLayoutSidebarLeft className={`cursor-pointer ${activeSidebar ? 'hidden' : 'md:block sm:hidden'}`}/>
        </div>
      </div>
      <div className="mt-14">
        <SidebarAccordion/>
        {/*<SidebarSheet/>*/}
      </div>
      {/*<div className="flex items-center justify-between" >*/}
      {/*  <Theme/>*/}
      {/*  <CiLogin size={25}/>*/}
      {/*</div>*/}
    </div>
  )


}



