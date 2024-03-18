import EmployeeRegisterForm from "@/components/(guest)/Form/EmployeeRegisterForm.jsx";
import BackgroundGradient from "@/components/(guest)/BackgroundGradient.jsx";

export default function RegisterEmployee() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <EmployeeRegisterForm/>
      <BackgroundGradient/>
    </div>
  )
}
