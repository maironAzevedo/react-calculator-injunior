import React from 'react'
import './Botao.css'

function Botao({ className, onClick, children }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Botao
