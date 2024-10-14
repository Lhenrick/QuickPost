import { Link } from "react-router-dom";
import HeaderLogo from "../HeaderLogo";



export default function Header() {
    
    return (
        <header className=" flex justify-center bg-gradient-to-bl from-zinc-950 via-neutral-800 to-zinc-950 h-20 items-center">
                <Link to="/QuickPost/home"><HeaderLogo/></Link>            
        </header>
    )
}