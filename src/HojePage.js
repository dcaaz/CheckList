import styled from "styled-components";
import Fundo from "./Imagem/FundoHoje.png";
import { Link, useNavigate } from "react-router-dom";
//import FundoVerde from "./Imagem/FundoVerde.png";
import FundoCinza from "./Imagem/FundoCinza.png";
import { AuthContext } from "./Ayth";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';

export default function HojePage() {

    const { token, foto } = useContext(AuthContext);
    const navigate = useNavigate;

    const [habitosHoje, setHabitosHoje] = useState("");

    console.log("day", dayjs().locale("pt-br").format("dddd, D/MM"));

    let dia = dayjs().locale("pt-br").format("dddd, D/MM");
    dia = dia[0].toUpperCase() + dia.substring(1).replace('-feira', '');

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config);

        promise.then((res) => {
            console.log("res hoje", res);
            setHabitosHoje(res.data);
        })

        promise.catch((erro) => {
            console.log("erro pagina hoje", erro.response.data);
            navigate("/");
            window.location.reload();
        })
    }, [navigate, token]);

    if (!habitosHoje) {
        return <Carregando>Carregando....</Carregando>
    }

    return (
        <Cinza>
            <Header>
                <h1>Tracklt</h1>
                <img src={foto} alt="foto de perfil do usuário" />
            </Header>

            <DiaDaSemana>
                <h1>{dia}</h1>
            </DiaDaSemana>

            <PorcentagemHabitos>
                <h1>Nenhum hábito concluído ainda</h1>
            </PorcentagemHabitos>

            {habitosHoje.map((h) =>
                <Metas key={h.id}>
                    <Texto>
                        <h1>{h.name}</h1>
                        <Dados>
                            <h1>Sequência atual:{h.currentSequence} dia</h1>
                            <h1>Seu recorde:{h.highestSequence} dia</h1>
                        </Dados>
                    </Texto>
                    <Check>
                        <img src={FundoCinza} alt="check na tarefa" />
                    </Check>
                </Metas>
            )}

            <Footer>
                <Link to="/habitos">
                    <h1>Hábitos</h1>
                </Link>
                <img src={Fundo} alt="icone hoje" />
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

const DiaDaSemana = styled.div`
    height: 29px;
    margin-top: 68px;
    padding-top: 30px;
    margin-left: 17px;
    margin-bottom: 28px;
    box-sizing: border-box;
    h1 {
        color: #126BA5;
        font-style: regular;
        font-size: 22.98px;
        font-weight: 400;
        line-height: 29px;
    }
`

const PorcentagemHabitos = styled.div`
    height: 22px;
    margin-top: 2px;
    margin-left: 17px;
    margin-bottom: 28px;
    h1{
        color: #BABABA;
        font-style: regular;
        font-size: 17.98px;
        font-weight: 400;
        line-height: 22px;
    }
`

const Metas = styled.div`
    width: 340px;
    height: 94px;
    margin-left: 17px;
    margin-bottom: 10px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 13px;
    box-sizing: border-box;
`
const Texto = styled.div`
    width: 208px;
    h1{
        color: #666666;
        font-style: regular;
        font-size: 19.98px;
        font-weight: 400;
        line-height: 25px;
        margin-bottom: 7px;
    }
`

const Dados = styled.div`
    h1{
        color: #666666;
        font-style: regular;
        font-size: 12.98px;
        font-weight: 400;
        line-height: 16px;
        margin-bottom: 0px;
    }  
`

const Check = styled.div`
    width: 69px;
    height: 69px;
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

const Carregando = styled.h1`
    font-size: 40px;
`