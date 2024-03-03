/** @format */

import React from "react";

function Register() {
    return (
        <div className="formContainer">
            <h3>witter.</h3>
            <div className="formWrapper">
                <span className="regTitle">Register Account</span>
                <form action="">
                    <input type="text" placeholder="Username"></input>
                    <input type="email" placeholder="Email"></input>
                    <input type="password" placeholder="Password"></input>
                    <input type="file" placeholder="Avatar" />
                    <button>Sign Up!</button>
                </form>
                <p>
                    Already have an account ? <strong>Login</strong>
                </p>
            </div>
        </div>
    );
}

export default Register;
