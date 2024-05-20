import React, { useState } from "react";

import { Link } from "react-router-dom";
import "./login.css";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const HandleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            email,
            password,
        };
    };

    return (
        <section>
            <div className='login'>
                <img
                    className='imgLogoLogin'
                    src="images/logoRed2.png"
                    alt="Logo da marca"
                />
                <form onSubmit={HandleSubmit}>
                    <label>
                        <span>Email:</span>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email do usuário"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input
                            type="password"
                            name="password"
                            placeholder="Insira sua senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <div className='buttonLogin'>
                        <button className="btn btn-acai">Entrar</button>
                        <Link
                            to={"/register"}
                            className="btn btn-outline btn-register-login"
                        >
                            Registrar
                        </Link>
                    </div>
                    <Link to={"/esquecisenha"} className="btn btn-link">
                        Esquici minha senha...
                    </Link>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default Login;
