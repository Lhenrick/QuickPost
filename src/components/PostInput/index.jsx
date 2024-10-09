import { useState } from "react"
import NewPost from "../Post/newPost";
import { createPost } from "../../Services/postServices";
import { fetchProfile } from "../../Services/userServices";

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

    async function getUserData(){
        const userData = await fetchProfile();
        return userData;
      
      }

    const makePost = async (e) => {
        e.preventDefault()
        const userData = await getUserData();
        const userId = userData._id;
        const username = userData.username
        const newPost = new NewPost(title, text, userId, username);
        await createPost(newPost);
        setText("");
        setTitle("");        
    }

    return (
        <form className="flex flex-col items-center gap-y-0.5 pt-3 w-10/12 lg:w-6/12">    
            <p className="text-white text-3xl font-semibold">Make a quick post...</p>
            <input onChange={handleTitleChange} id='titleInput' value={title} placeholder="Title" required maxLength={30} className=" text-white bg-zinc-900 w-full border-2 border-yellow-400 rounded-xl px-4 focus:outline-none focus:border-white "/>
            <textarea onChange={handleTextChange} name="NewPost" value={text} required maxLength={4000} placeholder="What's on your mind today?" className=" h-32 w-full text-white rounded-xl border-2 border-yellow-400 p-3 bg-zinc-900 focus:border-white focus:outline-none" />
            <div className="flex w-full justify-between mt-2">
                <p className="text-xs sm:text-sm md:text-md lg:text-lg text-white"> {characters} characters available</p>
                <button onClick={makePost} className="w-4/12 md:w-1/6 lg:w-2/12 bg-yellow-400 rounded-xl p-3 hover:animate-pulse hover:bg-yellow-200">Post</button>
            </div>
        </form>
    )
       
        
}

