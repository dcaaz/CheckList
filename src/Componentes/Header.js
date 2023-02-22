import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../Ayth";
import CORES from "../Estilo/Constante/Colors";

export default function HeaderAll() {

    const { foto } = useContext(AuthContext);

    return (
        <Header>
            <h1>CheckListDani</h1>
            <img src={foto} alt="foto de perfil do usuário" />
        </Header>
    )
}

const Header = styled.div`
    background-color: ${CORES.base};
    height:  70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 18px;
    box-sizing: border-box;
    position: fixed;
    top: 0px;
    h1 {
        color: ${CORES.fonte};
        font-family: 'Playball';
        font-size: 30px;
        font-weight: 400;
        line-height: 48.73px;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`