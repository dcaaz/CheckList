import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../Ayth";

export default function HeaderAll() {

    const { foto } = useContext(AuthContext);

    return (
        <Header>
            <h1>TrackIt</h1>
            <img  data-identifier="avatar" src={foto} alt="foto de perfil do usuário" />
        </Header>
    )
}

const Header = styled.div`
    background-color: #126BA5;
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
        color: #FFFFFF;
        font-family: 'Playball', cursive;
        font-style: regular;
        font-size: 38.98px;
        font-weight: 400;
        line-height: 48.73px;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`