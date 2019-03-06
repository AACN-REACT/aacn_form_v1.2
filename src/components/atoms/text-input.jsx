import React, {useConext, useReducer, useRef, Component } from 'react';


function TextInput(props) {



    return (
        <input value  type="text" length={props.length}   />
    )

    
}

export default TextInput