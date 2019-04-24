import React, {useConext, useReducer, useRef, Component } from 'react';
import generateMarkup from '../../utils/generate-markup';
import writeToState from '../../utils/write-to-state';
import  '../../index.css';



function ContainerInput(props){

    console.log("CONTAINER FIRED",props)
    return (
    <div className={props.classes || "form-group"} style={props.style || {}}> 
    {generateMarkup(props.contents)}
    </div>
    )
    
}
export default ContainerInput