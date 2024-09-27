import { RootState } from "../../../redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminProtected() {
    const admin = useSelector((state: RootState) => state.admin.value);

    const navigate = useNavigate();

    useEffect(() => {
        if (!admin) {
            navigate("/");
        }
    }, [admin, navigate]);

    return <Outlet />;
}
