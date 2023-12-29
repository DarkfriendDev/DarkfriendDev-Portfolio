import menu from '../assets/default-icons/menu.svg'
import HiddenBar from './HiddenBar'
import homeIcon from '../assets/nav-icons/homeIcon.png'
import aboutIcon from '../assets/nav-icons/aboutIcon.png'
import tecIcon from '../assets/nav-icons/tecIcon.png'
import projectIcon from '../assets/nav-icons/projectIcon.png'

// https://github.com/DarkfriendDev/
// https://www.linkedin.com/in/bryan-cesar-743b76233/



function Nav() {
    const sobreSession = document.querySelector('.sobreMim')
    const tecSession = document.querySelector('.tecnologias')
    const projetosSession = document.querySelector('.projetos')

    const hiddenBarActive = () => {
        const hiddenBar = document.querySelector('.hiddenBar')
        hiddenBar.style.transform = 'translateX(0vw)';
        document.body.style.overflow = 'hidden'
    }

    return (
        <>
            <nav className="navegation">
                <button className='menuHamburguer' onClick={hiddenBarActive}>
                    <img src={menu} alt="menuHamburguer" />
                </button>
                <ul className="navList">
                    <li className='navLink navInicio' onClick={() => {
                        window.scrollTo(0,0)
                    }}>
                        <img src={homeIcon} alt="Inicio"/>
                        <span>Início</span>
                    </li>
                    <li className='navLink navSobre' onClick={() => {
                        window.scrollTo(0, sobreSession.offsetTop - 20)
                    }}>
                        <img src={aboutIcon} alt="Inicio"/>
                        <span>Sobre Mim</span>
                    </li>
                    <li className='navLink navTec' onClick={() => {
                        window.scrollTo(0, tecSession.offsetTop - 20)
                    }}>
                        <img src={tecIcon} alt="Inicio"/>
                        <span>Tecnologias</span>
                    </li>
                    <li className='navLink navProjetos' onClick={() => {
                        window.scrollTo(0, projetosSession.offsetTop - 20)
                    }}>
                        <img src={projectIcon} alt="Inicio"/>
                        <span>Projetos</span>
                    </li>
                </ul>
            </nav>
            <HiddenBar/>
        </>
    )
}


export default Nav