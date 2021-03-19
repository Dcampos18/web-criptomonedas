import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'

import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda'
import axios from 'axios';
import Error from '../componentes/Error'

const Boton = styled.input({
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
    padding: 10,
    backgroundColor: "#66a2FE",
    border: "none",
    width: "150%",
    borderRadius: 10,
    color: "#FFF",
    marginLeft: -150
})

const Formulario = ({guardarMoneda,  guardarCriptomoneda }) => {

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar Americano'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'}
    ]

    const [ listaCripto, guardardarCriptomonedas ] = useState([])
    const [ error, guardarError ] = useState(false)

    // Utilizamos useMoneda
    const [moneda, SelectMonedas] = useMoneda('Elige tu Moneda', '', MONEDAS)

    //Utilizamos useCriptomonedas
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listaCripto)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

            const resultado = await axios.get(url)
            guardardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI()
    }, [])

    //cuando el usuario hace submit
    const cotizarMoneda = e => {
        e.preventDefault()
        //validar si ambos campos estan llenos
        if(moneda === '' || criptomoneda === ''){
            guardarError(true)
            return
        }

        // pasar los datos al componente principal
        guardarError(false)
        guardarMoneda(moneda);
        guardarCriptomoneda(criptomoneda);
    }
    return (
        <form 
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje="Todos los Campos son Obligatorios"/> : null}
            <SelectMonedas />
            <SelectCripto />
            <Boton 
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Formulario