import Logo from "../Imagem/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Ayth";
import { ThreeDots } from "react-loader-spinner";
import { Input, Rodape, Botao, LogoTipo } from "../Estilo/Estilo";

export default function LoginPage() {

    const [emailLogin, setEmailLogin] = useState("");
    const [senhaLogin, setSenhaLogin] = useState("");
    const [desabilitar, setDesabilitar] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    const { setToken, setFoto } = useContext(AuthContext);


    function logar(e) {
        e.preventDefault();

        setDesabilitar(true);
        setCarregando(true);

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

        const body = {
            email: emailLogin,
            password: senhaLogin
        }

        const promise = axios.post(URL, body);
        promise.then((res) => {
            setToken(res.data.token);
            setFoto(res.data.image)
            navigate("/hoje");
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

            <form onSubmit={logar}>
                <Input>
                    <input
                        type="email"
                        placeholder="   email"
                        onChange={(e) => setEmailLogin(e.target.value)}
                        value={emailLogin}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Input>
                    <input
                        type="password"
                        placeholder="  senha"
                        onChange={(e) => setSenhaLogin(e.target.value)}
                        value={senhaLogin}
                        required
                        disabled={desabilitar}
                    />
                </Input>
                <Botao>
                    <button
                        type="submit"
                        disabled={desabilitar}
                    >
                        {carregando ?
                            <ThreeDots
                                color={"white"}
                            />
                            :
                            <h1>Entrar</h1>
                        }
                    </button>
                </Botao>
            </form>

            <Rodape>
                <Link to="/cadastro">
                    <h1>Não tem uma conta? Cadastre-se!</h1>
                </Link>
            </Rodape>
        </>
    )
}

