
import { useState } from "react";
import axios from "axios";

 export function Register(){

    //setting up ung form fields
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        password_confirmation:"",
    });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState(""); //for displaying message feedback to the user
    //key event para sa every change ng keys
    const handleChange = (e) =>{
        const {name, value} = e.target; //destructuring, name and value are the keys of the object, e.target is the element that triggered the event
        setFormData({
            ...formData, // ... means rest of the object or array
            [name]:value, //key and value pair, name is the key and value is the value, dynamic key name
        });
        validateField(name, value); //call the validate Field function to validate the field on change
    }

    
     const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try{
            const response = await axios.post("http://localhost:8000/api/register", formData);
            console.log(response.data);
            localStorage.setItem("token", response.data.token); //store the token in local storage
             // Redirect to the dashboard or home page after successful registration
             localStorage.setItem("user", JSON.stringify(response.data.user)); //store the user data in local storage
        }catch(error){

        if (error.response?.status === 422) {

            // Laravel validation errors
            setErrors(error.response.data.errors);
            console.log(error.response.data);
        } else if (error.response?.status === 401) {

            setMessage("Invalid email or password.");
            console.log(error.response.data);
        } else {

            setMessage("Something went wrong.");

            console.error(error);
            console.log(error.response.data);

        }
        }
    }
    const validateField = (name, value) => {
        let error = "";

        if(name === "email"){ //validation for email
              if (!value) {
            error = "Email is required.";
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = "Invalid email format.";
            }
        }
        if(name ==="password"){ //pasword validate
            if (!value) {
                error = "Password is required.";
            } else if (value.length < 8) {
                error = "Password must be at least 8 characters long.";
            }
        }
        if(name ==="name"){ //validat for name 
            if(!value){
                error = "Name is required.";
            } else if (value.length < 2){
                error ="Name must be at least 2 characters long.";
            }
        }
        if (name === "password_confirmation") {
    if (value !== formData.password) {
        error = "Passwords do not match.";
    }
}
        setErrors((prev) => ({
            ...prev,
            [name]: error
        }));
        setMessage(""); // Clear general messages when validating fields
    }


    return(
        <>
        <form onSubmit={handleSubmit} className="loginForm">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
         {errors.name && <span className="error">{errors.name}</span>}
         <input type ="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
         {errors.email && <span className ="error">{errors.email}</span>}
         <input type ="password" name="password" value={formData.password} placeholder="Password" onChange={handleChange} />
         {errors.password && <span className="error">{errors.password}</span>}
            <input
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            value={formData.password_confirmation}
            onChange={handleChange}
        />
         {errors.password_confirmation && <span className="error text-danger">{errors.password_confirmation}</span>}
            
         <button type="submit">Register</button>
        </form>
        </>
    );
}
