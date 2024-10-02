
export default function ProfileInfo(){
    return(
        <div className="flex flex-col items-center mt-10">
            <div className="size-72">
                <img src="./profileexe.jpeg" className=" rounded-full border-4 border-yellow-400"/>
            </div>
            <h2 className="text-white font-extrabold">
                Hello, User
            </h2>
            <p className="text-white font-semibold">
                your bio
            </p>

        </div>
    )
}