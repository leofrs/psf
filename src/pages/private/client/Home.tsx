import CardEspecialidades from "../../../components/client/cardEspecialidades";
import SideBar from "../../../components/client/sideBar";

export default function HomeClient() {
  return (
    <main className="w-dvw h-svh flex p-4 gap-4">
      <SideBar />
      <div className="w-full h-full flex flex-col gap-1">
        <div className="w-full h-20 border border-blue-700 rounded-md shadow-md shadow-[#0C1B79] flex justify-end items-center p-4">
          <h4>Seja bem vindo Leonardo 🖐️</h4>
        </div>
        <div className="w-full h-full border border-blue-700 rounded-md flex flex-wrap  shadow-md shadow-[#0C1B79] p-2 overflow-y-auto justify-center items-center gap-8">
          <CardEspecialidades />
        </div>
      </div>
    </main>
  );
}
