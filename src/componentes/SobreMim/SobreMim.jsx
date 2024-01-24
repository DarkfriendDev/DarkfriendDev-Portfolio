import curriculoCV from './assetsSobre/curriculoBryan.pdf'
import download from './assetsSobre/download.svg'

import './SobreMim.css'
import '../../MediaQueries.css'

function SobreMim() {

    return (
        <>
            <section className="sobreMim">
                <div id="sobreMim">
                    <h2>Meu Histórico Pessoal Como Programador</h2>
                    <div className="sobreDados">
                        <p>
                            Comecei estudando a linguagem Python
                            durante 3 meses, e mudei para o
                            Desenvolvimento Web Front-End. Tenho 1 ano de
                            experiência no Frontend, mas nunca
                            trabalhei na área. Minhas principais
                            habilidades incluem HTML, CSS, JavaScript,
                            Tailwind e React.
                        </p>
                        <div>
                            <ul className="dados">
                                <li>Nome: Bryan Cesar da Silva Gomes</li>
                                <li>Idade: 18</li>
                                <li>Região: São Paulo - SP</li>
                                <li>Contato: bryancesar34@gmail.com</li>
                            </ul>
                            <a href={curriculoCV} download="Currículo-Bryan.pdf" className="curriculo">
                                <img src={download} alt="downloadCurriculo" />
                                <p>Download CV</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SobreMim
