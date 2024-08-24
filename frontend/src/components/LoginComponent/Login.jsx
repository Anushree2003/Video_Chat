import React, { useState } from "react";
import "./Login.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your login logic here
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <>
            <h2>Login To Your Account!</h2>
            <div className="outer-container">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <i className="fa-solid fa-envelope"></i>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required={true}
                                placeholder="Email"
                            />
                        </div>
                        <div>
                            <i className="fa-solid fa-lock"></i>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required={true}
                                placeholder="Password"
                            />
                        </div>
                        <button type="submit">Login</button>
                        <p>Don't have an account? <span><a href="#Signup">Sign Up</a></span></p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
