import Feed from "../../components/Feed";
import Header from "../../components/Header";
import Menu from "../../components/Menu";



function FeedPage() {


  return (
    <div className="h-screen w-screen bg-zinc-800">
      <Header />
        <div className="h-screen">
          <Feed />
        </div>
      <Menu />
    </div>
  )
}

export default FeedPage
