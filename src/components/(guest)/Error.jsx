import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

export default function Error() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img
        src="https://i.ibb.co/7GYRkZR/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.png"
        className="w-[600px]"
        alt=""/>
      <p className="text-[25px]">Page not found</p>
      <p className="text-[25px] my-5">We couldn't find what you're looking for, but it's probabily in here something
        !</p>
      <Link to="/">
        <Button className="mt-5 py-6 px-16 bg-primary-purple">Back to homepage</Button>
      </Link>
    </div>
  )
}
