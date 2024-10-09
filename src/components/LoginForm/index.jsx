import { useNavigate } from "react-router-dom";
import { login } from "../../Services/loginServices";



export default function LoginForm({ btText }) {

    const navigate = useNavigate();

    function getInfo(event) {
        event.preventDefault()
        const email = event.target[0].value;
        const password = event.target[1].value;
        const loginInfo = { email, password };


        login(loginInfo).then((logged) => {

            if (logged) {
            
            navigate("/home");

            } else {
                alert('Your email or password is wrong!')
            }
        });

    }

    return (
        <form onSubmit={getInfo} className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
            <input type="email" placeholder="Email@example.com" className="p-2 rounded-xl border-yellow-400 border-2 w-full" />
            <input type="password" placeholder="Password" className="p-2 rounded-xl border-yellow-400 border-2 w-full" />
            <button type="submit" className="bg-yellow-400 rounded-xl p-2 w-full hover:animate-pulse hover:bg-yellow-200">{btText}</button>
        </form>
    )
}