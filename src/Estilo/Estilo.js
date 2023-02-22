import styled from "styled-components";
import CORES from "./Constante/Colors";

export const LogoTipo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 25%;
        min-width: 250px;
        height: 25%;
    }
`

export const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        width: 40%;
        min-width: 325px;
        height: 45px;  
        border-radius: 5px;
        border-color: #D4D4D4;
        border-style: solid;
        margin-bottom: 6px;
    }
    input::placeholder{
        color: #DBDBDB;
        font-style: regular;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 25px;
    }
`

export const Botao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 26px;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 26px;
        background-color: ${CORES.base};
        width: 40.6%;
        min-width: 330px;
        height: 45px;  
        border-radius: 4.64px;
        border-style: none;
        color: #FFFFFF;
        font-size: 27px;
    }
`

export const Rodape = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    vertical-align: #52B6FF;
    h1{
        color: ${CORES.base};
        font-style: regular;
        font-weight: 400;
        font-size: 13.98px;
        line-height: 17px;  
    }
`