import { useState } from "react";

export default function LoginOrRegister() {
    const [isLogin, setIsLogin] = useState<boolean>(true);

    const switchLogin = () => {
        setIsLogin(!isLogin);
    };

    return { isLogin, switchLogin };
}
