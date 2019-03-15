import React from 'react';

export default function ButtonSave(props){

    return <button className={props.classes} type="number" range={props.range || 10}>SAVE</button>
}