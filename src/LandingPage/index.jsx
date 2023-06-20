import React, {useState} from "react";
import './style.css'

function LandingPage () {
    
    const LightMode = 'modo-claro'
    const DarkMode = 'modo-escuro'
    const Sun = '.img-sun'
    const Moon = '.img-moon'
    const Light = 'Moon'
    const Black = 'Light'

    const [ TrocarCorFundo , setTrocarCorFundo ] = useState(true)
    //const [ TrocarImagem , setTrocarImagem ] = useState(true)
    //const [ TrocarTexto , setTrocarTexto ] = useState(true)
    
    
    const novaCor = () => (
        setTrocarCorFundo(!TrocarCorFundo)
        //setTrocarImagem(!TrocarImagem),
        //setTrocarTexto(!TrocarTexto)
    )

    if (TrocarCorFundo == LightMode) {
        LightMode == Moon
    } else {
        LightMode == Sun
    }

    return (
        <div className={TrocarCorFundo ? LightMode : DarkMode}>

            <header className="topo">
                <img className="logo" src="./img/barbearia-logo.png" alt="barbearia-logo"/>
                <button onClick={novaCor} className={TrocarCorFundo ? LightMode : DarkMode }>
                    <img className="img-moon"/>Moon</button>
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