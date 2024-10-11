import PageLink from "../PageLink";
import { FaSearch, FaUser, FaHome } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { useNavigate } from "react-router-dom";


export default function Menu() {

    const navigate = useNavigate();

    function logoff(){
        localStorage.removeItem('authToken');
        navigate('/QuickPost/login')
    }


    return (
        <menu className="flex justify-center sticky inset-0 w-full  py-2 bg-zinc-900 text-white gap-3">
            <li className="flex flex-col items-center border-2 border-zinc-900 p-2 rounded-full hover:bg-zinc-700 shadow-lg shadow-black hover:animate-pulse">
                <PageLink to={"/QuickPost/search"}>
                    <FaSearch className="size-8"/>   
                </PageLink>
            </li>
            <li className="flex flex-col items-center border-2 border-zinc-900 p-2 rounded-full hover:bg-zinc-700 shadow-lg shadow-black hover:animate-pulse">
                <PageLink to={"/QuickPost/home"}>
                    <FaHome className="size-8"/>        
                </PageLink>
            </li>
            <li className="flex flex-col items-center border-2 border-zinc-900 p-2 rounded-full hover:bg-zinc-700 shadow-lg shadow-black hover:animate-pulse">
                <PageLink to="/QuickPost/profile">
                    <FaUser className="size-8"/>                  
                </PageLink>
            </li>
            <li className="flex flex-col items-center border-2 border-zinc-900 p-2 rounded-full hover:bg-zinc-700 shadow-lg shadow-black hover:animate-pulse">
                <PageLink to="/QuickPost/login">
                    <ImExit onClick={logoff} className="size-8"/>                  
                </PageLink>
            </li>
        </menu>
    )
}