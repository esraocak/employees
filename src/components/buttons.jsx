import React from 'react'

const Button = ({ click }) => {
    return (
        <div className="button">
            <button onClick={click} value="Prew">Prew</button>
            <button onClick={click} value="Next">Next</button>
        </div>
    )
}

export default Button