import { useEffect, useState } from "react";
import { fetchProfile } from "../../Services/userServices";
import { userPosts } from "../../Services/postServices";
import Post from "../Post";
import Skills from "../Skills";

//Get user data from the 'UserService'
export default function ProfileInfo() {
  const [user, setUser] = useState("");
  const [post, setPost] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const userData = await fetchProfile();
      setUser(userData);
    }
    getUserData();
  }, []);

  //print all the posts of the logged in user

  useEffect(() => {
    async function fetchPosts(userId) {
      const posts = await userPosts(userId);
      const sortedPosts = posts.reverse();
      setPost(sortedPosts);
    }
    if (user._id) {
      fetchPosts(user._id);
    }
  }, [user._id]);

  //Display profile info like name, bio and picture.
  return (
    <section className="flex flex-col pb-5 bg-gradient-to-br from-yellow-300 via-neutral-800 to-neutral-900  min-h-screen h-auto items-center">
      <div className="flex flex-col items-center p-5 h-full w-full border-2 border-black bg-[url('/assets/images/cloudbg.jpg')]  ">
        <div className="size-56 sm:size-72">
          <img
            src="./quick.jpeg"
            loading="lazy"
            className=" rounded-full border-4 border-yellow-400"
          />
        </div>
        <h2 className="text-white font-extrabold text-5xl">@{user.username}</h2>
        <p className="text-white font-semibold">{user.email}</p>
      </div>

      {/* All User's skills */}
      <section className="flex flex-col items-start">
        <Skills skillName="Strength" />
        <Skills skillName="Programming" />
        <Skills skillName="Guitar" />
        <Skills skillName="Cooking" />
      </section>

      <section className="mt-10 size-5/6 md:size-3/6">
        {post.length == 0 ? (
          <h3 className="text-white text-center mb-3 font-bold text-2xl sm:text-4xl">
            You haven't posted anything yet 😒
          </h3>
        ) : (
          <h3 className="text-white text-center mb-3 font-bold text-2xl sm:text-4xl">
            Your QuickPosts
          </h3>
        )}

        <div className="flex flex-col gap-5 ">
          {post.map((userPost) => (
            <Post key={userPost.title} data={userPost} />
          ))}
        </div>
      </section>
    </section>
  );
}
