import {MacbookScrollHero} from "@/components/MacbookScrollHero.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import {AnimatedTooltipUser} from "@/components/AnimatedTooltipUser.jsx";

export default function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-2 px-28">
        <div className="mt-40">
          <p className="text-[50px] font-medium">We are help you <span
            className="text-primary-purple">manage</span> your tasks productively</p>
          <div className="mt-8 text-gray-400">
            <p>Redefine the way you work as a team. With us, every project becomes a success story. Discover the power
              of collaboration and innovation in
              project management. Connect, collaborate, and achieve more
              with our project management platform.</p>
          </div>
          <div className="flex items-center mt-12">
            <Link to="/register">
              <Button className="py-6 px-16">Try out platform</Button>
            </Link>
            <AnimatedTooltipUser/>
          </div>

          


        </div>
        <MacbookScrollHero/>
      </div>
    </>
  )
}
