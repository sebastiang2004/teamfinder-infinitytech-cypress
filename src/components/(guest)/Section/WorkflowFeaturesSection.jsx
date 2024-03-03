import TabsFeatures from "@/components/Tabs/TabsFeatures.jsx";

export default function WorkflowFeaturesSection() {
  return (
    <>
      <div className="flex flex-col items-center px-28">
        <p className="font-bold text-[50px]">Everything you need for any workflow</p>
        <p className="text-gray-400 text-[17px] mt-5">Easily build your ideal workflow with Team App building block.</p>
        <TabsFeatures/>
      </div>
    </>
  )
}
