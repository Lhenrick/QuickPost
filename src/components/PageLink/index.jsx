import { Link } from "react-router-dom";



export default function PageLink({ children, to }) {
    return (

        <Link to={to}>
            <div className="flex flex-col size-4 sm:size-8 items-center text-yellow-400">
                {children}
            </div>
        </Link>

    )
}