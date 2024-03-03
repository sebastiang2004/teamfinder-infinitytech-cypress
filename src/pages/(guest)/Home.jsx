import Banner from "@/components/Banner.jsx";
import BenefitsSection from "@/components/(guest)/Section/BenefitsSection.jsx";
import Navbar from "@/components/(guest)/Navbar/Navbar.jsx";
import Footer from "@/components/(guest)/Footer/Footer.jsx";
import {MacbookScrollHero} from "@/components/MacbookScrollHero.jsx";
import {Button} from "@/components/ui/button.jsx";
import HeroSection from "@/components/(guest)/Section/HeroSection.jsx";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {CgBoard} from "react-icons/cg";
import {AiFillDashboard} from "react-icons/ai";
import WorkflowFeaturesSection from "@/components/(guest)/Section/WorkflowFeaturesSection.jsx";
import CharacteristiscSection from "@/components/(guest)/Section/CharacteristicsSection.jsx";


export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <div className="my-10">
        <CharacteristiscSection/>
      </div>
      <div className="my-10">
        <BenefitsSection/>
      </div>
      <div className="my-10">
        <WorkflowFeaturesSection/>
      </div>
      {/*<img src="https://i.ibb.co/sjFB0NM/Captura-de-ecran-din-2024-03-03-la-12-00-02.png" className="w-full"/>*/}
      <Banner/>
      <Footer/>
      {/*<p>One stop solution</p>*/}
      {/*<img src="https://i.ibb.co/sjFB0NM/Captura-de-ecran-din-2024-03-03-la-12-00-02.png" className="w-full"*/}
      {/*     alt=""/>*/}
    </>
  );
}
