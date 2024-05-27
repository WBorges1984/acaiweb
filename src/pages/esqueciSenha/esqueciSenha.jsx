import React, { useState } from "react";

import { Link } from "react-router-dom";
import styles from "./esqueciSenha.module.css";
const EsqueciSenha = () => {
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
            <div className={styles.container}>
                <img
                    className={styles.imgLogoLogin}
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
                    <div className={styles.buttonLogin}>
                        <button className="btn btn-acai ">Receber link</button>
                    </div>
                    <Link to={"/login"} className="btn btn-link">
                        Possui conta? Login
                    </Link>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </section>
    );
};

export default EsqueciSenha;
