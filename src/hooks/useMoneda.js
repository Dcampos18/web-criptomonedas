import React, { Fragment, useState } from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    font-family; 'Bebas Beue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
    width: 150%;
    margin-left: -80px;
    margin-bottom: 1rem;
`

const Select = styled.select`
    width: 150%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    margin-left: -150px;
    font-size: 1.2rem;
`

const useMoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial)
    
    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)}
                value={state}
            >
                <option value="">--- Seleccione ---</option>
                {opciones.map(opcion => (
                    <option key={opcion.codigo} value={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )

    // Retornar state, interfaz y funcion que modifica el state
    return [state, Seleccionar, actualizarState]
}

export default useMoneda 