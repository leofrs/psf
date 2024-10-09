import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <aside className="w-1/5 h-full border bg-[#0C1B79] rounded-md p-4 flex flex-col justify-around text-white shadow-2xl shadow-[#0C1B79]">
      <div className="w-full h-auto border-b border-gray-400 cursor-default pb-4">
        <h1 className="text-center font-semibold text-2xl">PSF</h1>
      </div>

      <ul className=" w-full h-3/4 flex flex-col justify-evenly items-center">
        <Link to="/auth/user/home">
          <li className="border-b border-gray-500 cursor-pointer hover:border-[#09C9EF]">
            Home
          </li>
        </Link>
        <Link to="/auth/user/medicos">
          <li className="border-b border-gray-500 cursor-pointer hover:border-[#09C9EF]">
            Médicos
          </li>
        </Link>
        <Link to="/auth/user/marcar-consulta">
          <li className="border-b border-gray-500 cursor-pointer hover:border-[#09C9EF]">
            Marcar Consulta
          </li>
        </Link>
        <Link to="/auth/user/historico-medico">
          <li className="border-b border-gray-500 cursor-pointer hover:border-[#09C9EF]">
            Histórico
          </li>
        </Link>
        <Link to="/auth/user/perfil">
          <li className="border-b border-gray-500 cursor-pointer hover:border-[#09C9EF]">
            Perfil
          </li>
        </Link>
        <li className="border-b border-gray-500 cursor-pointer hover:border-[#09C9EF]">
          Sair
        </li>
      </ul>

      <div className="w-full h-auto cursor-default">
        <p className="text-center font-extralight text-sm">©️ Leonardo 2024</p>
      </div>
    </aside>
  );
}
