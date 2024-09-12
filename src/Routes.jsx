import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Search from "./Pages/Search";
import Register from "./Pages/Register";
import FeedPage from "./Pages/FeedPage";


export default function Pages() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FeedPage />} />
                    <Route path="*" element={<NotFound />}/>
                    <Route path="/search" element={<Search/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
        </BrowserRouter>
    )
}