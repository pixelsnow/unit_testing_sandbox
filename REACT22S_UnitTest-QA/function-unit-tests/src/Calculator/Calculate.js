import React from 'react';
import {sum,subtract,multiply,divide} from './calclibrary';

export default function Calculate (props) {

    let result = '?';

    if (props.op === "+"){
        result = sum(Number(props.A),Number(props.B))
    }
    else if (props.op === "-"){
        result = subtract(Number(props.A),Number(props.B))
    }
    else if (props.op === "*"){
        result = multiply(Number(props.A),Number(props.B))
    }
    else if (props.op === "/"){
        result = divide(Number(props.A),Number(props.B))
    }
    else{
        throw new Error('Not a recognized operator')
    }

    
    return(
        <h3>{props.A} {props.op} {props.B} = {result}</h3>
    )
}
