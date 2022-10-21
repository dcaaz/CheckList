import styled from "styled-components";
import Lixeira from "./Imagem/Lixeira.png";

export default function DeletarHabito() {
    
    function deletar(){
        console.log("Deletar!!!");
    }
    
    return (
        <>
            <Img>
                <img onClick={deletar} src={Lixeira} alt="icone lexeira" />
            </Img>
        </>
    )
}

const Img = styled.div`
    img{
        width: 13px;
        height: 15px;
    }
`

