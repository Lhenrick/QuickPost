// import { AiOutlineLike, AiOutlineDislike, AiFillLike, AiFillDislike } from "react-icons/ai";
// import { BiLaugh, BiSolidLaugh } from "react-icons/bi";

export default function Post({data}) {
    
 
    return (
        <div className="flex flex-col w-full items-left sm:h-56 lg:w-full px-3 py-5 gap-2 bg-zinc-900 text-white border-solid border-2 rounded-xl border-yellow-400  shadow-xl shadow-black">
                <h3 className="font-bold text-base  sm:text-base md:text-xl self-center">
                    {data.title}
                </h3>
                <div className="w-11/12 min-h-24 h-full overflow-scroll">
                    <p>
                    {data.message}
                    </p>
                </div>
                <div className="flex items-center justify-between mt-1 ">
                {/* <span className="flex text-2xl text-yellow-400"> <AiOutlineLike /> <BiLaugh /> <AiOutlineDislike /> </span> */}
                <span className="text-xl text-yellow-400">
                    @{data.username}    
                </span>
                <p className="text-xs">{data.time} - {data.date}</p>
                </div>            
        </div>
        
    )
}