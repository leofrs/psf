import { medicos } from "../../db/medicos";

const CardMedicos = () => {
  return (
    <>
      <div className=" w-full h-auto">
        <h1 className="text-center text-2xl font-bold">
          Confira nossos médicos
        </h1>
        <p className="text-center text-sm font-light">
          Lista com todos os médicos do municipio
        </p>
      </div>
      {medicos.map((medico) => (
        <div
          key={medico.id}
          className="relative flex flex-col my-6 bg-white shadow-sm  rounded-lg w-[200px] border border-[#0C1B79]"
        >
          <div className="relative h-auto m-2.5 overflow-hidden text-white rounded-md">
            <img
              src="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="card-image"
            />
          </div>
          <div className="p-4 w-full ">
            <h6 className="mb-2 text-slate-800 text-xl text-center font-semibold flex flex-col">
              {medico.nome}
              <span className="font-light text-base ">
                {medico.especialidade}
              </span>
            </h6>

            <p className="text-slate-600 leading-normal font-light text-center">
              {medico.psf}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMedicos;
