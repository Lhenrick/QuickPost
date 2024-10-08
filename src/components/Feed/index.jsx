import { useEffect, useState } from "react";
import Post from "../Post";
import PostInput from "../PostInput";
import { getPosts } from "../../Services/postServices";


export default function Feed() {

    const [data, setData] = useState([])


    useEffect(() => {
        fetchPosts()
    }, [data])

    // get all posts from the database and print on the page.
    async function fetchPosts() {
        const postsAPI = await getPosts();
        const sortedData = postsAPI.reverse();
        setData(sortedData)
    }

    return (
        <section className="flex flex-col h-auto bg-zinc-800 items-center p-5 gap-3 pb-3">
            <PostInput />
            <div className="mt-5 gap-5 grid justify-items-center grid-cols-1 sm:grid-cols-2 auto-rows-auto">
                {data.map((info) => (
                    <Post key={info.title} data={info} />
                ))}
            </div>
        </section>
    )

}