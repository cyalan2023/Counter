import styled from "styled-components";


type InputConteinerType = {
    fontSize?: string;
    display?: string;
    alignItems?: string;
    justifyContent?: string;
}

const ConteinerCounter = styled.div`
    border: 1px solid turquoise;
    gap: 50px;
    width: 350px;
    height: 200px;
    padding: 10px;
    margin: 0 auto;
    background: black;
    border-radius: 10x;
`

const BtnConteiner = styled.div`
    border: 1px solid turquoise;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    margin-top: 10px;
    border-radius: 10px;
   
`

const Btn = styled.button`
    height: 100%;
    width: 150%;
    font-size: 26px;
    border-radius: 10px;
    background: turquoise;
    text-align:center;
   
`
const InputConteiner = styled.div<InputConteinerType>`
    border: 1px solid turquoise;
    border-radius: 10px;
    color: turquoise;
    font-size: ${props => props.fontSize ? props.fontSize : "" };
    display: ${props => props.display ? props.display : "" };
    align-items: ${props => props.alignItems? props.alignItems : "" };
    justify-content: ${props => props.justifyContent ? props.justifyContent : "" };
    height: 130px;


`
const ValueDivStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const NameInputStyle = styled.h3`
color: turquoise;
`
const InputStyle = styled.input`
    height: 26px;
    border-radius: 10px;
    align-items: center;
    outline: none;
    border: 1px solid turquoise;
    text-align: center;
`
export const S = {
    ConteinerCounter,
    BtnConteiner,
    Btn,
    InputConteiner,
    ValueDivStyle,
    NameInputStyle,
    InputStyle
}