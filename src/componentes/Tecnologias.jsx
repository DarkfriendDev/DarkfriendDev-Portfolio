import htmlIcon from '../assets/tecnologias-icons/html.png'
import cssIcon from '../assets/tecnologias-icons/css.png'
import jsIcon from '../assets/tecnologias-icons/JS.png'
import tailwindIcon from '../assets/tecnologias-icons/tailwind.png'
import reactIcon from '../assets/tecnologias-icons/react.png'
import gitIcon from '../assets/tecnologias-icons/git.png'


function Tecnologias() {

    return (
        <>
            <section className="tecnologias">
                <div id="tecnologias">
                    <h2>Tecnologias Utilizadas</h2>
                    <div className="groupTechs">
                        <div className='tecIcon'>
                            <img src={htmlIcon} alt="HTML" />
                            <p>HTML</p>
                        </div>
                        <div className='tecIcon'>
                            <img src={cssIcon} alt="CSS" />
                            <p>CSS</p>
                        </div>
                        <div className='tecIcon'>
                            <img src={jsIcon} alt="Javascript" />
                            <p>JavaScript</p>
                        </div>
                        <div className='tecIcon'>
                            <img src={tailwindIcon} alt="Tailwind" />
                            <p>Tailwind</p>
                        </div>
                        <div className='tecIcon'>
                            <img src={reactIcon} alt="ReactJS" />
                            <p>React</p>
                        </div>
                        <div className='tecIcon'>
                            <img src={gitIcon} alt="Git" />
                            <p>Git</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tecnologias
