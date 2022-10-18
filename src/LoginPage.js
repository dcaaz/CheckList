import styled from "styled-components";
import Logo from "./Imagem/Logo.png";

export default function LoginPage() {
    return (
        <>
            <LogoTipo>
                <img src={Logo} alt="logo" />
            </LogoTipo>
            <Input>
                <input
                    placeholder="   email"
                />
            </Input>
            <Input>
                <input
                    placeholder="  senha"
                />
            </Input>
            <Botao>
                <button>
                    <h1>Entrar</h1>
                </button>
            </Botao>
            <Cadastro>
                <h1>Não tem uma conta? Cadastre-se!</h1>
            </Cadastro>
        </>
    )
}

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
    h1{
        color: #52B6FF;
        font-style: regular;
        font-weight: 400;
        font-size: 13.98px;
        line-height: 17px;  
    }
`