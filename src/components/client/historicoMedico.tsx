import { historicoUser } from "../../db/historicoUser";
import { Link } from "react-router-dom";

const HistoricoMedicoUser = () => {
  return (
    <>
      <div className="w-full h-auto mb-4">
        <h1 className="flex flex-col items-center font-bold text-2xl w-full mb-4">
          Confira abaixo o seu historico médico{" "}
          <span className="font-thin text-sm">Ordenado por data</span>
        </h1>
        <p className="text-center">Clique em detalhes e saiba mais</p>
      </div>

      {historicoUser.map((item) => (
        <div key={item.id} className="w-full h-auto mb-4 flex flex-col gap-4">
          {item.consultas.map((consulta, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border border-[#0C1B79] rounded-md"
            >
              <div className="flex gap-4">
                <h4>Especialidade: {consulta.especialidade}</h4>
                <p>Data: {consulta.data}</p>
              </div>

              <Link
                to={`/consulta/${index}`}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Detalhes
              </Link>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default HistoricoMedicoUser;
