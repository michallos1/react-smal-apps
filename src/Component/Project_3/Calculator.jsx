import React, { useEffect, useState } from 'react';
import KeyButton from './Key';
import './calculator.css';


export default function Calculator() {

    const [preValue, setPreValue] = useState(null);
    const [nextValue, setNextValue] = useState("0");
    const [operator, setOperator] = useState(null);

    useEffect(() => {}, [operator,nextValue,preValue]);

    const Operator = {
        "/": (firstValue, secondValue) => firstValue / secondValue,
        "*": (firstValue, secondValue) => firstValue * secondValue,
        "+": (firstValue, secondValue) => firstValue + secondValue,
        "-": (firstValue, secondValue) => firstValue - secondValue,
        "=": (firstValue, secondValue) => secondValue,
    };

    const performOperation = () => {
        let temporary = Operator[operator](
            parseFloat(preValue),
            parseFloat(nextValue)
        );
        setOperator(null);
        setNextValue(String(temporary));
        setPreValue(null);
    };


    const handleNumber = (number) => {
        setNextValue(nextValue === "0" ? String(number) : nextValue + number);
    };

    const insertDot = () => {
        if(!/\./.test(nextValue)) {
            setNextValue(nextValue + ".");
        }
    }

    const procentage = () => {
        setNextValue(parseFloat(nextValue) / 100);
        if (preValue && nextValue === "") {
            setPreValue(parseFloat(preValue) / 100);
        }
    };

    const changeSign = () => {
        setNextValue(parseFloat(nextValue) * -1);
    };

    const clearData = () => {
        setNextValue("0");
        setPreValue(0);
    };

    const handleOperation = (value) => {
        if (Number.isInteger(value)) {
            handleNumber(parseInt(value, 10));
        }else if (value in Operator) {
            if (operator === null) {
                setOperator(value);
                setPreValue(nextValue);
                setNextValue("");
            }
            if (operator){
                setOperator(value);
            }
            if (preValue && operator && nextValue) {
                performOperation();
            }
        }else if (value === "c") {
            clearData();
        }else if (value === "\xB1") {
            changeSign();
        }else if (value === ".") {
            insertDot();
        }else if (value === "%") {
            procentage();
        }
    };

    return(
        <div className="bg-color project-1">
            <div className='calculator'>
                <div className='screen'>
                    <div className='wynik'>{nextValue}</div>
                </div>
                    <div className='key'>

                    <div className='key-function'>
                    <KeyButton keyValue={"c"} onClick={handleOperation}/>
                    <KeyButton keyValue={"\xB1"} onClick={handleOperation}/> 
                    <KeyButton keyValue={"%"} onClick={handleOperation}/> 
                    </div>
                    <div className='key-number'>
                    <KeyButton keyValue={9} onClick={handleOperation}/> 
                    <KeyButton keyValue={8} onClick={handleOperation}/>  
                    <KeyButton keyValue={7} onClick={handleOperation}/>  
                    <KeyButton keyValue={6} onClick={handleOperation}/>  
                    <KeyButton keyValue={5} onClick={handleOperation}/>  
                    <KeyButton keyValue={4} onClick={handleOperation}/>  
                    <KeyButton keyValue={3} onClick={handleOperation}/>  
                    <KeyButton keyValue={2} onClick={handleOperation}/>  
                    <KeyButton keyValue={1} onClick={handleOperation}/>  
                    <KeyButton keyValue={0} onClick={handleOperation}/>  
                    <KeyButton keyValue={'.'} onClick={handleOperation}/>  
                    </div>
                    <div className='key-operator'>
                    <KeyButton keyValue={"="} onClick={handleOperation}/> 
                    <KeyButton keyValue={"+"} onClick={handleOperation}/>  
                    <KeyButton keyValue={"-"} onClick={handleOperation}/>  
                    <KeyButton keyValue={"*"} onClick={handleOperation}/>  
                    <KeyButton keyValue={"/"} onClick={handleOperation}/> 
                    </div>
                    </div>
            </div>
        </div>
    );
}