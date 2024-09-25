import { useEffect, useState } from "react";
import Post from "../Post";
import PostInput from "../PostInput";
import { getPosts } from "../../Services/postServices";


export default function Feed(){

    const [data, setData] = useState([])
    const [test, setTest] = useState([])
    
    useEffect(()=>{
        fetchPosts()
    }, [])

    async function fetchPosts (){
        const  postsAPI = await getPosts();
        setData(postsAPI)
    }

    const addNewPost = (newPost) => {
        setTest((prevPost) => [...prevPost, newPost])

        // function not working anymore because, not the api is not hard coded
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