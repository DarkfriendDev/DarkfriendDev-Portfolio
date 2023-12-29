import closeMenu from '../assets/default-icons/x.svg'
import homeIcon from '../assets/nav-icons/homeIcon.png'
import aboutIcon from '../assets/nav-icons/aboutIcon.png'
import tecIcon from '../assets/nav-icons/tecIcon.png'
import projectIcon from '../assets/nav-icons/projectIcon.png'

function HiddenBar() {
    const sobreSession = document.querySelector('.sobreMim')
    const tecSession = document.querySelector('.tecnologias')
    const projetosSession = document.querySelector('.projetos')

    const hiddenBarDesactive = () => {
        const hiddenBar = document.querySelector('.hiddenBar')
        hiddenBar.style.transform = 'translateX(-100vw)';
        document.body.style.overflow = 'auto'

        
    }


    return(
        <>
            <div className="hiddenBar">
                <button className='closeMenu' onClick={hiddenBarDesactive}>
                    <img src={closeMenu} alt="closeMenu" />
                </button>
                <ul className="hiddenBarNav">
                    <li className='navLink navInicio' onClick={() => {
                        hiddenBarDesactive()
                        window.scrollTo(0,0)
                    }}>
                        <img src={homeIcon} alt="Inicio"/>
                        <span>Início</span>
                    </li>
                    <li className='navLink navSobre' onClick={() => {
                        hiddenBarDesactive()
                        window.scrollTo(0, sobreSession.offsetTop - 20)
                    }}>
                        <img src={aboutIcon} alt="Inicio"/>
                        <span>Sobre Mim</span>
                    </li>
                    <li className='navLink navTec' onClick={() => {
                        hiddenBarDesactive()
                        window.scrollTo(0, tecSession.offsetTop - 20)
                    }}>
                        <img src={tecIcon} alt="Inicio"/>
                        <span>Tecnologias</span>
                    </li>
                    <li className='navLink navProjetos' onClick={() => {
                        hiddenBarDesactive()
                        window.scrollTo(0, projetosSession.offsetTop - 20)
                    }}>
                        <img src={projectIcon} alt="Inicio"/>
                        <span>Projetos</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HiddenBar