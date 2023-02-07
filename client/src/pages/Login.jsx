import React from "react";

const Login = ({register}) => {
    return (
        <div>
            {register ? "Sign up" : "Login"}
        </div>
    );
};

export default Login;