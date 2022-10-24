import { Link } from "react-router-dom";
import styled from "styled-components";
import Fundo from "../Imagem/FundoHoje.png";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';

export default function FooterAll() {
    const value = 0.66;
    return (
        <Footer>
            <Link to="/habitos">
                <h1>Hábitos</h1>
            </Link>
            <Link to="/hoje">
                <CircularProgressbarWithChildren value={value}
                    background={true}
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "red",
                        textColor: "pink",
                        // pathColor: "#fff",
                        // trailColor: "transparent",
                        // strokeLinecap: 'round'
                    })}> <span> Hoje </span>
                </CircularProgressbarWithChildren>
            </Link>
            <Link to="/historico">
                <h1>Histórico</h1>
            </Link>
        </Footer>
    )
}

const Footer = styled.div`
    width: 100%;
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