import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function CriarHabito() {

    // const [nomeHabito, setNomeHabito] = useState("");
    // const [diasHabito, setDiasHabito] = useState("");

    // const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    // const body = {
    //     name: nomeHabito,
    //     days: diasHabito
    // }

    // const config = {
    //     headers: {
    //         "Authorization": `Bearer ${token}`
    //     }
    // }

    // const promise = axios.post(URL, body, config);

    // promise.then((res) => {
    //     console.log(res);
    // })

    // promise.catch((err) => {
    //     console.log("erro", err.response.data.mensagem);
    //     alert(err.response.data.mensagem);
    // })

    return (
        <>
            <Menu>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </Menu>
        </>
    )
}

const Menu = styled.div`
    height:  40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 68px;
    margin-bottom: 20px;
    padding: 30px 18px;
    box-sizing: border-box;
    h1 {
        color: #126BA5;
        font-style: regular;
        font-size: 22.98px;
        font-weight: 400;
        line-height: 29px;
    }
    button {
        background-color: #52B6FF;
        width: 40px;
        height: 35px;
        border-radius: 4.64px;
        border-style: none;
        color: #FFFFFF;
        font-size: 27px;
    }
`