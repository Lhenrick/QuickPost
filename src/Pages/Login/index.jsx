import AuthenticationLogo from "../../components/Logo";
import LoginForm from "../../components/LoginForm";


export default function Login() {

    localStorage.removeItem('authToken');

    return (
        <div className="flex flex-col items-center justify-center h-screen  bg-zinc-800">
            <h1 className="font-bold text-white text-4xl ">Say it to the world!</h1>
            <h2 className="font-bold text-white text-4xl animate-pulse">🌍</h2>
            <AuthenticationLogo />
            <LoginForm btText={'Login'}/>
            <p className="text-white">Still dont have an account? <a href="/register" className=" text-yellow-400">click here</a></p>
        </div>
    )
}