import RegisterForm from "../../components/resgisterForm";


export default function Register() {


    return (

        <div className="flex flex-col items-center sm:justify-center h-screen bg-zinc-800 ">
            <div className="flex flex-col mt-5 items-center">
                <h1 className="font-bold text-white text-md sm:text-xl md:text-3xl lg:text-4xl animate-bounce">What about a social media </h1>
                <h2 className="font-bold text-white text-sm sm:text-lg md:text-2xl lg:text-4xl animate-bounce">where people don't judge </h2>
                <h3 className="font-bold text-white text-sm sm:text-lg md:text-lg  lg:text-4xl animate-bounce">you by appearences?🎭</h3>
            </div>
            <img className="w-40 sm:w-52 md:w-60 lg:w-72" src="./quickpost-logo.png" />
            <RegisterForm btText={'Register'} />
            <p className="text-white">Already have an account? <a href="/login" className="text-yellow-400">Click here</a></p>
        </div>
    )
}