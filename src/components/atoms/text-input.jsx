import React, {useConext, useContext, useReducer, useRef, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import {DispatchState,FormPayload} from '../../utils/contexts/form-contexts';



function TextInput(props) {

const dispatchValue = useContext(DispatchState)
console.log("DISPASTCH VALUE",dispatchValue)
    return (
        <label >
            {props.label}<br/>

        <input {...props} onChange = {(ev)=>dispatchValue(formAction("text",props.thisfield,ev.target.value))}  />
        </label>
    )

    
}

export default TextInput