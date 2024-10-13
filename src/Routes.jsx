import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import Search from "./Pages/Search";
import Register from "./Pages/Register";
import FeedPage from "./Pages/FeedPage";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import PrivateRoute from "./Pages/PrivateRoute";



export default function Pages() {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/QuickPost/login" element={<Login />} />
                    <Route path="/QuickPost/register" element={<Register />} />
                    <Route path="/QuickPost/home" element={<PrivateRoute element={FeedPage} />} />
                    <Route path="/QuickPost/search" element={<PrivateRoute element={Search} />} />
                    <Route path="/QuickPost/profile" element={<PrivateRoute element={Profile} />} />
                    <Route path="*" element={<PrivateRoute element={NotFound} />} />
                </Routes>
            </BrowserRouter> 
    )
}