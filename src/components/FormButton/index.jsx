/* eslint-disable react/prop-types */


export default function FormButton({type, text}){
    return(
        <button type={type} className="bg-yellow-400 rounded-xl p-2 w-full">{text}</button>
    )
}