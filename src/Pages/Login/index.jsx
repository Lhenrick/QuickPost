import AuthenticationLogo from "../../components/AuthenticationLogo";
import UserForm from "../../components/UserForm";
// import EmailInput from "../../components/EmailInput";
// import FormButton from "../../components/FormButton";
// import PasswordInput from "../../components/PasswordInput";

export default function Login() {
    return (
        <div className="flex flex-col items-center justify-center h-screen  bg-zinc-800">
            <AuthenticationLogo />
            {/* <form className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
                <EmailInput type="email" text="email@example.com"/>
                <PasswordInput type="password" text="password" />
                <FormButton type="submit" text="Login" />
                <p className="text-white">Still dont have an account? <a href="/register" className="text-yellow-400">click here</a></p>
            </form> */}
            <UserForm btText={'Login'}/>
            <p className="text-white">Still dont have an account? <a href="/register" className="text-yellow-400">click here</a></p>
        </div>
    )
}