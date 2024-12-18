import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import RegisterForm from "../../components/resgisterForm";


export default function Register() {


    return (

        <div className="flex flex-col items-center sm:justify-center py-10 h-full m-h-screen bg-[url('/assets/images/thunder.gif')] bg-cover bg-no-repeat ">
            <div className="flex flex-col mt-5 items-center">
                <h1 className="font-bold text-white text-md sm:text-xl md:text-3xl lg:text-4xl animate-bounce">Whatever you want to say🤭 </h1>
                <h2 className="font-bold text-white text-sm sm:text-lg md:text-2xl lg:text-4xl animate-bounce">Whenever you want to say🤩 </h2>
            </div>
            <Logo/>
            <RegisterForm btText={'Register'} />
            <p className="mt-2 text-white">Already have an account? <Link to="/QuickPost/login" className="text-yellow-400">Click here</Link></p>
        </div>
    )
}