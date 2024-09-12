import { Link } from "react-router-dom";


// eslint-disable-next-line react/prop-types
export default function PageLink({children, to}){
    return(
        <Link to={to}>{children}</Link>
    )
}