import PageLink from "../PageLink";


export default function Header() {
    return (
        <header className=" flex justify-center bg-zinc-900 h-20 items-center">
                <PageLink to="/"><img src="./quickpost-logo.png" className="size-24" /></PageLink>  
        </header>
    )
}