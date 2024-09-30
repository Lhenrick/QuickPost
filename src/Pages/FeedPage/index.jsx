import Feed from "../../components/Feed";
import Header from "../../components/Header";
import Menu from "../../components/Menu";



function FeedPage() {


  return (
    <div className=" h-auto min-h-screen w-screen bg-zinc-800">
      <Header />
      <Feed />
      <Menu />     
    </div>
  )
}

export default FeedPage
