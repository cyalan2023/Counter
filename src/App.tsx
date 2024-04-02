import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {CounterOne} from "./components/CounterOne";
import {CounterTwo} from "./components/CounterTwo";


function App() {
    const [value, setValue] = useState<number | string>(0)
    const [startValue, setStartValue] = useState<number | string>("")
    const[maxValue, setMaxValue] = useState<number | string>("")

    const addValueStart= (e: ChangeEvent<HTMLInputElement>) => {
       const val = Number(e.currentTarget.value)
        setStartValue(val)
       //  if(val < 0){
       //      setValue("No correct")
       //  }else {
       //      setValue(value)
       //  }
    }
    const addValueMax= (e: ChangeEvent<HTMLInputElement>) => {
        const valMax = Number(e.currentTarget.value)
        console.log(valMax)
        console.log(startValue)
            setMaxValue(valMax)
    }
    const addInc = () => {
        // if (typeof startValue === 'number') {
        //     setValue(startValue);
        // }
    };
    return (
        <div style={{display: "flex"}}>
            <CounterOne current={maxValue}  current2={startValue} addVal3={addInc} addVal={addValueMax} addVal2={addValueStart}/>
            <CounterTwo value={value}  setValue={setValue}/>
        </div>
);
}

export default App;
