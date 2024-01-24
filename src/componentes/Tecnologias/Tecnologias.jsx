import htmlIcon from './assetsTecno/html.png'
import cssIcon from './assetsTecno/css.png'
import jsIcon from './assetsTecno/JS.png'
import tailwindIcon from './assetsTecno/tailwind.png'
import reactIcon from './assetsTecno/react.png'
import gitIcon from './assetsTecno/git.png'

import './Tecnologias.css'
import CadaTecnologia from './CadaTecnologia'
import '../../MediaQueries.css'


function Tecnologias() {

    return (
        <>
            <section className="tecnologias">
                <div id="tecnologias">
                    <h2>Tecnologias Utilizadas</h2>
                    <div className="groupTechs">

                        <CadaTecnologia
                            img={htmlIcon}
                            titulo='HTML'
                        />

                        <CadaTecnologia
                            img={cssIcon}
                            titulo='CSS'
                        />
                         <CadaTecnologia
                            img={jsIcon}
                            titulo='JavaScript'
                        />
                        <CadaTecnologia
                            img={tailwindIcon}
                            titulo='Tailwind'
                        />
                        <CadaTecnologia
                            img={reactIcon}
                            titulo='React'
                        />
                        <CadaTecnologia
                            img={gitIcon}
                            titulo='Git'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Tecnologias
