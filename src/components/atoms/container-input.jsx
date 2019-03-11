import React, {useConext, useReducer, useRef, Component } from 'react';
import generateMarkup from '../../utils/generate-markup';
import writeToState from '../../utils/write-to-state';



function ContainerInput(props){

    console.log("CONTAINER FIRED",props)
    return (
    <div classNames={props.classes}> 
    {generateMarkup(props.contents)}
    </div>
    )

}
export default ContainerInput
