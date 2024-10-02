import Header from "../../components/Header";
import Menu from "../../components/Menu";
import ProfileInfo from "../../components/userInfo";


export default function Profile(){
    return(
        <div className="bg-zinc-800 w-screen h-full min-h-screen">
            <Header/>
            <ProfileInfo/>
            <Menu/>
        </div>
    )
}