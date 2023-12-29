import './App.css'
import './MediaQueries.css'
import Nav from './componentes/Nav'
import Header from './componentes/Header'
import SobreMim from './componentes/SobreMim'
import Tecnologias from './componentes/Tecnologias'
import Projetos from './componentes/Projetos'

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
