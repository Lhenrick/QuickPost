import AuthenticationLogo from "../../components/AuthenticationLogo";
import UserForm from "../../components/UserForm";


export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen  bg-zinc-800">
            <h1 className="font-bold text-white text-4xl animate-bounce">Make a post!</h1>
            <h2 className="font-bold text-white text-4xl animate-bounce">But who said it's yours?🙈🙊🙉</h2>
            <AuthenticationLogo />
            <UserForm btText={'Login'}/>
            <p className="text-white">Still dont have an account? <a href="/register" className="text-yellow-400">click here</a></p>
        </div>
    )
}