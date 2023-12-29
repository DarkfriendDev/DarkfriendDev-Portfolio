import menu from '../assets/default-icons/menu.svg'
import HiddenBar from './HiddenBar'
import homeIcon from '../assets/nav-icons/homeIcon.png'
import aboutIcon from '../assets/nav-icons/aboutIcon.png'
import tecIcon from '../assets/nav-icons/tecIcon.png'
import projectIcon from '../assets/nav-icons/projectIcon.png'

// https://github.com/DarkfriendDev/
// https://www.linkedin.com/in/bryan-cesar-743b76233/



function Nav() {

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
                    <a href="#header" className='navLink navInicio' onClick={() => window.scrollTo(0,0)}>
                        <img src={homeIcon} alt="Inicio"/>
                        <span>Início</span>
                    </a>
                    <a href="#sobreMim" className='navLink navSobre'>
                        <img src={aboutIcon} alt="Inicio"/>
                        <span>Sobre Mim</span>
                    </a>
                    <a href="#tecnologias" className='navLink navTec'>
                        <img src={tecIcon} alt="Inicio"/>
                        <span>Tecnologias</span>
                    </a>
                    <a href="#projetos" className='navLink navProjetos'>
                        <img src={projectIcon} alt="Inicio"/>
                        <span>Projetos</span>
                    </a>
                </ul>
            </nav>
            <HiddenBar/>
        </>
    )
}


export default Nav