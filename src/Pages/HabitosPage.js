import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CriarHabito from "../Componentes/CriarHabito";
import { AuthContext } from "../Ayth";
import DeletarHabito from "../Componentes/DeletarHabito";
import FooterAll from "../Componentes/Footer";
import HeaderAll from "../Componentes/Header";

export default function HabitosPage() {

    const { token } = useContext(AuthContext);

    const todosOsDias = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [habitosCriados, setHabitosCriados] = useState("");
    const [recarregar, setRecarregar] = useState();

    useEffect(() => {
        const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const promise = axios.get(url, config);

        promise.then((res) => setHabitosCriados(res.data));

        promise.catch((erro) => {
            console.log("erro pagina habitos", erro.response.data);
            alert(erro.response.data.mensagem);
        })

    }, [token, recarregar]);

    if (!habitosCriados) {
        return <Carregando>Carregando....</Carregando>
    }

    return (
        <Cinza>
            <HeaderAll />
            <CriarHabito setRecarregar={setRecarregar} />

            {(habitosCriados.length === 0) ?
                (<Texto data-identifier="no-habit-message">
                    <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
                </Texto>)
                :
                (habitosCriados.map((hab, i) =>
                    <Aba key={i}>
                        <Top>
                            <h1 data-identifier="habit-name">{hab.name}</h1>
                            <DeletarHabito hab={hab.id} setRecarregar={setRecarregar} />
                        </Top>

                        <Buttons>
                            {todosOsDias.map((item, i) =>
                                <Button
                                    key={i}
                                    corFundo={hab.days.includes(i)}
                                    corLetra={hab.days.includes(i)}
                                >
                                    {item}
                                </Button>
                            )}
                        </Buttons>

                    </Aba>
                ))}
            <FooterAll />
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

const Carregando = styled.h1`
    font-size: 40px;
`