"use client"
import { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        cel: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            [e.target.name]: e.target.value
        }));
    };

    return (  <>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="cel">Contact Phone:</label>
                <input type="tel" id="cel" name="cel" value={formData.cel} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="email">Contact Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit">SEND</button>
        </form>


        <style jsx>
        {`
            form {
                max-width: 400px;
                margin: 0 auto 30px;
                padding: 20px;
                border: 1px solid #ccc;
                border-radius: 5px;
                background-color: #f9f9f9;
            }

            .form-group { margin-bottom: 10px; }

            label { display: block; font-weight: bold; }

            input[type="text"],
            input[type="tel"],
            input[type="email"],
            textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-sizing: border-box;
                margin-top: 5px;
            }

            button[type="submit"] {
                width: 100%;
                padding: 10px;
                border: none;
                background-color: var(--colorDetalles);
            }

            button[type="submit"]:hover { background-color: var(--colorPrincipal); }
            
        `}
        </style>
    </>);
}

export default Form;

            
          
            
        

