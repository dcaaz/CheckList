import styled from "styled-components";
import Logo from "../Imagem/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function CadastroPage() {
    const [emailCadastro, setEmailCadastro] = useState("");
    const [senhaCadastro, setSenhaCadastro] = useState("");
    const [nomeCadastro, setNomeCadastro] = useState("");
    const [fotoCadastro, setFotoCadastro] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    function cadastrar(e) {
        e.preventDefault();

        setDesabilitar(true);
        setCarregando(true);

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";

        const body = {
            email: emailCadastro,
            name: nomeCadastro,
            image: fotoCadastro,
            password: senhaCadastro
        }

        const promise = axios.post(URL, body);

        promise.then(() => {
            setDesabilitar(true);
            navigate("/");
        })

        promise.catch((erro) => {
            console.log("erro pagina de cadastro", erro.response.data.mensagem);
            alert(erro.response.data.mensagem);
            setDesabilitar(false);
        })
    }

    return (
        <Branco>
            <LogoTipo>
                <img src={Logo} alt="logo" />
            </LogoTipo>

            <form onSubmit={cadastrar}>
                <Input>
                    <input
                        id="email"
                        type="email"
                        placeholder="   email"
                        onChange={(e) => setEmailCadastro(e.target.value)}
                        value={emailCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        id="senha"
                        type="password"
                        placeholder="  senha"
                        onChange={(e) => setSenhaCadastro(e.target.value)}
                        value={senhaCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        id="nome"
                        type="text"
                        placeholder="   nome"
                        onChange={(e) => setNomeCadastro(e.target.value)}
                        value={nomeCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        id="foto"
                        type="url"
                        placeholder="   foto"
                        onChange={(e) => setFotoCadastro(e.target.value)}
                        value={fotoCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Botao>
                    <button
                        type="submit"
                        disabled={desabilitar}>
                        {carregando ?
                            <ThreeDots
                                color={"white"}
                            />
                            :
                            <h1>Cadastrar</h1>
                        }
                    </button>
                </Botao>
            </form>

            {/* <Loader
                type="Spinner Type"
                color="rgb color"
                height={number}
                width={number}
                timeout={number in ms}
            /> */}

            <Cadastro>

                <Link to="/">
                    <h1>Já tem uma conta? Faça login!</h1>
                </Link>
            </Cadastro>
        </Branco>

    )
}

const Branco = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;

`

const LogoTipo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px 0px 97px;
    box-sizing: border-box;
   img{
        width: 180px;
        height: 178.38px;
   }
`

const Input = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        width: 303px;
        height: 45px;  
        border-radius: 5px;
        border-color: #D4D4D4;
        border-style: solid;
        margin-bottom: 6px;
    }
    input::placeholder{
        color: #DBDBDB;
        font-style: regular;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 25px;
    }
`

const Botao = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 26px;
    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #52B6FF;
        width: 309px;
        height: 45px;  
        border-radius: 4.64px;
        border-style: none;
        color: #FFFFFF;
        font-size: 27px;
    }
`

const Cadastro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    vertical-align: top;
    vertical-align: 
#52B6FF;
    h1{
        color: #52B6FF;
        font-style: regular;
        font-weight: 400;
        font-size: 13.98px;
        line-height: 17px;  
    }
`