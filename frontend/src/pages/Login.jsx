
import { useState } from "react";
import axios from "axios";
export function Login(){
    const [email, setEmail] = useState({
        email: "",
        password: "",
    }
    
    );

    const [errors, setErrors] = useState({});

    //every change sa keys
    const handleChange = (e) => {
        const { name, value } = e.target;

        setEmail({
            ...email,
            [name]: value,
        });
        validateField(name, value);
    }
    //login
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Handle login logic here
    }

    const validateField = (name, value) => {

    let error = "";

    if (name === "email") {

        if (!value) {
            error = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
            error = "Invalid email format.";
        }

    }

    if (name === "password") {

        if (!value) {
            error = "Password is required.";
        } else if (value.length < 8) {
            error = "Password must be at least 8 characters.";
        }

    }

    setErrors((prev) => ({
        ...prev,
        [name]: error,
    }));
};
    return(
        <>
            <div className="container">
                <div className="wrapper">
                    <h2>Login</h2>
                    <p>Welcome back! Please enter your credentials to log in.</p>
                </div>
                <form onSubmit={handleSubmit} className="loginForm">
                    <label htmlFor="email">Email:</label>
                    <input type="email"  className="form-control mb-3" id="email" name="email" value={email.email} onChange={handleChange} required />
                    {errors.email && <span className="error">{errors.email}</span>}

                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control mb-3" id="password" name="password" value={email.password} onChange={handleChange} required />
                    {errors.password && <span className="error">{errors.password}</span>}
                    <button type="submit" className="login-btn">Login</button>
                </form>
            </div>
        </>
    );
}

