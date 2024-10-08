import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  sexo: string;
  idade: number;
  rua: string;
  bairro: string;
  rg: number;
  cartaoSus: number;
  especialidade: string;
};

type Field = {
  id: keyof Inputs;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[];
};

export default function FormMarcarConsulta() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  const fields: Field[] = [
    { id: "name", label: "Nome", type: "text", placeholder: "Maria" },
    { id: "sexo", label: "Sexo", type: "string" },
    { id: "idade", label: "Idade", type: "number" },
    { id: "rua", label: "Rua", type: "text" },
    { id: "bairro", label: "Bairro", type: "text" },
    { id: "rg", label: "RG", type: "number" },
    { id: "cartaoSus", label: "Cartão SUS", type: "number" },
    {
      id: "especialidade",
      label: "Qual especialidade?",
      type: "select",
      options: ["Dentista", "Clinico Geral", "Psicologista"],
    },
  ];

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg shadow-md p-6 w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      {fields.map(({ id, label, type, placeholder, options }) => (
        <div className="flex flex-col mb-4" key={id}>
          <label className="text-sm font-medium text-gray-700" htmlFor={id}>
            {label}
          </label>
          {type === "select" ? (
            <select
              id={id}
              {...register(id, { required: true })}
              className={`block w-full border rounded-md p-2 focus:outline-none ${
                errors[id] ? "border-red-500" : "border-gray-500"
              } focus:ring focus:ring-blue-300`}
            >
              <option value="">Selecione uma opção</option>
              {options?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={id}
              type={type}
              placeholder={placeholder}
              {...register(id, { required: true })}
              className={`block w-full border rounded-md p-2 focus:outline-none ${
                errors[id] ? "border-red-500" : "border-gray-500"
              } focus:ring focus:ring-blue-300`}
            />
          )}
          {errors[id] && (
            <span className="text-red-500 text-sm">{`${label} é obrigatório`}</span>
          )}
        </div>
      ))}

      <button
        type="submit"
        className="col-span-2 bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition"
      >
        Marcar Consulta
      </button>
    </form>
  );
}
