import axios from "axios";
import { useContext } from "react";
import styled from "styled-components";
import Lixeira from "../Imagem/Lixeira.png";
import { AuthContext } from "../Ayth";

export default function DeletarHabito({ hab, setRecarregar }) {

    const { token } = useContext(AuthContext);

    function deletar() {

        if (window.confirm("Deseja excluir este hábito?")) {

            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${hab}`;

            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }

            const promise = axios.delete(URL, config);

            promise.then(() => setRecarregar([]));

            promise.catch((erro) => {
                alert(erro.response.data.message);
            })

        }
    }

    return (
        <>
            <Img>
                <img onClick={deletar} src={Lixeira} alt="icone lexeira" />
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

