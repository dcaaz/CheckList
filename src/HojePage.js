import styled from "styled-components";
import BobEsponja from "./Imagem/BobEsponja.png";
import Fundo from "./Imagem/FundoHoje.png";
import { Link } from "react-router-dom";
//import FundoVerde from "./Imagem/FundoVerde.png";
import FundoCinza from "./Imagem/FundoCinza.png";

export default function HojePage() {
    return (
        <Cinza>
            <Header>
                <h1>Tracklt</h1>
                <img src={BobEsponja} alt="foto de perfil do usuário"/>
            </Header>
            <DiaDaSemana>
                <h1>Segunda, 17/05</h1>
            </DiaDaSemana>
            <PorcentagemHabitos>
                <h1>Nenhum hábito concluído ainda</h1>
            </PorcentagemHabitos>
            <Metas>
                <Texto>
                    <h1>Ler 1 capítulo de livro</h1>
                    <Dados>
                        <h1>Sequência atual: 3 dias</h1>
                        <h1>Seu recorde: 5 dias</h1>
                    </Dados>
                </Texto>
                <Check>
                    <img src={FundoCinza} alt="check na tarefa" />
                </Check>
            </Metas>
            <Metas>
                <Texto>
                    <h1>Ler 1 capítulo de livro</h1>
                    <Dados>
                        <h1>Sequência atual: 3 dias</h1>
                        <h1>Seu recorde: 5 dias</h1>
                    </Dados>
                </Texto>
                <Check>
                    <img src={FundoCinza} alt="check na tarefa" />
                </Check>
            </Metas>
            <Footer>
                <h1>Hábitos</h1>
                <Link to="/hoje">
                    <img src={Fundo} alt="icone hoje" />
                </Link>
                <Link to="/historico">
                <h1>Histórico</h1>
                </Link>
            </Footer>
        </Cinza>
    )
}

const Cinza = styled.div`
    width: 375px;
    height: 100vh;
    align-items: center;
    background-color: #E5E5E5;
`

const Header = styled.div`
    background-color: #126BA5;
    height:  70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 18px;
    box-sizing: border-box;
    h1 {
        color: #FFFFFF;
        font-style: regular;
        font-size: 38.98px;
        font-weight: 400;
        line-height: 48.73px;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 98.5px;
    }
`

const DiaDaSemana = styled.div`
    height: 29px;
    margin-top: 28px;
    margin-left: 17px;
    margin-bottom: 28px;
    h1 {
        color: #126BA5;
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
    h1{
        color: #BABABA;
        font-style: regular;
        font-size: 17.98px;
        font-weight: 400;
        line-height: 22px;
    }
`

const Metas = styled.div`
    width: 340px;
    height: 94px;
    margin-left: 17px;
    margin-bottom: 10px;
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

const Dados = styled.div`
    h1{
        color: #666666;
        font-style: regular;
        font-size: 12.98px;
        font-weight: 400;
        line-height: 16px;
        margin-bottom: 0px;
    }  
`

const Check = styled.div`
    width: 69px;
    height: 69px;
`

const Footer = styled.div`
    width: 375px;
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0px;
    h1{ 
        font-style: regular;
        font-size: 17.98px;
        line-height: 22px;
        line-height: 100%;
        color: #52B6FF;
    }
    img{
        margin-bottom: 16px;
        display: flex;
    }
`