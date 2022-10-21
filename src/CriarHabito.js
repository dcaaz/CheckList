import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./Ayth";

export default function CriarHabito() {

    const { token } = useContext(AuthContext);
    const navigate = useNavigate;

    const todosOsDias = ["D", "S", "T", "Q", "Q", "S", "S"];

    const [nomeHabito, setNomeHabito] = useState("");
    const [diaDaSemana, setDiaDaSemana] = useState([]);
    const [desabilitar, setDesabilitar] = useState(false);
    const [esconde, setEsconde] = useState("none");
    const [habitoCriado, setHabitoCriado] = useState("");

    function botaoMais() {
        setEsconde("flex");
    }

    function diasClicados(dia) {

        if (!diaDaSemana.includes(dia)) {
            setDiaDaSemana([...diaDaSemana, dia]);
        } else {
            let novoArray = diaDaSemana.filter(item => item !== dia);
            setDiaDaSemana(novoArray);
        }
    }

    console.log("dia da semana", diaDaSemana);
    console.log("nomeHabito", nomeHabito);

    function salvar() {

        setDesabilitar(true);

        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

        const body = {
            name: nomeHabito,
            days: diaDaSemana
        }

        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.post(URL, body, config);

        promise.then((res) => {
            console.log("resp pagina criar habitos", res.data);
            setHabitoCriado(res.data);
            setDesabilitar(false);
            setNomeHabito("");
            setDiaDaSemana([]);
        })

        promise.catch((erro) => {
            console.log("erro pagina criar habitos", erro.response.data);
            navigate("/");
            window.location.reload();
        })
    }

    function cancelar() {
        setEsconde("none");
    }

    return (
        <>
            <Menu>
                <h1>Meus hábitos</h1>
                <button onClick={botaoMais}>+</button>
            </Menu>

            <AbaCadastro esconde={esconde}>
                <Input>
                    <input
                        id="nome habito"
                        type="text"
                        placeholder="  nome do habito"
                        onChange={(e) => setNomeHabito(e.target.value)}
                        value={nomeHabito}
                        required
                        disabled={desabilitar}
                    />
                </Input>

                <Buttons>
                    {todosOsDias.map((item, i) =>
                        <Button
                            key={i}
                            corFundo={diaDaSemana.includes(i)}
                            corLetra={diaDaSemana.includes(i)}
                            onClick={() => diasClicados(i)}
                            disabled={desabilitar}
                        >
                            {item}
                        </Button>
                    )}
                </Buttons>

                <Salvar>
                    <h1 onClick={cancelar}>Cancelar</h1>
                    <button onClick={salvar}>Salvar</button>
                </Salvar>

            </AbaCadastro>
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

const AbaCadastro = styled.div`
    display: ${props => props.esconde};
    flex-direction: column;
    width: 340px;
    height: 180px;
    background-color: #FFFFFF;
    margin-left: 17px;
    margin-bottom: 29px;
    border-radius: 5px;
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
        margin-top: 18px;
    }
    input::placeholder{
        color: #DBDBDB;
        font-style: regular;
        font-weight: 400;
        font-size: 19.98px;
        line-height: 25px;
    }
`
const Buttons = styled.div`
    margin-left: 19px;
    margin-top: 8px;
    display: flex;
`

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background-color: ${props => props.corFundo ? "#CFCFCF" : "#FFFFFF"};
    color:  ${props => props.corLetra ? "#FFFFFF" : "#D4D4D4"};
    border: 1px solid #CFCFCF;
    border-radius: 5px;
`

const Salvar = styled.div`
    display: flex;
    align-items: center;
    margin-left: 148px;
    margin-top: 20px;
    button{
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        color: #FFFFFF;
        margin-left: 23px;

        border: 1px solid #52B6FF;
        border-radius: 5px;
    }
    h1{
        color: #52B6FF;
    }
`