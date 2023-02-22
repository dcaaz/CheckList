import Logo from "../Imagem/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
import { Rodape, Input, Botao, LogoTipo } from "../Estilo/Estilo";

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
            setCarregando(false);
            alert(erro.response.data.message);
            setDesabilitar(false);
        })
    }

    return (
        <>
            <LogoTipo>
                <img src={Logo} alt="logo" />
            </LogoTipo>

            <form onSubmit={cadastrar}>
                <Input>
                    <input
                        type="email"
                        autocomplete="off"
                        placeholder="   email"
                        onChange={(e) => setEmailCadastro(e.target.value)}
                        value={emailCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        type="password"
                        autocomplete="off"
                        placeholder="  senha"
                        onChange={(e) => setSenhaCadastro(e.target.value)}
                        value={senhaCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        type="text"
                        autocomplete="off"
                        placeholder="   nome"
                        onChange={(e) => setNomeCadastro(e.target.value)}
                        value={nomeCadastro}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        type="url"
                        autocomplete="off"
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

            <Rodape>
                <Link to="/">
                    <h1>Já tem uma conta? Faça login!</h1>
                </Link>
            </Rodape>
        </>
    )
}