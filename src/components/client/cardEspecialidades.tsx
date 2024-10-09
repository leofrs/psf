import { especialidades } from "../../db/especialidades";

const CardEspecialidades = () => {
  return (
    <>
      <div className=" w-full h-auto">
        <h1 className="text-center text-2xl font-bold">
          Confira as especialidades
        </h1>
        <p className="text-center text-sm font-light">
          Tudo isso para você e a sua familia
        </p>
      </div>
      {especialidades.map((especialidade) => (
        <div
          key={especialidade.id}
          className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[200px] border border-[#0C1B79]"
        >
          <div className="relative h-auto m-2.5 overflow-hidden text-white rounded-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="card-image"
            />
          </div>
          <div className="p-4">
            <h6 className="mb-2 text-slate-800 text-xl text-center font-semibold">
              {especialidade.especialidade}
            </h6>
            <p className="text-slate-600 leading-normal font-light text-center">
              {especialidade.psf}
            </p>
          </div>
          <div className="px-4 pb-4 pt-0 mt-2  flex flex-col justify-center items-center">
            <button
              className="rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Marcar Consulta
            </button>
          </div>{" "}
        </div>
      ))}
    </>
  );
};

export default CardEspecialidades;
