import CheckImg from "../Imagem/Check.png";
import axios from "axios";
import styled from "styled-components";
import { AuthContext } from "../Ayth";
import { useContext } from "react";

export default function CheckTarefa({ done, id, setCheck }) {

    const { token } = useContext(AuthContext);
    
    function check(){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, null, config);

        promise.then((res) => {
            setCheck([]);
        })

        promise.catch((erro) => {
            console.log("erro marcar check tarefa", erro.response.data);
            alert(erro.response.data.mensagem);
        })
    }

    function desmarcarCheck(){
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, null, config);

        promise.then((res) => {
            console.log("res desmarcar check tarefa", res.data);
            setCheck([]);
        })

        promise.catch((erro) => {
            console.log("erro desmacar check tarefa", erro.response.data);
            alert(erro.response.data.mensagem);
        })
    }

    return (
        <Check  corFundo={done}>
            <img data-identifier="done-habit-btn" onClick={done ? desmarcarCheck : check} src={CheckImg} alt="check na tarefa" />
        </Check>
    )
}

const Check = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 69px;
    height: 69px;
    background-color: ${props => props.corFundo ? "#8FC549" : "#E7E7E7"};
    border-radius: 5px;
    img{
        width: 35px;
        height: 28px;
    }
`