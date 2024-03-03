import RegisterForm from "@/components/(guest)/Form/RegisterForm.jsx";

export default function Register() {
    return (
        <>
            <div className="grid grid-cols-2">
                <div className="flex flex-col justify-center px-32">
                    <RegisterForm/>
                </div>
                <img src="https://i.ibb.co/km1CjYr/No-Image-Placeholder-svg.png" className="w-full object-cover"
                     alt=""/>
            </div>
        </>
    )
}
