/* eslint-disable react/prop-types */

import User from "../../Pages/Register/newUser";
import { registerUser } from "../../Services/registerServices";


export default function RegisterForm({btText}){

    function getInfo(event) {
        event.preventDefault()
        const username = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        
        const newUser = new User(username, email, password);
        registerUser(newUser)
           
        
    }

    return(
        <form onSubmit={getInfo} className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
            <input type="text" placeholder="Username" className="p-2 rounded-xl border-yellow-400 border-2 w-full"/>
            <input type="email" placeholder="Email@example.com" className="p-2 rounded-xl border-yellow-400 border-2 w-full"/>
            <input type="password" placeholder="Password" className="p-2 rounded-xl border-yellow-400 border-2 w-full"/>
            <button type="submit" className="bg-yellow-400 rounded-xl p-2 w-full hover:animate-pulse hover:bg-yellow-200">{btText}</button>
        </form>
    )
}