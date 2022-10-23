import styled from "styled-components";
import Fundo from "./Imagem/FundoHoje.png";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CriarHabito from "./CriarHabito";
import { AuthContext } from "./Ayth";
import DeletarHabito from "./DeletarHabito";


export default function HabitosPage() {

    const { token, foto } = useContext(AuthContext);

    const todosOsDias = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [habitosCriados, setHabitosCriados] = useState("");

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config);

        promise.then((res) => {
            console.log("res habito habito", res.data);
            setHabitosCriados(res.data);
        })

        promise.catch((erro) => {
            console.log("erro pagina habitos", erro.response.data);
            alert(erro.response.data.mensagem);
        })
    }, [token]);

    if (!habitosCriados) {
        return <Carregando>Carregando....</Carregando>
    }

    return (
        <Cinza>
            <Header>
                <h1>Tracklt</h1>
                <img src={foto} alt="foto de perfil do usuário" />
            </Header>

            <CriarHabito />

            {(habitosCriados.length === 0) ?
                (<Texto>
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                </Texto>)
                :
                (habitosCriados.map((h, i) =>
                    <Aba key={i}>
                        <Top>
                            <h1>{h.name}</h1>
                            <DeletarHabito />
                        </Top>

                        <Buttons>
                            {todosOsDias.map((item, i) =>
                                <Button
                                    key={i}
                                    corFundo={h.days.includes(i)}
                                    corLetra={h.days.includes(i)}
                                >
                                    {item}
                                </Button>
                            )}
                        </Buttons>

                    </Aba>
                ))}

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
    margin-bottom: 50px;
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
const Aba = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    margin-top: 20px;
    margin-left: 17px;
    border-radius: 5px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0px 15px;
    padding: 8px 0px;
    box-sizing: border-box;
    h1{
        height: 25px;
        color: #666666;
    }
`

const Buttons = styled.div`
    display: flex;
    margin-left: 15px;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 4px;
    width: 30px;
    height: 30px;
    background-color:${props => props.corFundo ? "#CFCFCF" : "#FFFFFF"};
    color:  ${props => props.corLetra ? "#FFFFFF" : "#D4D4D4"};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
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