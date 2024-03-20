import Modal from "@/components/Modal.jsx";
import Layout from "@/pages/(auth)/layout.jsx";
import {InputAnimated} from "@/components/(guest)/ui/input-animated.jsx";
import ProjectCard from "@/components/(auth)/Card/ProjectCard.jsx";
import ProjectForm from "@/components/(auth)/Form/ProjectForm.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import TabsCustom from "@/components/TabsCustom.jsx";

export default function Projects() {

  const projectTabs = [
    {
      id: 1,
      name: "Current Projects",
      content: <ProjectCard/>
    },
    {
      id: 2,
      name: "Past Projects",
      content: <ProjectCard/>
    },

  ]

  return (
    <Layout>
      <p className="text-[20px]">Projects</p>
      <div className="flex gap-52 mt-10">
        <Modal title={<Button className="px-10">Create a project</Button>} subtitle="Add a project"
               formElement={<ProjectForm/>}/>
        {/*<InputAnimated type="email" placeholder="Search a project..." className="px-8 w-96"/>*/}
      </div>
      <div className="mt-10">
        <TabsCustom tabs={projectTabs}/>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-10">
      </div>
    </Layout>

  )
}
