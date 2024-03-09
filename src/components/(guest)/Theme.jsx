import {useTheme} from "@/components/ThemeProvider.jsx";
import {Moon, Sun} from "lucide-react";

export default function Theme() {

    const {theme, setTheme} = useTheme();

    return (
        <>
            {theme === "dark" ?
                <Sun onClick={() => setTheme("light")}/> :
                <Moon onClick={() => setTheme("dark")}/>
            }
        </>
    )
}
