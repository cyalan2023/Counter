import React, {ChangeEvent} from 'react';
import {S} from "./styled"

type PropsNameInput = {
    title: string
    current: string | number
    addValue:(e: ChangeEvent<HTMLInputElement>) => void

}

export const Value = (props: PropsNameInput) => {

    return (
        <S.ValueDivStyle>
            <S.NameInputStyle>{props.title}</S.NameInputStyle>
           <S.InputStyle value={props.current} onChange={props.addValue} type={"number"}/>
        </S.ValueDivStyle>
    );
};

