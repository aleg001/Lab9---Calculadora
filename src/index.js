/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable no-alert */
/* eslint-disable react/function-component-definition */
/* eslint-config-prettier */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global, css, jsx } from '@emotion/react'
/** @jsx jsx */

const Titulo = css` 
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  color: lightblue;
}`

const box = css` 
width: 400px;
border: 10px solid orange;
padding: 20px;
margin: 20px;
}`

const Tecnologias = css` 
  display: flex;
  font-size: 12px;
  color: white;
  margin-top: 10px;
  
}`

const iosCalculator = css` 
  position: absolute;
  margin-left:30%;
  margin-top:5%;
  border-image: linear-gradient(45deg, turquoise, greenyellow) 1;
  display: grid;
  place-items: center;
  padding: 1rem;
}`

const calcButtons = css`
  display: grid;
  grid-template-columns: 1.2fr 1.2fr 1.2fr 1.1fr;
  grid-template-rows: 1.2fr 1.2fr 1.2fr 1.1fr;
}`

const upperBtt = css` 
  border-style: none;
  border-radius: 100px/100px;
  font-size: 3.5em;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  color: rgb(0, 0, 0);
  background-color: #e7e7e7;
}`

const gridButtons = css`
  border-style: none;
  border-radius: 100px/100px;
  font-size: 4em;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  color: white;
  background-color: #5d5d5d;
}`

const gridBtt = css`
  border-style: none;
  border-radius: 100px/100px;
  font-size: 3.5em;
  justify-content: center;
  align-items: center;
  height: 110px;
  width: 110px;
  color: white;
  background-color: #e7992b;
}`

const resultScreen = css`
  height: 100px;
  width: 500px;
  display: flex;
  justify-content: right;
  align-items: center;
  font-size: 70px;
  color: white;
}`
const Titulo1 = 'Calculator - 20347'
const Puntos = 'PUNTEO: 40 puntos: diseño, 10 puntos: eslint, 5 puntos: prohibe puntos y coma, 20 puntos: decimal, 30 puntos: división, 10 puntos: módulo, 20 puntos: +/-. 20 puntos por configurar y utilizar procesador de css emotion. TOTAL = 120 puntos.'
const numeros = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0']
let finalResult = ''

const botones = [
  'C',
  '+/-',
  '%',
  '/',
  '7',
  '8',
  '9',
  '*',
  '4',
  '5',
  '6',
  '-',
  '1',
  '2',
  '3',
  '+',
  '0',
  '.',
  '=',
]

const App = () => {
  const [firstValue, setfirstValue] = React.useState('')
  const [expresion, setExpresion] = React.useState('')
  const [calcOper, setOperacion] = React.useState('')
  const [opResult, setopResult] = React.useState('')
  const firstInput = parseFloat(firstValue)
  const nextInput = parseFloat(expresion)

  const calculatorAction = () => {
    switch (calcOper) {
      case '+':
        finalResult = firstInput + nextInput
        alert('SUMA')
        break

      case '-':
        finalResult = firstInput - nextInput
        alert('RESTA')
        break

      case '*':
        finalResult = firstInput * nextInput
        alert('MULTIPLICACION')
        break

      case '/':
        finalResult = firstInput / nextInput
        finalResult = Math.round((finalResult + Number.EPSILON) * 100) / 100
        alert('DIVISION')
        break

      case '%':
        finalResult = firstInput % nextInput
        alert('MOD')
        break

      case '+/-':
        finalResult = -firstInput
        alert('+/-')
        break
      default:
        break
    }

    if (finalResult <= 999999999 && finalResult >= 0) {
      setfirstValue('')
      const displayResult = finalResult
      setopResult(displayResult)
      setExpresion(displayResult)
    } else {
      setfirstValue('')
      setopResult('ERROR 404')
      setExpresion('ERROR 404')
    }
  }

  return (
    <div
      styles={css`
        background: rgb(2, 0, 36);
        background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 1) 0%,
          rgba(9, 9, 121, 1) 7%,
          rgba(7, 62, 156, 1) 35%,
          rgba(0, 212, 255, 1) 100%
        );
      `}
    >
      <Global
        styles={css`
          * {
            background-color: black;

            font-family: 'Arial', sans-serif;
          }
        `}
      />
      <div css={iosCalculator}>
        <div css={Titulo}>{Titulo1}</div>
        <div css={box}>
          <div css={Tecnologias}>{Puntos}</div>
          {' '}
        </div>
        <div css={resultScreen}>{expresion}</div>

        <div css={calcButtons}>
          {botones.map((elemento, posicion) => {
            if (elemento === 'C' || elemento === '+/-' || elemento === '%') {
              return (
                <button
                  css={upperBtt}
                  key={posicion.toString() * 2}
                  onClick={() => {
                    switch (elemento) {
                      case '%':
                        setfirstValue(expresion)
                        setExpresion('')
                        setOperacion(elemento)
                        break
                      case '+/-':
                        setfirstValue(-expresion)
                        setExpresion('')
                        setOperacion(elemento)
                        break

                      case 'C':
                        setExpresion('')
                        alert('Caché limpia')
                        break

                      default:
                        break
                    }
                  }}
                >
                  {elemento}
                </button>
              )
            }
            if (numeros.includes(elemento)) {
              return (
                <button
                  css={gridButtons}
                  key={posicion.toString() * 2}
                  onClick={() => {
                    let newValue = ''
                    if (opResult !== '') {
                      newValue = ''
                      newValue = elemento
                      if (newValue.length !== 10) {
                        setExpresion(newValue)
                      }
                      setopResult('')
                    } else {
                      newValue = ''
                      newValue = expresion + elemento
                      if (newValue.length !== 10) {
                        setExpresion(newValue)
                      }
                    }
                  }}
                >
                  {elemento}
                </button>
              )
            }
            return (
              <button
                css={gridBtt}
                key={posicion.toString() * 2}
                onClick={() => {
                  switch (elemento) {
                    case '+':
                      setfirstValue(expresion)
                      setExpresion('')
                      setOperacion(elemento)
                      break
                    case '-':
                      setfirstValue(expresion)
                      setExpresion('')
                      setOperacion(elemento)
                      break

                    case '*':
                      setfirstValue(expresion)
                      setExpresion('')
                      setOperacion(elemento)
                      break

                    case '/':
                      setfirstValue(expresion)
                      setExpresion('')
                      setOperacion(elemento)
                      break

                    case '.':
                      if (!expresion.includes('.')) {
                        const newValue = expresion + elemento
                        if (newValue.length !== 10) {
                          setExpresion(newValue)
                        }
                      }
                      break

                    case '=':
                      calculatorAction()
                      break

                    default:
                      break
                  }
                }}
              >
                {elemento}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)
root.render(<App />)
