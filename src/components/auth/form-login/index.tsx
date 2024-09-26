import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name: string;
    password: string;
};

export default function FormLogin() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-lg shadow-md p-6 w-[400px] mx-auto mt-10"
        >
            <h2 className="text-2xl font-semibold text-center mb-4">Entrar</h2>

            <div className="mb-4">
                <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="nome"
                >
                    Nome
                </label>
                <input
                    id="nome"
                    type="text"
                    placeholder="Maria"
                    {...register("name", { required: true })}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-sm font-medium text-gray-700"
                    htmlFor="password_label"
                >
                    Senha
                </label>
                <input
                    id="password_label"
                    placeholder="*****"
                    type="password"
                    {...register("password", { required: true })}
                    className={`mt-1 block w-full border rounded-md p-2 focus:outline-none ${
                        errors.password ? "border-red-500" : "border-gray-300"
                    } focus:ring focus:ring-blue-300`}
                />
                {errors.password && (
                    <span className="text-red-500 text-sm">
                        Senha é obrigatória
                    </span>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-500 text-white font-semibold rounded-md p-2 hover:bg-blue-600 transition"
            >
                Entrar
            </button>
        </form>
    );
}
