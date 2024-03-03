import Logo from "@/components/Logo.jsx";
import {ArrowUp} from "lucide-react";

export default function Footer() {
  return (
    <div className="h-32 flex flex-col justify-center px-28 bg-primary-purple dark:bg-primary-blue text-white">
      <div className="flex justify-between">
        <Logo/>
        <ul className="flex items-center gap-5 font-normal text-[14px] cursor-pointer">
          <li>Home</li>
          <li>Feature</li>
          <li>Benefits</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li className="flex items-center justify-center border border-gray-400 rounded-full w-8 h-8 animate-bounce">
            <ArrowUp/>
          </li>
        </ul>
      </div>
    </div>
  )
}
