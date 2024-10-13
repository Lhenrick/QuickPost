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
    //Pega todos os posts relacionados ao texto digitado
    //Get all posts related to the text typed
    async function fetchPost(search) {

        if(!search){
            setData([]);
            return;
        }

        const postsApi = await searchPost(search);
        setData(postsApi)
    }

    //Pega a informação do input
    //Get the input information
    function handleSearch(e) {
        const searchedText = e.target.value;
        fetchPost(searchedText.toUpperCase());
    }

    return (
        <>
            <Header />
            <section className="h-full  bg-gradient-to-br from-yellow-300 via-neutral-800 to-neutral-900">
                <div className="flex flex-col items-center py-5 px-2 h-auto min-h-screen max-w-screen  gap-5">
                    <h1 className="text-yellow-400 font-bold text-xl">Search for a title or an user</h1>
                    <form className="flex justify-center">
                        <input onChange={handleSearch} placeholder="Search for a title" type="search" className=" w-11/12 h-10 sm:w-80 md:w-80 lg:w-96 lg:h-12 rounded-xl p-3 border-2 focus:outline-none focus:border-orange-500 border-yellow-400 text-white bg-zinc-900" />
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