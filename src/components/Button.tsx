import React from 'react';
import {S} from "./styled";


type ButtonProps = {
    title: string
    addValue?: () => void
}

export const Button = (props: ButtonProps) => {
    return (
        <div>
            <S.Btn onClick={props.addValue}>
                {props.title}
            </S.Btn>
        </div>

    );
};

