import closeMenu from '../assets/default-icons/x.svg'
import homeIcon from '../assets/nav-icons/homeIcon.png'
import aboutIcon from '../assets/nav-icons/aboutIcon.png'
import tecIcon from '../assets/nav-icons/tecIcon.png'
import projectIcon from '../assets/nav-icons/projectIcon.png'

function HiddenBar() {

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
                    <a className='navLink navInicio' onClick={() => {
                        hiddenBarDesactive()
                        window.scrollTo(0,0)
                    }}>
                        <img src={homeIcon} alt="Inicio"/>
                        <span>Início</span>
                    </a>
                    <a href="#sobreMim" className='navLink navSobre' onClick={() => {
                        hiddenBarDesactive()
                    }}>
                        <img src={aboutIcon} alt="Inicio"/>
                        <span>Sobre Mim</span>
                    </a>
                    <a href="#tecnologias" className='navLink navTec' onClick={() => {
                        hiddenBarDesactive()
                    }}>
                        <img src={tecIcon} alt="Inicio"/>
                        <span>Tecnologias</span>
                    </a>
                    <a href="#projetos" className='navLink navProjetos' onClick={() => {
                        hiddenBarDesactive()
                    }}>
                        <img src={projectIcon} alt="Inicio"/>
                        <span>Projetos</span>
                    </a>
                </ul>
            </div>
        </>
    )
}

export default HiddenBar