import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/(guest)/ui/sheet"
import {atom} from "jotai";
import {activeSidebarAtom} from "@/store/index.js";
import {FaStar} from "react-icons/fa";

export default function SidebarSheet() {

  const activeSidebar = atom(activeSidebarAtom);

  return (
    <Sheet>
      <SheetTrigger className="flex items-center gap-4 mt-5 font-medium sidebar-title">
        <FaStar className="sidebar-icon text-[35px]"/>
        <p className={`${!activeSidebar ? 'hidden' : 'sm:block'}`}>Preferences</p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Account Settings</SheetTitle>
          <SheetDescription>
            <p>Permite notificarile</p>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
