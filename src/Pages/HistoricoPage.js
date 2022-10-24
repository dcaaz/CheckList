import styled from "styled-components";
import Fundo from "../Imagem/FundoHoje.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../Ayth";
import { useContext } from "react";


export default function HistoricoPage() {

    const { foto } = useContext(AuthContext);

    return (
        <Cinza>
            <Header>
                <h1>Tracklt</h1>
                <img src={foto} alt="foto de perfil do usuário" />
            </Header>
            <Menu>
                <h1>Histórico</h1>
            </Menu>
            <Texto>
                <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
            </Texto>
            <Footer>
                <Link to="/habitos">
                    <h1>Hábitos</h1>
                </Link>
                <Link to="/hoje">
                    <img src={Fundo} alt="icone hoje" />
                </Link>
                <Link to="/historico">
                    <h1>Histórico</h1>
                </Link>
            </Footer>
        </Cinza>
    )
}

const Cinza = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: #E5E5E5;
`

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

const Menu = styled.div`
    height:  40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 28px 0px;
    padding: 0px 18px;
    box-sizing: border-box;
    h1 {
        color: #126BA5;
        font-style: regular;
        font-size: 22.98px;
        font-weight: 400;
        line-height: 29px;
    }
`

const Texto = styled.div`
    margin: 0px 20px;
    h1 {
        font-style: regular;
        font-size: 17.98px;
        line-height: 22px;
        line-height: 100%;
        color: #666666;
    }
`
const Footer = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0px;
    h1{ 
        font-style: regular;
        font-size: 17.98px;
        line-height: 22px;
        line-height: 100%;
        color: #52B6FF;
    }
    img{
        margin-bottom: 16px;
        display: flex;
    }
`