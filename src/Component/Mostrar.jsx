import React from 'react'

const Mostrar = ({frase}) => {
    return (
        <div>
            <div className="card border-success mb-3">
              <div className="card-header bg-transparent border-success">{frase.Title}</div>
              <div className="card-body text-success">
                <h5 className="card-title">{frase.Description}</h5>
             </div>
              <div className="card-footer bg-transparent border-success">{frase.Autor}</div>
            </div>
        </div>
    )
}

export default Mostrar
