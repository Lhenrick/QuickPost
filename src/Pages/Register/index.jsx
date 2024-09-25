// import EmailInput from "../../components/EmailInput";
// import FormButton from "../../components/FormButton";
// import PasswordInput from "../../components/PasswordInput";

import UserForm from "../../components/UserForm";

export default function Register(){


    return(
        
        <div className="flex flex-col items-center sm:justify-center h-screen bg-zinc-800 ">
            <h1 className="font-bold text-white text-5xl animate-bounce">What about a social media </h1>
            <h2 className="font-bold text-white text-4xl animate-bounce">where people don't judge you by appearences?🎭</h2>
            <img className="w-40 sm:w-52 md:w-60 lg:w-72" src="./quickpost-logo.png"/>
            <UserForm btText={'Register'}/>
            <p className="text-white">Already have an account? <a href="/login" className="text-yellow-400">Click here</a></p>
        </div>
    )
}