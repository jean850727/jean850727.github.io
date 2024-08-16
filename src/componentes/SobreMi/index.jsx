const SobreMi = () => {
    return (
        <>
            <div className="titulo-container">
                <h2>Soy Developer Front End</h2>

                <div className="container-sobremi">
                    <div className="container-perfil">
                        <img className="foto-perfil" src="./src/images/foto.jpeg"
                            alt="Foto de perfil" />
                        <div className="container-jardin">
                            <img className="florecita" src="./src/images/florecita.gif" />
                            <img className="florecita" src="./src/images/florecita.gif" />
                            <img className="florecita" src="./src/images/florecita.gif" />
                        </div>

                    </div>
                    <div className="sobremi">
                        <p>Soy estudiante de programación, creativa, empática, comprometida,sé trabajar en equipo, soy apasionada con lo que me gusta, estoy en constante crecimiento y aprendizaje.
                        </p>
                        <p>
                            Mi objetivo personal es formar parte de una empresa donde pueda poner en práctica todos mis conocimientos y experiencia profesional en las distintas áreas.
                        </p>
                        <p>
                            Poder desarrollarme profesionalmente para el buen desempeño de las funciones asignadas, que me brinden la oportunidad de alcanzar mis metas trazadas y que me ofrezcan la oportunidad de crecer en el área personal e intelectual.
                        </p>
                    </div>

                </div>



                <div className="titulo-skills">
                    <h3>SKILLS</h3>
                    <ul className="skills-container">
                        <li className="skills-item">
                            <a href="https://vercel.com/jeannette-saldana-bolfetas-projects/barberia-proyecto2" target="_blank"><img src="./src/images/html.webp" alt="" /></a>
                        </li>
                        <li className="skills-item">
                            <a href="https://vercel.com/jeannette-saldana-bolfetas-projects/challenge-encriptado" target="_blank"><img src="./src/images/js.webp" alt="" /></a>
                        </li>
                        <li className="skills-item">
                            <a href="http://" target="_blank"><img src="./src/images/python.webp" alt="" /></a>
                            <a href="http://" target="_blank"><img src="./src/images/" alt="" /></a>
                        </li>
                        <li className="skills-item">
                            <a href="https://vercel.com/jeannette-saldana-bolfetas-projects/calculadora" target="_blank"><img src="./src/images/react.webp" alt="" /></a>
                        </li>
                        <li className="skills-item">
                            <a href="https://vercel.com/jeannette-saldana-bolfetas-projects/challenge-aluraflix" target="_blank"><img src="./src/images/css.png" alt="" /></a>
                        </li>
                    </ul>
                </div>

                <div className="formacion-titulo">
                    <h3>FORMACIÓN ACADÉMICA</h3>
                    <ul className="formacion-container">
                        <li className="formacion-skills">
                            <a href="http://" target="_blank"><img src="./src/images/lnkdn.webp" alt="" /></a>
                            <a href="http://" target="_blank"><img src="./src/images/" alt="" /></a>
                        </li>
                        <li className="formacion-skills">
                            <a href="http://" target="_blank"><img src="./src/images/ibm.png" alt="" /></a>
                            <a href="http://" target="_blank"><img src="./src/images/" alt="" /></a>
                        </li>
                        <li className="formacion-skills">
                            <a href="http://" target="_blank"><img src="./src/images/prepa.png" alt="" /></a>
                            <a href="http://" target="_blank"><img src="./src/images/" alt="" /></a>
                        </li>
                        <li className="formacion-skills">
                            <a href="http://" target="_blank"><img src="./src/images/alura.png" alt="" /></a>
                            <a href="http://" target="_blank"><img src="./src/images/" alt="" /></a>
                        </li>
                        <li className="formacion-skills">
                            <a href="http://" target="_blank"><img src="./src/images/platzi.jpeg" alt="" /></a>
                            <a href="http://" target="_blank"><img src="./src/images/" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );
}

export default SobreMi;