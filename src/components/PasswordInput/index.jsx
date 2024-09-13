import { useState } from "react"


// eslint-disable-next-line react/prop-types
export default function PasswordInput({type, text}){

    const[password, setPassword] = useState('')

    console.log(password)
    return(
        <input type={type} placeholder={text}  className="p-2 rounded-xl border-yellow-400 border-2 w-full" onBlur={e => setPassword(e.target.value)}/>
    )
}