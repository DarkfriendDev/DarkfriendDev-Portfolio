import notesfriend from "./assetsProjetos/notesFriendProjeto.png";
import shoppingCart from "./assetsProjetos/carrinhodeCompraProjeto.png";
import listaTarefas from "./assetsProjetos/tasklistProjeto.png";

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
              titulo="Carrinho de Compra"
              descricao="Página de E-commerce de calçados com carrinho de compra"
              img={shoppingCart}
              link="https://shopping-cart-seven-orcin.vercel.app/"
            />

            <CadaProjeto
              titulo="Lista de Tarefas"
              descricao="To do List simples. Desenvolvido com React e TypeScript"
              img={listaTarefas}
              link="https://darkfriendtasklsit.netlify.app/"
            />

            <CadaProjeto
              titulo="NexCell"
              descricao="Landing Page de Cursaos de Tecnologia da Informação"
              img={listaTarefas}
              link="https://darkfriendtasklsit.netlify.app/"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projetos;
