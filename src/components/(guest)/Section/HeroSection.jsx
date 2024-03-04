import {MacbookScrollHero} from "@/components/MacbookScrollHero.jsx";
import HeroSectionContent from "@/components/HeroSectionContent.jsx";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="grid grid-cols-2 px-28">
        <div className="mt-40">
          <HeroSectionContent/>
        </div>
        <MacbookScrollHero/>
      </div>
    </section>
  )
}
