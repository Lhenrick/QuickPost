import { useState } from "react"
import NewPost from "../Post/newPost";
import { createPost } from "../../Services/postServices";
import { fetchProfile } from "../../Services/userServices";
import getDate from "../getDate";
import getHour from "../getHour";

export default function PostInput() {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [characters, setCharacters] = useState(4000);

    const [titleError, setTitleError] = useState('');
    const [textError, setTextError] = useState('');


    const handleTextChange = (e) => {
        const text = e.target.value;
        const minLength = 10;

         if(text.length == 0){
            setTextError('')
         } else if(text.length < 10){
            setTextError(`Your post must have at least ${minLength} characters!`);
        } else {
            setTextError('')
        }

        setText(text)
        setCharacters(4000 - text.length)
    }


    const handleTitleChange = (e) => {
        const title = e.target.value 
        const minLength = 4;
        if(title.length == 0){
            setTitleError('')
        } else if(title.length < 4){
            setTitleError(`The title must have at least ${minLength} characters!`);
        } else {
            setTitleError('')
        }
        setTitle(title)

    }

    const makePost = async (e) => {
        e.preventDefault();

        if(titleError){
            setTitleError(`Please, fix the title issues before posting!`)        
            return;
        }

        if(textError){
            setTitleError(`Please, fix the text issues before posting!`)
            return;
        }

        setTitleError('')
        setTextError('')

        const userData = await fetchProfile();
        const userId = userData._id;
        const username = userData.username;
        const date = getDate();
        const time = getHour();
        const newPost = new NewPost(title, text, userId, username, date, time);
        await createPost(newPost);
        setText("");
        setTitle("");
    }

    return (
        <form className="flex flex-col items-center gap-y-0.5 pt-3 w-8/12 lg:w-6/12">
            <p className="text-white text-3xl font-semibold">Make a quick post...</p>
            <div className={`p-2 bg-zinc-900 border-2  rounded-xl w-full ${textError ? "border-red-500" : "border-yellow-400"}`}>
                <input onChange={handleTitleChange} id='titleInput' value={title} placeholder="Title" required maxLength={30} className={` text-white border-b-2 bg-zinc-900 w-full px-4 focus:outline-none ${titleError ? "border-red-500" : "border-yellow-400"} `} />
                <textarea onChange={handleTextChange} name="newPost" value={text} required maxLength={4000} placeholder="What's on your mind today?" className=" h-32 w-full text-white rounded-xl p-3 bg-zinc-900 focus:border-white focus:outline-none" />
            </div>
            {textError && <p className="text-red-500">{textError}</p>}
            {titleError && <p className="text-red-500">{titleError}</p>}
            <div className="flex flex-col sm:flex-row w-full justify-between mt-2">
                <p className="text-sm md:text-md lg:text-lg text-white"> {characters} characters available</p>
                <button onClick={makePost} className=" w-full h-8 py-1 sm:w-4/12 md:w-1/6 lg:w-2/12 bg-yellow-400 rounded-xl  hover:animate-pulse hover:bg-yellow-200">Post</button>
            </div>
        </form>
    )


}

