import React, {useConext, useReducer, useRef, Component } from 'react';
import generateMarkup from '../../utils/generate-markup'



function ContainerInput(props){

    
    return (
    <div classNames={props.classes}> 
    {generateMarkup(props.content)}
    </div>
    )

}

