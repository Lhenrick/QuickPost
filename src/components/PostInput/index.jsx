
 
import { useState } from "react"
import NewPost from "../Post/newPost";





export default function PostInput({onPostCreated}) {

    const[text, setText] = useState('');
    const[title, setTitle] = useState('');
    const[characters, setCharacters] =useState(4000);

    const handleTextChange = (e) =>{
        setText(e.target.value)
        setCharacters(characters - 1) 
        // figure out a way to make it recover the value if I delete something
    }


    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }

    const makePost = (e) => {
        e.preventDefault()
        const newPost = new NewPost(title, text)
        onPostCreated(newPost)        
    }

    return (
        <form className="flex flex-col items-center gap-y-0.5 pt-3 w-10/12 lg:w-6/12">    
            <p className="text-white">Make a quick post...</p>
            <input onChange={handleTitleChange} id='titleInput' placeholder="Title" required maxLength={60} className=" text-white bg-zinc-900 w-full border-2 border-yellow-400 rounded-xl px-4"/>
            <textarea onChange={handleTextChange} name="NewPost" required maxLength={4000} placeholder="What's on your mind today?" className=" h-32 w-full text-white rounded-xl border-2 border-yellow-400 p-3 bg-zinc-900" />
            <div className="flex w-full justify-between mt-2">
                <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white"> {characters} characters available</p>
                <button onClick={makePost} className="w-4/12 md:w-1/6 lg:w-2/12 bg-yellow-400 rounded-xl  p-3">Post</button>
            </div>
        </form>
    )
       
        
}

