import Layout from "@/pages/(auth)/layout.jsx";
import TabsCustom from "@/components/TabsCustom.jsx";
import UserProfileSection from "@/components/(auth)/Section/UserProfileSection.jsx";

export default function MemberId() {

  const tabs = [
    {
      id: 1,
      name: "Profile",
      content: <UserProfileSection/>
    },
    {
      id: 2,
      name: "Edit details",
      content: ""
    },
    {
      id: 3,
      name: "Settings",
      // content:
    },
    {
      id: 4,
      name: "Projects",
      // content:
    },
    {
      id: 5,
      name: "Profile Settings",
      // content:
    },
  ];

  return (
    <Layout>
      <TabsCustom tabs={tabs}/>
      {/*<p>Projects</p>*/}
      {/*<p>edit account</p>*/}
      {/*<p>nr of projects completed</p>*/}
      {/*<p>nr of projects </p>*/}
      {/*<p>projects</p>*/}
      {/*<p>edit profile: </p>*/}
      {/*<p>delete user</p>*/}
    </Layout>
  )
}
