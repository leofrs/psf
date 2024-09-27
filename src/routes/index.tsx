import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/public/Home";
import HomeClient from "../pages/private/client/Home";
import ClientProtected from "../pages/private/client/ClientProtected";
import { RootState } from "../redux/store";
import HomePublic from "../pages/public/HomePublic";

export default function IndexRouter() {
    const user = useSelector((state: RootState) => state.user.value);

    return (
        <Routes>
            {user ? (
                <Route path="/auth/user/home" element={<ClientProtected />}>
                    <Route index element={<HomeClient />} />
                </Route>
            ) : (
                <Route path="/" element={<HomePublic />}>
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                </Route>
            )}
        </Routes>
    );
}
