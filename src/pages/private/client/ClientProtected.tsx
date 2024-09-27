import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function ClientProtected() {
    const user = useSelector((state: RootState) => state.user.value);

    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, [user, navigate]);

    return <Outlet />;
}
