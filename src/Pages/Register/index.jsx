
export default function Register(){
    return(
        <div className="flex flex-col items-center sm:justify-center h-screen bg-zinc-800 ">
            <img className="w-40 sm:w-52 md:w-60 lg:w-72" src="quickpost-logo.png"/>
            <form className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
                <input type="email" placeholder="email@example.com" className="p-2 rounded-xl border-yellow-400 border-2 w-full" />
                <input type="password" placeholder="Password" className="p-2 rounded-xl border-yellow-400 border-2 w-full" />
                <button type="submit" className="bg-yellow-400 rounded-xl p-2 w-full">Create a new account</button>
                <p className="text-white">Already have an account? <a href="/" className="text-yellow-400">Click here</a></p>            
            </form>
        </div>
    )
}