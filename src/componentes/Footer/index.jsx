const Footer = () => {
    return (
        <>
            <section className="container-footer">

                <section className="row">

                    <div className="container-tulipanes">
                    <img className="lluviadepetalos" src="./src/images/lluviadepetalos.gif" />
                        <img className="tulipanes" src="./src/images/tulipanes.svg" alt="" />
                    </div>

                    <div className="name-footer-container">
                        <h1>Creado</h1>
                        <h2>por</h2>
                        <h3>Jeannette</h3>
                        <h4>Saldaña</h4>
                        <h5>Bolfeta</h5>
                        <h6>08/2024</h6>
                    </div>

                    <div className="container-lluvia">
                       
                    </div>

                    <div className="container-pasto">
                        <img className="pasto" src="./src/images/pasto.svg" alt="" />
                    </div>

                </section>



            </section>
        </>
    );
}

export default Footer;