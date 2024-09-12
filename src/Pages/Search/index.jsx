import Header from "../../components/Header";

export default function Search() {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center h-screen w-screen px-2 py-5 bg-zinc-800 gap-5">
                <h1 className="text-yellow-400 font-bold">Search for a title</h1>
                <input type="text" className=" w-9/12 sm:w-80 md:w-80 lg:w-96 lg:h-8 rounded-xl pl-3"/>
            </div>
        </>
    )
}