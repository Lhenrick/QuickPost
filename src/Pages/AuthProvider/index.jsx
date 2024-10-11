import { createContext, useState } from "react";


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkToken = async () =>{
            if(authToken) {
                try {
                    await axios.get("https://quickpost-server-three.vercel.app/login", {headers: { Authorization: `Bearer ${authToken}`} // not working yet
                    });
                    setLoading(false);
                } catch(error) {
                    setAuthToken(null);
                    localStorage.removeItem('authToken');
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        }
        checkToken();
    },[authToken]);

    return(
        <AuthContext.Provider value={{ authToken, setAuthToken}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = ({component: component, ...rest}) => {
    const { authToken } = useAuth();

    return(
        <Route {...rest} render={props => authToken? (<Comment {...props}/>) : (<Redirect to="/QuickPost/login"/>)} />
    )
}