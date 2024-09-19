/* eslint-disable react/prop-types */


export default function UserForm({btText}){

    function getInfo(event) {
        event.preventDefault()
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email);
        console.log(password);
        // Not storing data yet. Just made for testing
           
        
    }

    return(
        <form onSubmit={getInfo} className="flex flex-col items-center md:w-2/6 lg:w-2/6 gap-3">
            <input type="email" placeholder="Email@example.com" className="p-2 rounded-xl border-yellow-400 border-2 w-full"/>
            <input type="password" placeholder="Password" className="p-2 rounded-xl border-yellow-400 border-2 w-full"/>
            <button type="submit" className="bg-yellow-400 rounded-xl p-2 w-full">{btText}</button>
        </form>
    )
}