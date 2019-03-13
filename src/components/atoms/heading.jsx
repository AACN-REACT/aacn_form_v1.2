import React from 'react';


export default function Heading(props){

    return <div className={props.classes || ""} style={props.styles|| ""}>{props.heading}</div>
}