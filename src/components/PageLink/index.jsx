import { Link } from "react-router-dom";



export default function PageLink({ children, to }) {
    return (

        <Link to={to}>
            <div className="flex flex-col items-center text-yellow-400">
                {children}
            </div>
        </Link>

    )
}