/* eslint no-eval: 0 */
//Importar la libreria
import React, { useState } from 'react'
import words from 'lodash.words'
import Result from './components/Result'
import Functions from './components/Functions'
import MathOperations from './components/mathOperations'
import Numbers from './components/Numbers'
//Importamos los estilos css
import './App.css'

//Generacion del la funcion del componente

const App = () => {
    //Usamos el useState donde stack es el estado inicial y setStack la funcion que modifica ese estado. 
    const [stack, setStack] = useState("") 

    // usamos la funcions instalada de lodash
    const items = words(stack, /[^-^+^*^/]+/g)
    
    // (es verdadero) ? (resultado por verdadero) : (resultado por falso)
    const value = items.length > 0 ? items[items.length-1] : "0"

    console.log('Renderizacion de la App', items)
    return (
        <main className='react-calculator'>
            <Result value={value}/>
            <Numbers onClickNumbers={number => {
                console.log(number)
                setStack(`${stack}${number}`)    
            }}/>

            <Functions 
            onContentClear={() => {
                console.log("Content clear")
                setStack("")
                }}
            onDelete={() => { if (stack.length > 0) {console.log("OnDelete")
                const newStack = stack.substring(0, stack.length - 1)
                setStack(newStack)}
            }} />

            <MathOperations onClickOperation={operation => {
                console.log("Operation ", operation)
                setStack(`${stack}${operation}`)
                }}
                onClickEqual={equal => {
                    console.log("Equal ", equal)
                    setStack(eval(stack).toString())    
                }}
            />
        </main>)
}

//Exportar
export default App
