import {RiComputerFill} from "react-icons/ri";
import {MdEmail} from "react-icons/md";
import TabsCustom from "@/components/TabsCustom.jsx";

export default function UserProfileSection({member}) {

  const projectTabs = [
    {
      id: 1,
      name: "Current Projects"
    },
    {
      id: 2,
      name: "Past Projects"
    }
  ];

  return (
    <>
      <div className="grid grid-cols-[150px_auto] items-center gap-5 mt-12">
        <img src="https://i.ibb.co/PxqtdnL/istockphoto-1341046662-612x612.jpg" className="object-cover rounded-full w-24 h-24" alt=""/>
        <div>
          <p className="text-[18px] text-primary-purple font-medium">{member?.name}</p>
          <div className="flex items-center text-gray-600 text-[15px] gap-8 mt-3">
            <div className="flex items-center gap-2">
              <RiComputerFill/>
              <p>{member?.role}</p>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail/>
              <p>{member?.email}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="custom-label text-[15px]">About</p>
        <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aliquid amet
          assumenda autem beatae cupiditate dignissimos dolor doloremque labore nobis officiis praesentium, quis
          recusandae, rerum sapiente velit veritatis vero.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Adipisci aliquam aliquid amet assumenda autem beatae cupiditate dignissimos dolor doloremque labore nobis
          officiis praesentium, quis recusandae, rerum sapiente velit veritatis vero.</p>
      </div>
      <div className="mt-10">
        <p className="custom-label text-[15px]">Department</p>
        <p className="mt-3">{member?.department ?? "This member is not assigned to any department"}</p>
      </div>
      <div className="mt-10">
      <p className="custom-label text-[15px]">Professional Skills</p>
        <p className="mt-3">Frontend Department - level 2</p>
      </div>
      <div className="mt-10">
        <p className="custom-label text-[15px]">Work experience</p>
        <div className="mt-3">
          <TabsCustom tabs={projectTabs}/>
        </div>
      </div>
      <div className="mt-14 flex justify-between gap-10">
        <div className="bg-gray-50 px-10 py-5 rounded-md flex flex-col justify-center">
          <p className="custom-label mt-0">Total Projects</p>
          <p className="text-[18px] text-primary-purple mt-1">32</p>
        </div>
        <div className="bg-gray-50 px-8 py-5 rounded-md flex flex-col justify-center">
          <p className="custom-label mt-0">Current Projects</p>
          <p className="text-[18px] text-primary-purple mt-1">32</p>
        </div>
        <div className="bg-gray-50 px-10 py-5 rounded-md flex flex-col justify-center">
          <p className="custom-label mt-0">Past Projects</p>
          <p className="text-[18px] text-primary-purple mt-1">32</p>
        </div>
        <div className="bg-gray-50 px-12 py-5 rounded-md flex flex-col justify-center">
          <p className="custom-label mt-0">Created At</p>
          <p className="text-[18px] text-primary-purple mt-1">32</p>
        </div>
      </div>
    </>
  )
}
