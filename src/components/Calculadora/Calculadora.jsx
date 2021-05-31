import React, { useEffect, useState } from 'react'
import Display from '../Display/Display'
import Botao from '../Botao/Botao'

import './Calculadora.css'

function Calculadora() {
    const [numeroAntigo, setNumeroAntigo] = useState("")
    const [numeroAtual, setNumeroAtual] = useState("")
    const [numeroNovo, setNumeroNovo] = useState("")

    const [getOperator, setgetOperator] = useState("")
    const [operatorPressed, setoperatorPressed] = useState(false)
    const [dotPressed, setDotPressed] = useState(false)

    function clearDisplay() {
        setNumeroAtual("")
        setNumeroAntigo("")
        setNumeroNovo("")
        setgetOperator("")
        setoperatorPressed(false)
        setDotPressed(false)
    }

    function addNumber(number) {
        if(!operatorPressed) {
            setNumeroAtual(numeroAtual + number)
            setNumeroAntigo(numeroAntigo + number)
        } else {
            setNumeroAtual(numeroAtual + number)
            setNumeroNovo(numeroNovo + number)
        }
    }

    function addDot() {
        if(numeroAtual !== "") {
            if(!dotPressed && !operatorPressed) {
                setNumeroAtual(numeroAtual + ".")
                setNumeroAntigo(numeroAntigo + ".")
                setDotPressed(true)

            } else if (!dotPressed && operatorPressed) {
                setNumeroAtual(numeroAtual + ".")
                setNumeroNovo(numeroNovo + ".")
                setDotPressed(true)
            }
        }
    }

    function addOperator(operator) {
        if(numeroAntigo !== "") {
            setNumeroAtual("")
            setoperatorPressed(true)
            setDotPressed(false)
            setgetOperator(operator)
        }
    }

    function getResults() {
        if(numeroAtual !== "") {
            switch (getOperator) {
                case "/":
                    setNumeroAtual(parseFloat(numeroAntigo) / parseFloat(numeroNovo))        
                    break;

                case "*":
                    setNumeroAtual(parseFloat(numeroAntigo) * parseFloat(numeroAtual))
                    break;

                case "-":
                    setNumeroAtual(parseFloat(numeroAntigo) - parseFloat(numeroAtual))
                    break;

                case "+":
                    setNumeroAtual(parseFloat(numeroAntigo) + parseFloat(numeroAtual))
                    break;
            }
        }
    }

    return (
        <div className="calculator">  
            <Display content={numeroAtual}/>
            <div className="buttons-field">
                <Botao onClick={() => clearDisplay()} className="triple">AC</Botao>
                <Botao onClick={() => addOperator('/')} className="colored">/</Botao>
                <Botao onClick={() => addNumber('7')}>7</Botao>
                <Botao onClick={() => addNumber('8')}>8</Botao>
                <Botao onClick={() => addNumber('9')}>9</Botao>
                <Botao onClick={() => addOperator('*')} className="colored">*</Botao>
                <Botao onClick={() => addNumber('4')}>4</Botao>
                <Botao onClick={() => addNumber('5')}>5</Botao>
                <Botao onClick={() => addNumber('6')}>6</Botao>
                <Botao onClick={() => addOperator('-')} className="colored">-</Botao>
                <Botao onClick={() => addNumber('1')}>1</Botao>
                <Botao onClick={() => addNumber('2')}>2</Botao>
                <Botao onClick={() => addNumber('3')}>3</Botao>
                <Botao onClick={() => addOperator('+')} className="colored">+</Botao>
                <Botao onClick={() => addNumber('0')} className="double">0</Botao>
                <Botao onClick={() => addDot()}>.</Botao>
                <Botao onClick={() => getResults()} className="colored">=</Botao>
            </div>
        </div>
    )
}

export default Calculadora
