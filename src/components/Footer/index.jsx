import PageLink from "../PageLink";
import { FaSearch, FaUser, FaHome } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="flex justify-center sticky inset-x-0 py-2 bottom-0 h-1/6 bg-zinc-900 text-white gap-3">
            <div className="flex flex-col items-center">
                <PageLink to={"/search"}><FaSearch /></PageLink>
                <span>Search</span>
            </div>
            <div className="flex flex-col items-center">
                <PageLink to={"/"}><FaHome /></PageLink>
                <span>Home</span>
            </div>
            <div className="flex flex-col items-center">
                <PageLink to="/register"><FaUser /></PageLink>
                <span>Register</span>
            </div>
        </footer>
    )
}