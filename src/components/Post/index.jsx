

export default function Post({data}) {
    
 
    return (
        <div className="flex flex-col items-left w-10/12 sm:h-36 lg:w-6/12 px-3 py-5 gap-5 bg-zinc-900 text-white border-solid border-2 rounded-xl border-yellow-400 ">
                <h3>
                    {data.title}
                </h3>
                <div className="w-11/12 overflow-scroll">
                    <p>
                    {data.message}
                    </p>
                </div>
        </div>
        
    )
}