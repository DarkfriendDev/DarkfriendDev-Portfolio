import avatar from './assetsHeader/bryan-perfil.jpeg'
import github from './assetsHeader/github.svg'
import linkedin from './assetsHeader/linkedin.svg'

import './Header.css'
import '../../MediaQueries.css'


// https://github.com/DarkfriendDev/
// https://www.linkedin.com/in/bryan-cesar-743b76233/

function Header() {

    return (
        <>
            <header className="header">
                <div>
                    <img src={avatar} alt="avatar" className='avatar'/>
                    <h1>Bryan Cesar</h1>
                    <h2>Desenvolvedor Front-End</h2>
                    <div className="redes">
                        <a href='https://github.com/DarkfriendDev/' rel='noreferrer' target='_blank' className='github'>
                            <p>Github</p>
                            <img src={github} alt="github page" />
                        </a>
                        <a  href='https://www.linkedin.com/in/bryan-cesar-743b76233/' rel='noreferrer' target='_blank' className='linkedin'>
                            <p>Linkedin</p>
                            <img src={linkedin} alt="linkedin page" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header