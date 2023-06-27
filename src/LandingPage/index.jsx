import React, {useState} from "react";
import './style.css'

function LandingPage () {
    
    const [ TrocarCorFundo , setTrocarCorFundo ] = useState(false)

    const alterarTema = () => (
        setTrocarCorFundo(!TrocarCorFundo)
    )

    return (
        <div className={TrocarCorFundo ? 'modo-escuro' : 'modo-claro'}>

            <header className="topo">
                <img className="logo" src="./img/barbearia-logo.png" alt="barbearia-logo"/>
                <button onClick={alterarTema} className={TrocarCorFundo ? 'modo-escuro' : "modo-claro"}>
                    <img className="btn-icone" src={TrocarCorFundo ? './img/sun.png' : './img/moon.png'} alt="icone"/>
                    {TrocarCorFundo ? `Light` : `Dark`}</button>
            </header>

            <section className="banner"></section>

            <section className="texto">
                <h1>Bem-vindo a Barber Shop</h1>

                <strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar
                    com suas maiores expectativas.
                </strong>

                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada
                    que demonstra o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso
                    barbeiro ser seu estilista pessoal e você nunca ficará desapontado.
                </p>

                <span className="texto-kelly">S. Kelly</span>
            </section>
        </div>
    )
}

export default LandingPage