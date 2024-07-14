import { useContext } from "react";
import useForm from "../../hooks/useForm";

import { Link } from "react-router-dom";
import AuthContext from "../../context/authContext";

const loginFormKeys = {
    Email: "email",
    Password: "password",
};

export default function Login() {
    const { loginSubmitHandler } = useContext(AuthContext);

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [loginFormKeys.Email]: "",
        [loginFormKeys.Password]: "",
    });

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo" />
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={loginFormKeys.Email}
                        placeholder="Sokka@gmail.com"
                        onChange={onChange}
                        value={values[loginFormKeys.Email]}
                    />
                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={loginFormKeys.Password}
                        onChange={onChange}
                        value={values.password}
                    />
                    <input
                        type="submit"
                        className="btn submit"
                        // defaultValue="Login"
                        value="Login"
                    />
                    <p className="field">
                        <span>
                            If you don't have profile click{" "}
                            <Link to="/register">here</Link>
                        </span>
                    </p>
                </div>
            </form>
        </section>
    );
}
