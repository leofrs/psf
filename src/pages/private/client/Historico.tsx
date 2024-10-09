import HistoricoMedicoUser from "../../../components/client/historicoMedico";
import SideBar from "../../../components/client/sideBar";

export default function HistoricoMedico() {
  return (
    <main className="w-dvw h-svh flex p-4 gap-4">
      <SideBar />
      <div className="w-full h-full flex flex-col gap-1 ">
        <div className="w-full h-20 border border-blue-700 rounded-md shadow-md shadow-[#0C1B79] flex justify-end items-center p-4">
          <h4>Seja bem vindo Leonardo 🖐️</h4>
        </div>
        <div className="w-full h-full border border-blue-700 rounded-md flex flex-col shadow-md shadow-[#0C1B79] p-4">
          <HistoricoMedicoUser />
        </div>
      </div>
    </main>
  );
}
