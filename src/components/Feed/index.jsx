import Post from "../Post";
import PostInput from "../PostInput";


export default function Feed(){
    return(
        <section className="flex flex-col items-center p-5 gap-3 pb-3">
            <PostInput/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </section>
    )
}