import Logo from "@/components/Logo.jsx";
import Theme from "@/components/Theme.jsx";
import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar() {

    const [activeItem, setActiveItem] = useState("");

    function handleItemClick(name) {
        setActiveItem(name);
    }

    return (
        <div className="w-full flex items-center justify-between text-[14px] h-16 px-28">
            <Logo/>
            <ul className="flex items-center cursor-pointer gap-6">
                <li onClick={() => handleItemClick("home")}
                    className={`${activeItem === 'home' ? 'active-item' : ''}`}>Home
                </li>
                <li onClick={() => handleItemClick("feature")}
                    className={`${activeItem === 'feature' ? 'active-item' : ''}`}>Feature
                </li>
                <li onClick={() => handleItemClick("about")}
                    className={`${activeItem === 'about' ? 'active-item' : ''}`}>About Us
                </li>
                <li onClick={() => handleItemClick("contact")}
                    className={`${activeItem === 'contact' ? 'active-item' : ''}`}>Contact Us
                </li>
            </ul>
            <div className="flex items-center gap-3">
                <Theme/>
                <Link to="/register">
                    <Button variant="ghost">Register</Button>
                </Link>
                <Link to="/login">
                    <Button className="px-10">Login</Button>
                </Link>
            </div>
        </div>
    )
}
