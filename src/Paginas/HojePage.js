import styled from "styled-components";
import { AuthContext } from "../Ayth";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';
import CheckTarefa from "../Componentes/CheckTarefa";
import FooterAll from "../Componentes/Footer";
import HeaderAll from "../Componentes/Header";
import { Carregando } from "../Estilo/Estilo";
import CORES from "../Estilo/Constante/Colors";

export default function HojePage() {

    const { token, porcentagem, setPorcentagem } = useContext(AuthContext);

    const [habitosHoje, setHabitosHoje] = useState("");
    const [check, setCheck] = useState();

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
            let habitos = res.data;
            let concluidos = habitos.filter((h) => h.done).length;

            setHabitosHoje(habitos);

            if (habitos.length === 0) {
                setPorcentagem(0);
            } else {
                setPorcentagem((concluidos / habitos.length) * 100);
            }
        });

        promise.catch((erro) => {
            alert(erro.response.data.message);
        })
    }, [token, check, setPorcentagem]);

    if (!habitosHoje) {
        return <Carregando>Carregando....</Carregando>
    }

    return (
        <Cinza>
            <HeaderAll />

            <DiaDaSemana>
                <h1>{dia}</h1>
            </DiaDaSemana>

            <PorcentagemHabitos>
                {porcentagem === 0
                    ?
                    <h1>Nenhum hábito concluído ainda</h1>
                    :
                    <h2>{porcentagem.toFixed(0)}% dos habitos concluídos</h2>
                }
            </PorcentagemHabitos>

            {habitosHoje.map((hab) =>
                <Metas key={hab.id}>
                    <Texto>
                        <h1>{hab.name}</h1>
                        <Sequencia>
                            <h2>Sequência atual: <Cor corLetra={hab.done}> {hab.currentSequence} {hab.highestSequence < 2 ? " dia" : " dias"}</Cor></h2>
                            <h2>Seu recorde: <Cor corLetra={hab.done}> {hab.highestSequence} {hab.highestSequence < 2 ? " dia" : " dias"}</Cor></h2>
                        </Sequencia>
                    </Texto>
                    <CheckTarefa
                        setCheck={setCheck}
                        done={hab.done}
                        id={hab.id} />
                </Metas>
            )}

            <FooterAll porcentagem={porcentagem} />
        </Cinza>
    )
}

const Cinza = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: #E5E5E5;
`

const DiaDaSemana = styled.div`
    height: 29px;
    margin-top: 68px;
    padding-top: 30px;
    margin-left: 17px;
    margin-bottom: 28px;
    box-sizing: border-box;
    h1 {
        color: ${CORES.fonte};
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
    color: #BABABA;
    font-style: regular;
    font-size: 17.98px;
    font-weight: 400;
    line-height: 22px;
    h2{
        color: #8FC549;
    }
`

const Metas = styled.div`
    width: 340px;
    height: 94px;
    margin-left: 17px;
    margin-bottom: 10px;
    border-radius: 5px;
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

const Sequencia = styled.div`
    h2{
        display: flex;
        color: #666666;
        font-size: 12.98px;
        line-height: 16px;
        margin-bottom: 0px; 
    }
`

const Cor = styled.p`
    color: ${props => props.corLetra ? "#8FC549" : "#666666"};
    margin-left: 2px;
`