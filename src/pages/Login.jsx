/** @format */

import React from "react";

function Login() {
    return (
        <div className="formContainer">
            <h3>witter.</h3>
            <div className="formWrapper">
                <span className="regTitle">Login</span>
                <form action="">
                    <input type="text" placeholder="Username"></input>
                    {/* <input type='email' placeholder='Email'></input> */}
                    <input type="password" placeholder="Password"></input>
                    <button>Login!</button>
                </form>
                <p>
                    Do not have an account ? <strong>Sign up</strong>
                </p>
            </div>
        </div>
    );
}

export default Login;
