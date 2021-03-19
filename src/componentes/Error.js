import React from 'react'
import styled from '@emotion/styled'

const MensajeError = styled.p({
    backgroundColor: "#D30F0F",
    padding: "1rem",
    color: "#FFF",
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Bebas Neue" && "cursive",
    width: "145%",
    marginLeft: -150
})

const Error = ({mensaje}) => {
    return (
        <MensajeError>{mensaje}</MensajeError>
    )
}

export default Error