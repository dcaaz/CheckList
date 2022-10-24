import styled from "styled-components";
import FooterAll from "../Componentes/Footer";
import HeaderAll from "../Componentes/Header";

export default function HistoricoPage() {

    return (
        <Cinza>
            <HeaderAll />
            <Menu>
                <h1>Histórico</h1>
            </Menu>
            <Texto>
                <h1>Em breve você poderá ver o histórico dos seus hábitos aqui!</h1>
            </Texto>
            <FooterAll />
        </Cinza>
    )
}

const Cinza = styled.div`
    width: 100%;
    height: 100vh;
    align-items: center;
    background-color: #E5E5E5;
`
const Menu = styled.div`
    height:  40px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 28px 0px;
    padding: 0px 18px;
    box-sizing: border-box;
    h1 {
        color: #126BA5;
        font-style: regular;
        font-size: 22.98px;
        font-weight: 400;
        line-height: 29px;
    }
`

const Texto = styled.div`
    margin: 0px 20px;
    h1 {
        font-style: regular;
        font-size: 17.98px;
        line-height: 22px;
        line-height: 100%;
        color: #666666;
    }
`