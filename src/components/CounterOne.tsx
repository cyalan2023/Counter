import React, {ChangeEvent} from 'react';
import {S} from "./styled";
import {Value} from "./Value";
import {Button} from "./Button";

type  CounterPropType = {
    current: string | number
    addVal: (e: ChangeEvent<HTMLInputElement>) => void
    current2: string | number
    addVal2: (e: ChangeEvent<HTMLInputElement>) => void
    addVal3: () => void

}
export const CounterOne = (props: CounterPropType) => {


    return (
        <S.ConteinerCounter>
            <S.InputConteiner>
                <Value current={props.current} addValue={props.addVal} title={"max value:"}/>
                <Value current={props.current2} addValue={props.addVal2} title={"start value:"}/>
            </S.InputConteiner>
            <S.BtnConteiner>
                <Button title={"Set"} addValue={props.addVal3}/>
            </S.BtnConteiner>
        </S.ConteinerCounter>
    );
};

