import clima from './assetsProjetos/weatherProjeto.png'
import cronometro from './assetsProjetos/cronometroProjeto.png'
import login from './assetsProjetos/loginProjeto.png'
import listaTarefas from './assetsProjetos/tasklistProjeto.png'
import ecommercer from './assetsProjetos/e-commerceProjeto.png'

import CadaProjeto from './CadaProjeto'
import './Projetos.css'
import '../../MediaQueries.css'

function Projetos() {

    return (
        <>
            <section className="projetos">
                <div id="projetos">
                    <h2>Meus Projetos Pessoais Recentes</h2>
                    <div className="groupProjetos">
                        <CadaProjeto 
                            titulo='Clima API'
                            descricao='Web Aplicação de clima retorna a temperatura atual do local inserido'
                            img={clima}
                            link='https://darkfrienddev-weatherapp.netlify.app/'
                        />
                        
                        <CadaProjeto 
                            titulo='E-commerce Page'
                            descricao='Página única de E-commerce de camisetas'
                            img={ecommercer}
                            link='https://darkfrienddev-e-commerce.netlify.app/'
                        />
                        
                        <CadaProjeto 
                            titulo='Cronometro'
                            descricao='Cronômetro Online minimalista e simples com Play, Pause e Reset'
                            img={cronometro}
                            link='https://darkfrienddev-cronometro.netlify.app/'
                        />
                        
                        <CadaProjeto 
                            titulo='Tela de Login/Cadastro'
                            descricao='Desenvolvido com React, com validação de email, senha. E primeira vez usando rotas'
                            img={login}
                            link='https://darkfrienddev-loginpage.netlify.app/'
                        />
                        <CadaProjeto 
                            titulo='Lista de Tarefas'
                            descricao='To do List com função de adicionar e remover apenas. Feito com React'
                            img={listaTarefas}
                            link='https://darkfrienddev-to-do-list.netlify.app/'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projetos
