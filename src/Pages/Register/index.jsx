// import EmailInput from "../../components/EmailInput";
// import FormButton from "../../components/FormButton";
// import PasswordInput from "../../components/PasswordInput";

import UserForm from "../../components/UserForm";

export default function Register(){


    return(
        
        <div className="flex flex-col items-center sm:justify-center h-screen bg-zinc-800 ">
            <img className="w-40 sm:w-52 md:w-60 lg:w-72" src="./quickpost-logo.png"/>
            {/* <form className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
                <EmailInput type="email" text="email@example.com"/>
                <PasswordInput type="password" text="Password"/>
                <FormButton type="submit" text="Create a new account"/>
                <p className="text-white">Already have an account? <a href="/Login" className="text-yellow-400">Click here</a></p>            
            </form> */}
            <UserForm/>
            <p className="text-white">Already have an account? <a href="/Login" className="text-yellow-400">Click here</a></p>
        </div>
    )
}