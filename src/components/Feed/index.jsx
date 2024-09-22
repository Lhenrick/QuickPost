import { useState } from "react";
import Post from "../Post";
import PostInput from "../PostInput";


export default function Feed(){

    const [data, setData] = useState([])

    const addNewPost = (newPost) => {
        setData((prevPost) => [...prevPost, newPost])
    }

    return(
        <section className="flex flex-col h-auto bg-zinc-800 items-center p-5 gap-3 pb-3">
            <PostInput onPostCreated={addNewPost}/>
            {data.map((info) => (
                <Post key={info.title} data={info}/>
                ))}
        </section>
    )
}