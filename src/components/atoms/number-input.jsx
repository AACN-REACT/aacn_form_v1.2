import React from 'react';

export default function NumberInput(props){

    return <input defaultValue={props.value} className={props.classes} type="number" range={props.range || 10} />
}