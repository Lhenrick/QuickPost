import { Navigate } from "react-router-dom";



    const PrivateRoute = ({element: Component, ...rest}) => {
    const isAuthenticated = !!localStorage.getItem('authToken');

    return isAuthenticated ? <Component {...rest}/> : <Navigate to="/QuickPost/login" />;


}
   
export default PrivateRoute;
