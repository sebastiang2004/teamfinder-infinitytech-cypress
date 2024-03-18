import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs.jsx";

export default function TabsCustom({tabs}) {
  return (
    <Tabs defaultValue="Profile">
      {/*<div className="flex w-full justify-center">*/}
        <TabsList className="px-10 py-6">
          {tabs.map(function (tab) {
            return (
              <TabsTrigger key={tab.id} value={tab.name} className="py-3">{tab.name}</TabsTrigger>
            )
          })}
        </TabsList>
      {/*</div>*/}
      {tabs.map(function (tab) {
        return (
          <TabsContent key={tab.id} value={tab.name} className="mt-20">{tab.content}</TabsContent>
        )
      })}
    </Tabs>
  )
}
