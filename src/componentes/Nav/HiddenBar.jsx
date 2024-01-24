import closeMenu from './assetsNav/x.svg'
import homeIcon from './assetsNav/homeIcon.png'
import aboutIcon from './assetsNav/aboutIcon.png'
import tecIcon from './assetsNav/tecIcon.png'
import projectIcon from './assetsNav/projectIcon.png'

import { useEffect } from 'react'


function HiddenBar() {

    const hiddenBarDesactive = () => {
        const hiddenBar = document.querySelector('.hiddenBar')
        hiddenBar.style.transform = 'translateX(-150vw)';
        document.body.style.overflow = 'auto'

        
    }

    useEffect(() => {
        let header = document.querySelector('.header')
        let sobreMim = document.querySelector('.sobreMim')
        let tecnologias = document.querySelector('.tecnologias')
        let projetos = document.querySelector('.projetos')

        let links = document.querySelectorAll('.hiddenBar .navLink')

        links.forEach(item => {
            item.addEventListener('click', () => {

                switch (item.ariaLabel) {
                    case 'header':
                        window.scrollTo(0, header.offsetTop)
                        break;
                    case 'sobreMim':
                        window.scrollTo(0, sobreMim.offsetTop)
                        break;
                    case 'tecnologias':
                        window.scrollTo(0, tecnologias.offsetTop)
                        break;
                    case 'projetos':
                        window.scrollTo(0, projetos.offsetTop)
                        break;
                
                    default:
                        break;
                }
            })
        })
        
    },[])

    return(
        <>
            <div className="hiddenBar">
                <button className='closeMenu' onClick={hiddenBarDesactive}>
                    <img src={closeMenu} alt="closeMenu" />
                </button>
                <ul className="hiddenBarNav">
                    <li className='navLink navInicio' aria-label='header' onClick={() => {
                        hiddenBarDesactive()
                    }}>
                        <img src={homeIcon} alt="headerLink"/>
                        <span>Início</span>
                    </li>
                    <li className='navLink navSobre' aria-label='sobreMim' onClick={() => {
                        hiddenBarDesactive()
                    }}>
                        <img src={aboutIcon} alt="sobreLink"/>
                        <span>Sobre Mim</span>
                    </li>
                    <li className='navLink navTec' aria-label='tecnologias' onClick={() => {
                        hiddenBarDesactive()
                    }}>
                        <img src={tecIcon} alt="tecnoLink"/>
                        <span>Tecnologias</span>
                    </li>
                    <li className='navLink navProjetos' aria-label='projetos' onClick={() => {
                        hiddenBarDesactive()
                    }}>
                        <img src={projectIcon} alt="projetosLink"/>
                        <span>Projetos</span>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default HiddenBar