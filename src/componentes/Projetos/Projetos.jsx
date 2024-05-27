import notesfriend from "./assetsProjetos/notesFriendProjeto.png";
import cronometro from "./assetsProjetos/cronometroProjeto.png";
import listaTarefas from "./assetsProjetos/tasklistProjeto.png";
import ecommercer from "./assetsProjetos/e-commerceProjeto.png";

import CadaProjeto from "./CadaProjeto";
import "./Projetos.css";
import "../../MediaQueries.css";

function Projetos() {
  return (
    <>
      <section className="projetos">
        <div id="projetos">
          <h2>Meus Projetos Pessoais Recentes</h2>
          <div className="groupProjetos">
            <CadaProjeto
              titulo="Notesfriend"
              descricao="Web Aplicação de bloco de notas com cadastro de usuários consumindo API"
              img={notesfriend}
              link="https://notes-friend.vercel.app/users/login"
            />

            <CadaProjeto
              titulo="E-commerce Page"
              descricao="Página única de E-commerce de camisetas consumindo api local"
              img={ecommercer}
              link="https://darkfrienddev-e-commerce.netlify.app/"
            />

            <CadaProjeto
              titulo="Cronometro"
              descricao="Cronômetro Online minimalista e simples com Play, Pause e Reset"
              img={cronometro}
              link="https://darkfrienddev-cronometro.netlify.app/"
            />

            <CadaProjeto
              titulo="Lista de Tarefas"
              descricao="To do List com função de adicionar e remover apenas. Feito com React"
              img={listaTarefas}
              link="https://darkfrienddev-to-do-list.netlify.app/"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
