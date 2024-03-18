import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/(guest)/ui/card"
import {AnimatedTooltipUser} from "@/components/(guest)/AnimatedTooltipUser.jsx";
import {MdDeleteOutline, MdModeEdit} from "react-icons/md";
import {TbClockHour9} from "react-icons/tb";
import {FaTasks} from "react-icons/fa";
import {Link} from "react-router-dom";

export default function ProjectCard() {
  return (
    <Link to="/projects/slug">
      <Card className="hover:shadow-md rounded-xl dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-[18px]">
            <p
              className="flex justify-center text-[10px] rounded-full text-white bg-purple-400 w-28 py-1">Programming</p>
            <p className="mt-4">E-learning Dashboard</p>
          </CardTitle>
          <CardDescription>8 Task</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-20">
            <AnimatedTooltipUser/>
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center text-gray-400 text-[13px] gap-2">
            <TbClockHour9/>
            <p>2 days ago</p>
          </div>
          <div className="flex items-center gap-3">
            <FaTasks size={17}/>
            <MdModeEdit size={18}/>
            <MdDeleteOutline size={20}/>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}
