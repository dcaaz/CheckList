import styled from "styled-components";
import BobEsponja from "./Imagem/BobEsponja.png";

export default function HabitosPage() {
    return (
        <>
            <Header>
                <h1>Tracklt</h1>
                <img src={BobEsponja} />
            </Header>
            <Menu>
                <h1>Meus hábitos</h1>
                <button>+</button>
            </Menu>
            <Texto>
                <h1>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</h1>
            </Texto>
            <Footer>
                <h1>teste</h1>
                <h1>teste</h1>
                <h1>teste</h1>
            </Footer>
        </>
    )
}

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
`