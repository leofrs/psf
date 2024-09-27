import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../pages/public/Home";
import HomeClient from "../pages/private/client/Home";
import ClientProtected from "../pages/private/client/ClientProtected";
import { RootState } from "../redux/store";
import HomePublic from "../pages/public/HomePublic";
import AdminProtected from "../pages/private/admin/AdminProtected";
import HomeAdmin from "../pages/private/admin/Home";
import MedicosClient from "../pages/private/client/Medicos";
import MarcarConsulta from "../pages/private/client/MarcarConsulta";
import HistoricoMedico from "../pages/private/client/Historico";

export default function IndexRouter() {
    const user = useSelector((state: RootState) => state.user.value);
    const admin = useSelector((state: RootState) => state.admin.value);

    return (
        <Routes>
            {user ? (
                <Route path="/" element={<ClientProtected />}>
                    <Route index element={<Navigate to="/auth/user/home" />} />
                    <Route path="/auth/user/home" element={<HomeClient />} />
                    <Route
                        path="/auth/user/medicos"
                        element={<MedicosClient />}
                    />
                    <Route
                        path="/auth/user/marcar-consulta"
                        element={<MarcarConsulta />}
                    />
                    <Route
                        path="/auth/user/historico-medico"
                        element={<HistoricoMedico />}
                    />
                </Route>
            ) : admin ? (
                <Route path="/" element={<AdminProtected />}>
                    <Route index element={<Navigate to="/auth/admin/home" />} />
                    <Route path="/auth/admin/home" element={<HomeAdmin />} />
                </Route>
            ) : (
                <Route path="/" element={<HomePublic />}>
                    <Route index element={<Navigate to="/home" />} />
                    <Route path="/home" element={<Home />} />
                </Route>
            )}

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
