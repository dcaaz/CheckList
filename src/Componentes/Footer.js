import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { useContext } from "react";
import { AuthContext } from "../Ayth";

export default function FooterAll() {

    const { porcentagem } = useContext(AuthContext);

    return (
        <Footer>
            <Link data-identifier="habit-page-action" to="/habitos">
                <h1>Hábitos</h1>
            </Link>
            <Link to="/hoje">
                <CircularProgressbarWithChildren
                    value={porcentagem}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52B6FF",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent",
                        strokeLinecap: 'round'
                    })}> <span> Hoje </span>
                </CircularProgressbarWithChildren>
            </Link>
            <Link data-identifier="historic-page-action" to="/historico">
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
    svg{
        width: 100px;
        height: 100px;
        margin-bottom: 35px;
    }
    span{
        margin-bottom: 110px;
        color: #FFFFFF;
    }
`