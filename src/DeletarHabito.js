import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "./Ayth";
import Lixeira from "./Imagem/Lixeira.png";

export default function DeletarHabito() {

    const { token } = useContext(AuthContext);
    
    function deletar(){
        console.log("Deletar!!!");

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO";

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, config);

        promise.then((res) => {
            console.log("resp pagina criar habitos", res.data);
        })

        promise.catch((erro) => {
            console.log("erro pagina criar habitos", erro.response.data);
            alert(erro.response.data.mensagem);
        })
    }
    
    return (
        <>
            <Img>
                <img onClick={(i) => deletar} src={Lixeira} alt="icone lexeira" />
            </Img>
        </>
    )
}

const Img = styled.div`
    img{
        width: 13px;
        height: 15px;
    }
`

