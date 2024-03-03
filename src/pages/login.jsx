import LoginForm from "@/components/(guest)/Form/LoginForm.jsx";
import {BackgroundBoxes} from "@/components/BackgroundBoxes.jsx";


export default function Login() {
  return (
    <>
      <div className="grid grid-cols-2 min-h-screen">
        <BackgroundBoxes/>
        <div className="flex flex-col justify-center px-32">
          <LoginForm/>
        </div>
      </div>
    </>
  )
}
