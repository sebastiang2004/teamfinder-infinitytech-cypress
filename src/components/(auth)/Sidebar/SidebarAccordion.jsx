import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/(guest)/ui/accordion.jsx"
import {MdDashboardCustomize} from "react-icons/md";
import {GoProjectSymlink} from "react-icons/go";
import {AiOutlineTeam} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useAtom} from "jotai/index";
import {activeSidebarAtom} from "@/store/index.js";
import {FaUserAlt, FaUsers} from "react-icons/fa";

export default function SidebarAccordion() {


  const [activeSidebar] = useAtom(activeSidebarAtom);
  const items = [
    {
      id: 1,
      category: "Dashboard",
      subcategories: [
        {
          id: 1,
          name: "Admin Dashboard",
          link: `/dashboard`,
        },
        {
          id: 2,
          name: "Reports",
          link: "/reports",
        },
      ],
      icon: <MdDashboardCustomize/>,
    },
    {
      id: 3,
      category: "Departments",
      subcategories: [
        {id: 5, name: "View all departments", link: "/departments"},
      ],
      icon: <AiOutlineTeam/>,
    },
    {
      id: 4,
      category: "Members",
      subcategories: [
        {id: 5, name: "Add a member", link: "/members"},
      ],
      icon: <FaUsers />,
    },
    {
      id: 2,
      category: "Projects",
      subcategories: [
        {
          id: 3,
          name: "View all projects",
          link: `/projects`,
        },
        // {
        //   id: 4,
        //   name: "Create a project",
        //   link: `/projects`,
        // },
      ],
      icon: <GoProjectSymlink/>,
    },
    {
      id: 5,
      category: "Abilities",
      subcategories: [
        {id: 5, name: "Abilties", link: "/abilities"},
      ],
      icon: <FaUsers />,
    },
    {
      id: 6,
      category: "Sign Up URL",
      subcategories: [
        {id: 5, name: "Add a member", link: "/members"},
      ],
      icon: <FaUserAlt size={16} />,
    },

    // {
    //   id: 5,
    //   category: "Team",
    //   subcategories: [
    //     {id: 5, name: "View all teams", link: ""},
    //     {id: 6, name: "Create a team", link: ""},
    //   ],
    //   icon: <AiOutlineUserSwitch/>,
    // },
    // {
    //   id: 6,
    //   category: "Notifications",
    //   icon: <IoMdNotifications/>,
    // },
    // {
    //   id: 7,
    //   category: "User Details",
    //   subcategories: [
    //     {id: 5, name: "User Details", link: "/user-details"},
    //   ],
    //   icon: <IoSettingsSharp />,
    // },
  ];

  return (
    <Accordion type="single" collapsible>
      {items.map(function (item) {
        return (
          <AccordionItem key={item.id} value={item.id.toString()}>
            <AccordionTrigger className="sidebar-title">
              <div className="flex items-center gap-4">
                <div className="sidebar-icon">{item.icon}</div>
                <p className={`${activeSidebar ? 'hidden' : ''}`}>{item.category}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className={`${activeSidebar ? 'hidden' : ''}`}>
              {item.subcategories?.map(function (subcategory) {
                return (
                  <Link key={subcategory.id} to={subcategory.link}>
                    <div key={subcategory.id} className="ps-10">
                      <p className="sidebar-subtitle">{subcategory.name}</p>
                    </div>
                  </Link>
                );
              })}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  )
}
