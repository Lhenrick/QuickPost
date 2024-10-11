import Logo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";
import { Link } from "react-router-dom";


export default function Login() {

    localStorage.removeItem('authToken');

    return (
        <div className="flex flex-col items-center justify-center h-screen  bg-zinc-800">
            <h1 className="font-bold text-white text-4xl ">Say it to the world!</h1>
            <h2 className="font-bold text-white text-4xl animate-pulse">🌍</h2>
            <Logo />
            <LoginForm btText={'Login'}/>
            <p className="mt-2 text-white">Still dont have an account? <Link to="/QuickPost/register" className=" text-yellow-400">Click here</Link></p>
        </div>
    )
}