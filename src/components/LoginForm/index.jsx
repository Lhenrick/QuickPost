import { useNavigate } from "react-router-dom";
import { login } from "../../Services/loginServices";



export default function LoginForm({ btText }) {

    const navigate = useNavigate();

    function getInfo(event) {
        event.preventDefault()
        const email = event.target[0].value;
        const password = event.target[1].value;
        const loginInfo = { email, password };

        
       try{ login(loginInfo).then((logged) => {

            if(logged) {
            
            navigate("/QuickPost/home");

            } else {
                alert("Your email or password is wrong!");
            }
        })}catch(error){
            alert("Something wrong with the server, try again later.");
        }

    }

    

    return (
        <form onSubmit={getInfo} className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
            <input type="email" placeholder="Email@example.com" className="p-2 rounded-xl text-white border-yellow-400 bg-zinc-900 border-2 w-full" />
            <input type="password" placeholder="Password" className="p-2 rounded-xl text-white border-yellow-400 bg-zinc-900 border-2 w-full" />
            <button type="submit" className="bg-yellow-400 rounded-xl p-2 w-full hover:animate-pulse hover:bg-yellow-200">{btText}</button>
        </form>
    )
}