import React from 'react'
import './Display.css'

function Display(props) {
    return (
        <div className="display-container">
            <h1>{props.content}</h1>
        </div>
    )
}

export default Display
