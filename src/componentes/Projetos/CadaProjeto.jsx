import {PropTypes} from 'prop-types'
import tagIcon from './assetsProjetos/formato-html.svg'


function CadaProjeto (props) {



    return (
        <>
             <div className="projetoFront">
                <img src={props.img} alt="Clima API PROJECT" />
                <div className='projetoDescricao'>
                    <h3 className="projetoTitulo">
                        {props.titulo}
                    </h3>
                    <p>{props.descricao}</p>
                    <a href={props.link} target='_blank' rel="noreferrer" className="projetoBtn">
                        <img src={tagIcon} alt="tag" />
                        <p>Visitar</p>
                    </a>
                </div>
        
            </div>
        </>
    )
}

export default CadaProjeto

CadaProjeto.propTypes = {
    img: PropTypes.string,
    titulo: PropTypes.string,
    descricao: PropTypes.string,
    link: PropTypes.string
}