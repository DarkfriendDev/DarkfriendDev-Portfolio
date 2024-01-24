import menu from './assetsNav/menu.svg'


import { GoHome } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { LiaLaptopCodeSolid } from "react-icons/lia";


import HiddenBar from './HiddenBar'
import './Nav.css'
import '../../MediaQueries.css'
import { useEffect } from 'react'


// https://github.com/DarkfriendDev/
// https://www.linkedin.com/in/bryan-cesar-743b76233/



function Nav() {

    const hiddenBarActive = () => {
        const hiddenBar = document.querySelector('.hiddenBar')
        hiddenBar.style.transform = 'translateX(0vw)';
        document.body.style.overflow = 'hidden'
    }


    useEffect(() => {
        let header = document.querySelector('.header')
        let sobreMim = document.querySelector('.sobreMim')
        let tecnologias = document.querySelector('.tecnologias')
        let projetos = document.querySelector('.projetos')

        let links = document.querySelectorAll('.navLink')

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

        links[0].classList.add('ativo')


        window.addEventListener('scroll', () => {
            console.log(scrollY)
            if (scrollY > header.offsetTop - 100) {
                links.forEach(navItem => {
                    navItem.classList.remove('ativo')
                    links[0].classList.add('ativo')

                })

            } if (scrollY > sobreMim.offsetTop - 100) {
                links.forEach(navItem => {
                    navItem.classList.remove('ativo')
                    links[1].classList.add('ativo')

                })
            } if (scrollY > tecnologias.offsetTop - 100) {
                links.forEach(navItem => {
                    navItem.classList.remove('ativo')
                    links[2].classList.add('ativo')

                })
            } if (scrollY > projetos.offsetTop - 100) {
                links.forEach(navItem => {
                    navItem.classList.remove('ativo')
                    links[3].classList.add('ativo')

                })
            }

        })
        
    },[])

    return (
        <>
            <nav className="navegation">
                <button className='menuHamburguer' onClick={hiddenBarActive}>
                    <img src={menu} alt="menuHamburguer" />
                </button>
                <ul className="navList">
                    <li className='navLink navInicio' aria-label='header'>
                        <GoHome className='iconNav'/>

                        <span>Início</span>
                    </li>
                    <li className='navLink navSobre' aria-label='sobreMim'>
                        <IoPersonOutline className='iconNav'/>
                        <span>Sobre Mim</span>
                    </li>
                    <li className='navLink navTec' aria-label='tecnologias'>
                        <RiComputerLine className='iconNav'/>
                        <span>Tecnologias</span>
                    </li>
                    <li className='navLink navProjetos' aria-label='projetos'>
                        <LiaLaptopCodeSolid className='iconNav'/>
                        <span>Projetos</span>
                    </li>
                </ul>
            </nav>
            <HiddenBar/>
        </>
    )
}


export default Nav