import PageLink from "../PageLink";
import { FaSearch, FaUser, FaHome } from "react-icons/fa";


export default function Menu() {
    return (
        <menu className="flex justify-center sticky inset-0 w-full  py-2 bg-zinc-900 text-white gap-3">
            <li className="flex flex-col items-center border-2 border-zinc-900 p-2 rounded-full hover:bg-zinc-700 shadow-lg shadow-black hover:animate-pulse ">
                <PageLink to={"/search"}><FaSearch /></PageLink>
                <span>Search</span>
            </li>
            <li className="flex flex-col items-center border-2 border-zinc-900 p-2 rounded-full hover:bg-zinc-700 shadow-lg shadow-black hover:animate-pulse">
                <PageLink to={"/"}><FaHome /></PageLink>
                <span>Home</span>
            </li>
            <li className="flex flex-col items-center border-2 border-zinc-900 p-2 rounded-full hover:bg-zinc-700 shadow-lg shadow-black hover:animate-pulse">
                <PageLink to="/register"><FaUser /></PageLink>
                <span>Register</span>
            </li>
        </menu>
    )
}