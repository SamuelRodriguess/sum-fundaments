import './Intervalo.css'
import React from 'react' 
import Card from './Card'
import { connect } from 'react-redux'

 function Media(props) {

     const {min,max} = props.numersMaxMin

    return (
        <Card Title="Media dos Números" Green>
            <div>
                <span>
                    <span> Resultado </span>
                    <strong> { ( max + min ) / 2 } </strong>
                </span>
        
            </div>
        </Card>
    )
}

const mapStateToProps = (state) => {
    return {
        numersMaxMin: state.numeros
    };
    
}

export default connect(mapStateToProps)(Media)
