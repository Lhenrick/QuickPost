/* eslint-disable react/no-unescaped-entities */

import Header from "../../components/Header";
import Menu from "../../components/Menu";

export default function NotFound() {
    return (
        <>
            <Header />
                <div className="flex flex-col py-5 items-center justify-start h-screen bg-zinc-800">
                    <h1 className="text-white">OPS!</h1>
                    <p className="text-white">The page you're looking for does not exist</p>
                </div>
            <Menu />
        </>
    )
}