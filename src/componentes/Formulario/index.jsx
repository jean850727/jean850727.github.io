import React, { useState } from 'react';


const Formulario = () => {

    const [formData, setFormData] = useState({
        Nombre: '',
        email: '',
        Mensaje: '',
    });

    const [formSubmitted, setFormSubmitted] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form data submitted:', formData);


        setFormSubmitted(true);


        setFormData({
            Nombre: '',
            email: '',
            Mensaje: '',
        });
    };

    return (
        <div>
            <h2 className='titulo-contact'>Contáctame</h2>
            {formSubmitted && <p></p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label className='label-nombre' htmlFor="name">Nombre:</label>
                    <input className='input-nombre'
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className='label-email' htmlFor="email">Email:</label>
                    <input className='input-email'
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className='label-mensaje' htmlFor="message">Mensaje:</label>
                    <textarea className='text-mensaje'
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>
                <a href='mailto:jeasabolfeta45@gmail.com'></a>
                <button className='boton-enviar' type="submit">Enviar</button>
            </form>
        </div>
    );
};

export default Formulario;