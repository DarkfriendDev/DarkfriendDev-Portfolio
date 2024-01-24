import './App.css'
import Nav from './componentes/Nav/Nav'
import Header from './componentes/Header/Header'
import SobreMim from './componentes/SobreMim/SobreMim'
import Tecnologias from './componentes/Tecnologias/Tecnologias'
import Projetos from './componentes/Projetos/Projetos'

document.documentElement.style.scrollBehavior = "smooth";


function App() {

  return (
    <>
      <Nav/>
      <Header/>
      <SobreMim/>
      <Tecnologias/>
      <Projetos/>
    </>
  )
}

export default App
