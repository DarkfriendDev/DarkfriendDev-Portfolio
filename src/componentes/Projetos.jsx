import clima from '../assets/projetos-imgs/bloco1.png'
import cronometro from '../assets/projetos-imgs/bloco2.png'
import login from '../assets/projetos-imgs/bloco3.png'
import listaTarefas from '../assets/projetos-imgs/bloco4.png'
import tagIcon from '../assets/default-icons/formato-html.svg'

function Projetos() {

    return (
        <>
            <section className="projetos">
                <div id="projetos">
                    <h2>Meus Projetos Pessoais Recentes</h2>
                    <div className="groupProjetos">
                        <div className="projetoFront">
                            <img src={clima} alt="Clima API PROJECT" />
                            <div className='projetoDescricao'>
                                <h3 className="projetoTitulo">
                                    Clima Atual
                                </h3>
                                <p>Web Aplicação de clima retorna a temperatura atual do local inserido</p>
                                <a href="https://darkfrienddev.github.io/projects/clima/" target='_blank' rel="noreferrer" className="projetoBtn">
                                    <img src={tagIcon} alt="tag" />
                                    <p>Visitar</p>
                                </a>
                            </div>
                    
                        </div>
                        <div className="projetoFront">
                            <img src={cronometro} alt="Cronometro PROJECT" />
                            <div className='projetoDescricao'>
                                <h3 className="projetoTitulo">
                                    Cronômetro
                                </h3>
                                <p>Cronômetro Online minimalista e simples com Play, Pause e Reset</p>
                                <a href="https://darkfrienddev.github.io/projects/cronometro/" target='_blank' rel="noreferrer" className="projetoBtn">
                                    <img src={tagIcon} alt="tag" />
                                    <p>Visitar</p>
                                </a>
                            </div>
                    
                        </div>
                        <div className="projetoFront">
                            <img src={login} alt="Login e Cadastro PROJECT" />
                            <div className='projetoDescricao'>
                                <h3 className="projetoTitulo">
                                    Tela de Login/Cadastro
                                </h3>
                                <p>Desenvolvido com React, com validação de email, senha. E primeira vez usando rotas</p>
                                <a href="https://login-cadastro-sable.vercel.app/" target='_blank' rel="noreferrer" className="projetoBtn">
                                    <img src={tagIcon} alt="tag" />
                                    <p>Visitar</p>
                                </a>
                            </div>
                    
                        </div>
                        <div className="projetoFront">
                            <img src={listaTarefas} alt="Lista de Tarefas PROJECT" />
                            <div className='projetoDescricao'>
                                <h3 className="projetoTitulo">
                                    Lista de Tarefas
                                </h3>
                                <p>To do List com função de adicionar e remover apenas. Feito com React</p>
                                <a href="https://todolist-xi-rose.vercel.app/" target='_blank' rel="noreferrer" className="projetoBtn">
                                    <img src={tagIcon} alt="tag" />
                                    <p>Visitar</p>
                                </a>
                            </div>
                    
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projetos
