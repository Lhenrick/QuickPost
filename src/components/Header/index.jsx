import { Link } from "react-router-dom";
import HeaderLogo from "../HeaderLogo";



export default function Header() {
    return (
        <header className=" flex justify-center bg-zinc-900 h-20 items-center">
                <Link to="/QuickPost/home"><HeaderLogo/></Link>            
        </header>
    )
}