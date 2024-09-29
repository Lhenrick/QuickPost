import { useState } from "react"
import NewPost from "../Post/newPost";
import { createPost } from "../../Services/postServices";

export default function PostInput() {

    const[text, setText] = useState('');
    const[title, setTitle] = useState('');
    const[characters, setCharacters] = useState(4000);

    

    const handleTextChange = (e) =>{
        const text = e.target.value;
        setText(text)
        setCharacters(4000 - e.target.value.length) 
    }


    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
       
    }

    const makePost = (e) => {
        e.preventDefault()
        const newPost = new NewPost(title, text)
        createPost(newPost)
        setTitle('')
        setText('')
                
    }

    return (
        <form className="flex flex-col items-center gap-y-0.5 pt-3 w-10/12 lg:w-6/12">    
            <p className="text-white text-3xl font-semibold">Make a quick post...</p>
            <input onChange={handleTitleChange} id='titleInput' placeholder="Title" required maxLength={30} className=" text-white bg-zinc-900 w-full border-2 border-yellow-400 rounded-xl px-4"/>
            <textarea onChange={handleTextChange} name="NewPost" required maxLength={4000} placeholder="What's on your mind today?" className=" h-32 w-full text-white rounded-xl border-2 border-yellow-400 p-3 bg-zinc-900" />
            <div className="flex w-full justify-between mt-2">
                <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white"> {characters} characters available</p>
                <button onClick={makePost} className="w-4/12 md:w-1/6 lg:w-2/12 bg-yellow-400 rounded-xl p-3 hover:animate-pulse hover:bg-yellow-200">Post</button>
            </div>
        </form>
    )
       
        
}

