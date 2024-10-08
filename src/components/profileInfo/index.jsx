import { useEffect, useState } from "react"
import { fetchProfile } from "../../Services/userServices"
//import { userPosts } from "../../Services/postServices";


//Get user data from the 'UserService'
export default function ProfileInfo() {

    const [user, setUser] = useState('');

    useEffect(() => {
        async function getUserData() {
            const userData = await fetchProfile();
            setUser(userData);
            
        }
        getUserData();
    }, [])

    // async function fetchPosts(user){
    //     const posts = await userPosts(user);
    //     console.log(posts);
    // }
    


    //Display profile info like name, bio and picture.
    return (
        <div className="flex flex-col min-h-screen h-auto items-center mt-10">
            <div className="size-72">
                <img src="./profileexe.jpeg" className=" rounded-full border-4 border-yellow-400" />
            </div>
            <h2 className="text-white font-extrabold text-4xl">
                @{user.username}
            </h2>
            <p className="text-white font-semibold">
                your email: {user.email}
            </p>
            <section className="mt-24">
                <h3 className="text-white font-bold text-4xl">
                    Your Posts
                </h3>
                <div>

                </div>
            </section>

        </div>
    )
}