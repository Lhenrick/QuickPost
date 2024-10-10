import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import { searchPost } from "../../Services/postServices";
import Post from "../../components/Post";

export default function Search() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchPost()
    }, [])

    async function fetchPost(search) {

        if(!search){
            setData([]);
            return;
        }

        const postsApi = await searchPost(search);
        setData(postsApi)
    }

    function handleSearch(e) {
        const searchedText = e.target.value;
        fetchPost(searchedText.toUpperCase());
    }

    return (
        <>
            <Header />
            <section className="h-full">
                <div className="flex flex-col items-center py-5 px-2 h-auto min-h-screen w-screen  bg-zinc-800 gap-5">
                    <h1 className="text-yellow-400 font-bold text-xl">Search for a title or an user</h1>
                    <form className="flex justify-center">
                        <input onChange={handleSearch} placeholder="Search for a title" type="search" className=" w-11/12 h-10 sm:w-80 md:w-80 lg:w-96 lg:h-12 rounded-xl pl-3 border-2 focus:outline-none focus:border-orange-500 border-yellow-400 text-white bg-zinc-900" />
                    </form>
                    <div className="mt-5 gap-5 w-full grid justify-items-center grid-cols-1 sm:grid-cols-2 auto-rows-auto">
                        {data.map((info) => (
                            <Post key={info.title} data={info} />
                        ))}
                    </div>
                </div>
            </section>

            <Menu />
        </>
    )
}