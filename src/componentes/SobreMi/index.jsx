const SobreMi = () => {
    return (
        <>
            <div className="titulo-container">
                <h2>Soy Developer Front End</h2>
                <img className="foto-perfil" src="./src/images/foto.jpeg"
                    alt="Foto de perfil" />
                    <img className="florecita" src="./src/images/florecita.gif"></img>
                <p className="sobremi">Soy estudiante de programación, creativa, empática, comprometida,sé trabajar en equipo, soy apasionada con lo que me gusta, estoy en constante crecimiento y aprendizaje.
                    <br />
                    Mi objetivo personal es formar parte de una empresa donde pueda poner en práctica todos mis conocimientos y experiencia profesional en las distintas áreas.
                    <br />
                    Poder desarrollarme profesionalmente para el buen desempeño de las funciones asignadas, que me brinden la oportunidad de alcanzar mis metas trazadas y que me ofrezcan la oportunidad de crecer en el área personal e intelectual.
                </p>

                <div className="titulo-skills">
                    <h3>SKILLS</h3>
                    <li className="skills-container">
                        <img src="./src/images/html.webp" alt="" />
                        <img src="./src/images/js.webp" alt="" />
                        <img src="./src/images/python.webp" alt="" />
                        <img src="./src/images/react.webp" alt="" />
                        <img src="./src/images/css.png" alt="" />
                    </li>
                    
                    <div className="formacion-titulo">   
                        <h3>FORMACIÓN ACADÉMICA</h3>
                        <li className="formacion-container">
                        <img src="./src/images/platzi.jpeg" alt="" />
                        <img src="./src/images/lnkdn.webp" alt="" />
                        <img src="./src/images/ibm.png" alt="" />
                        <img src="./src/images/prepa.png" alt="" />
                        <img src="./src/images/alura.png" alt="" />
                    </li>

                    </div>

                </div>

            </div>
           
        </>
    );
}

export default SobreMi;