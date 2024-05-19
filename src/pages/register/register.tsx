import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./register.module.css";

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const HandleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        const user = {
            displayName,
            email,
            password,
        };

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        }

        // const res = await CreateUser(user);
    };

    return (
        <div className={styles.register}>
            <h1>Cadastre-se para postar</h1>
            <p>Crie seu usuário e compartilhe suas histórias</p>
            <form onSubmit={HandleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        placeholder="Nome do usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
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
                <label>
                    <span>Confirmação de senha:</span>
                    <input
                        type="password"
                        name="ConfirmPassword"
                        placeholder="Confirme a sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <div className={styles.btnRegister}>
                    <Link to={''} className="btn">Cadastrar</Link>
                    <Link to={"/login"} className="btn btn-link">
                        Possui conta? Login
                    </Link>
                </div>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Register;
