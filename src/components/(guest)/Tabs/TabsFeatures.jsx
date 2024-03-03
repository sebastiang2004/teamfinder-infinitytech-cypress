import {AiFillDashboard} from "react-icons/ai";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import {Menu} from "lucide-react";

export default function TabsFeatures() {

  const features = [{
    id: 1,
    name: "dashboard",
    description: "asd dasd dsadas dasda",
    icon: "",
    value: "dashboard"
  },
    {
      id: 2,
      name: "dashboard",
      description: "asd dasd dsadas dasda",
      icon: "",
      value: "adsa"
    },
    {
      id: 3,
      name: "dashboard",
      description: "asd dasd dsadas dasda",
      icon: "",
      value: "fsd"
    },
    {
      id: 4,
      name: "dashboard",
      description: "asd dasd dsadas dasda",
      icon: "",
      value: ""
    },
    {
      id: 5,
      name: "dashboard",
      description: "asd dasd dsadas dasda",
      icon: "",
      value: ""
    },
    {
      id: 6,
      name: "dashboard",
      description: "asd dasd dsadas dasda",
      icon: "",
      value: ""
    },
    {
      id: 7,
      name: "dashboard",
      description: "asd dasd dsadas dasda",
      icon: "",
      value: ""
    }];

  return (
    <>
      <Tabs defaultValue="account" className="mt-8 h-20 w-full bg-primary-purple rounded-md">
        <TabsList className="flex justify-center gap-4">
          {features.map(function (feature) {
            return (
              <TabsTrigger key={feature.id} value={feature.value} className="p-4  rounded bg-white dark:text-black">
                <Menu/>
                Account
              </TabsTrigger>
            )
          })}
        </TabsList>
        {features.map(function (feature) {
          return (
            <TabsContent key={feature.id} value={feature.value} className="w-full ">
              <div className="flex items-center justify-between w-full mt-10 ">
                <img src="https://i.ibb.co/sjFB0NM/Captura-de-ecran-din-2024-03-03-la-12-00-02.png" alt=""/>
                <div className="flex">
                  <p>lorem ipsum</p>
                  <p>lorem ipsum</p>
                </div>
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </>
  )
}
