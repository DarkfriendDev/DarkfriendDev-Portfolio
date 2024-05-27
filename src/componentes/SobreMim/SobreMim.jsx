import curriculoCV from "./assetsSobre/curriculoBryan.pdf";
import download from "./assetsSobre/download.svg";

import "./SobreMim.css";
import "../../MediaQueries.css";

function SobreMim() {
  return (
    <>
      <section className="sobreMim">
        <div id="sobreMim">
          <h2>Meu Histórico Pessoal</h2>
          <div className="sobreDados">
            <p>
              Sou uma pessoa que é focada em tudo que se compromete a fazer,
              gosto de aprender, realizar minhas tarefas/compromissos e tenho
              facilidade em aprender qualquer coisa e gosto de resolver
              problemas. Eu tenho uma paixão por informática, tendo
              conhecimentos básicos também com pacote Office como Word; Excel;
              PowerPoint. E inclusive também estudo desenvolvimento web,
              conhecimentos com tecnologias Front-end, Back-end, e sobre Banco
              de Dados.
            </p>
            <div>
              <ul className="dados">
                <li>Nome: Bryan Cesar da Silva Gomes</li>
                <li>Idade: 18</li>
                <li>Região: São Paulo - SP</li>
                <li>Contato: bryancesar34@gmail.com</li>
              </ul>
              <a
                href={curriculoCV}
                download="Currículo-Bryan.pdf"
                className="curriculo"
              >
                <img src={download} alt="downloadCurriculo" />
                <p>Download CV</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SobreMim;
