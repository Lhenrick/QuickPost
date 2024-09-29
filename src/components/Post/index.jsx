

export default function Post({data}) {
    
 
    return (
        <div className="flex flex-col w-full items-left sm:h-56 lg:w-full px-3 py-5 gap-5 bg-zinc-900 text-white border-solid border-2 rounded-xl border-yellow-400  shadow-xl shadow-black">
                <h3 className="font-bold text-4xl self-center">
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