import React from 'react';
import {S} from "./styled"
import {Button} from "./Button";




type CounterPropsTwo = {
    value: number | string
    setValue: (one: number) => void
}

export const CounterTwo = (props: CounterPropsTwo) => {

    const addValue = () => {
       props.setValue(Number(props.value) + 1)
    }
    const resetValue = () => {
        props.setValue(0)
    }

    return (
        <S.ConteinerCounter>
            <S.InputConteiner fontSize={"50px"} display={"Flex"} alignItems={"center"} justifyContent={"center"}>
                {props.value}
            </S.InputConteiner>
            <S.BtnConteiner>
                <Button title={"inc"} addValue={addValue}/>
                <Button title={"reset"} addValue={resetValue}/>
            </S.BtnConteiner>
        </S.ConteinerCounter>
    );
};

