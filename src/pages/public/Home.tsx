import psgBg from "../../assets/psf-bg.jpeg";
import FormLogin from "../../components/auth/form-login";
import FormRegister from "../../components/auth/form-register";

import LoginOrRegister from "../../hooks/loginOrRegister";

export default function Home() {
    const { isLogin, switchLogin } = LoginOrRegister();

    return (
        <div className="w-screen h-screen flex ">
            <div className="w-full h-full bg-[#0C537F] flex flex-col justify-center items-center">
                <div className="w-[400px] flex flex-col justify-center items-center text-white">
                    <h1 className="text-3xl font-bold">Seja bem vindo</h1>
                    {isLogin ? (
                        <p className="font-thin text-xl">
                            Não é cadastrado?{" "}
                            <span
                                className="text-[#F09427] underline underline-offset-4 font-normal cursor-pointer"
                                onClick={() => switchLogin()}
                            >
                                Faça o seu cadastro
                            </span>
                        </p>
                    ) : (
                        <p className="font-thin text-xl">
                            Já é cadastrado?{" "}
                            <span
                                className="text-[#F09427] underline underline-offset-4 font-normal cursor-pointer"
                                onClick={() => switchLogin()}
                            >
                                Faça o seu login
                            </span>
                        </p>
                    )}
                </div>
                {isLogin ? <FormLogin /> : <FormRegister />}
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <img src={psgBg} alt="psf logo" className="object-cover" />
            </div>
        </div>
    );
}
