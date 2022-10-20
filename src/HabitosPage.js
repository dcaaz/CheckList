import styled from "styled-components";
import Fundo from "./Imagem/FundoHoje.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CriarHabito from "./CriarHabito";
import { AuthContext } from "./Ayth";

export default function HabitosPage() {

    const {token, foto} = useContext(AuthContext);

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config);

        promise.then((res) => {
            console.log(res);
        })

        promise.catch((erro) => {
            console.log(erro.response.data);
        })
    }, []);

    return (
        <Cinza>
            <Header>
                <h1>Tracklt</h1>
                <img src={foto} alt="foto de perfil do usuário" />
            </Header>

            <CriarHabito/>

            <Texto>
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
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