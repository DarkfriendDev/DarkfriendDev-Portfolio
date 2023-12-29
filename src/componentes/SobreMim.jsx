import download from '../assets/default-icons/download.svg'

function SobreMim() {

    return (
        <>
            <section className="sobreMim">
                <div id="sobreMim">
                    <h2>Meu Histórico Pessoal Como Programador</h2>
                    <div className="sobreDados">
                        <p>
                            Comecei estudando a linguagem Python
                            durante 3 meses, e fiz uma transição para o
                            Desenvolvimento Web. Tenho 9 meses de
                            experiência no Frontend já com alguns
                            projetos em meu portfólio, mas nunca
                            trabalhei na área. Minhas principais
                            habilidades incluem HTML, CSS, JavaScript,
                            Tailwind e React.
                        </p>
                        <div>
                            <ul className="dados">
                                <li>Nome: Bryan Cesar da Silva Gomes</li>
                                <li>Idade: 17</li>
                                <li>Região: São Paulo - SP</li>
                                <li>Contato: bryancesar34@gmail.com</li>
                            </ul>
                            <a href="../assets/CURRÍCULO BRYAN FRONT END.pdf" download='Currículo Bryan' className="curriculo">
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
