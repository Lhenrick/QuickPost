import { useState } from "react"



export default function PostInput() {

    const[text, setText] = useState('');
    const[title, setTitle] = useState('')

    const handleTextChange = (e) =>{
        setText(e.target.value)
    }


    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }

    const getText = (e) => {
        e.preventDefault()
       console.log(text)
       console.log(title)
       
        
    }

    return (
        <form className="flex flex-col items-center gap-y-0.5 pt-3 w-10/12">
            
            <p className="text-white">Make a post...</p>
            <input onChange={handleTitleChange} placeholder="Title" className=" text-white bg-zinc-900 w-full border-2 border-yellow-400 rounded-xl px-4"/>
            <textarea onChange={handleTextChange} name="NewPost" className=" h-32 w-full text-white rounded-xl border-2 border-yellow-400 p-3 bg-zinc-900" />
            <div className="flex w-full justify-between mt-2">
                <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white">X characters available</p>
                <button onClick={getText} className="w-4/12 md:w-1/6 lg:w-1/12 bg-yellow-400 rounded-xl  p-3">Post</button>
            </div>
        </form>
    )
       
        
}