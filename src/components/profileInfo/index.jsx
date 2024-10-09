import { useEffect, useState } from "react"
import { fetchProfile } from "../../Services/userServices"
import { userPosts } from "../../Services/postServices";
import Post from "../Post";


//Get user data from the 'UserService'
export default function ProfileInfo() {

    const [user, setUser] = useState('');
    const[post, setPost] = useState([])

    useEffect(() => {
        async function getUserData() {
            const userData = await fetchProfile();
            setUser(userData);
            
        }
        getUserData();
    }, [])

    //print all the posts of the logged in user
    const userId = user._id;
    
     useEffect(() =>{
    async function fetchPosts(user){
        const posts = await userPosts(user);
        const sortedPosts = posts.reverse();
        setPost(sortedPosts);
    }
    fetchPosts(userId);

    }, [post]);
    
    

    //Display profile info like name, bio and picture.
    return (
        <div className="flex flex-col min-h-screen h-auto items-center my-10">
            <div className="size-72">
                <img src="./quick.jpeg" loading="lazy" className=" rounded-full border-4 border-yellow-400" />
            </div>
            <h2 className="text-white font-extrabold text-4xl">
                @{user.username}
            </h2>
            <p className="text-white font-semibold">
                {user.email}
            </p>
            <hr className="w-screen h-5 m-3 border-none bg-yellow-400">
            </hr>
            <section className="mt-10 size-3/6">
                <h3 className="text-white text-center mb-3 font-bold text-4xl">
                    Your QuickPosts
                </h3>
                <div className="flex flex-col gap-5 ">
                    {post.map((userPost) => (
                        <Post key={userPost.title} data={userPost}/>
                    ))}
                </div>
            </section>

        </div>
    )
}