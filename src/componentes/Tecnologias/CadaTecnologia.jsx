import { PropTypes } from 'prop-types'



function CadaTecnologia(props) {



    return (
        <>
            <div className='tecIcon'>
                <img src={props.img} alt={props.titulo} />
                <p>{props.titulo}</p>
            </div>
        </>
    )
}


export default CadaTecnologia


CadaTecnologia.propTypes = {
    img: PropTypes.string,
    titulo: PropTypes.string,
}