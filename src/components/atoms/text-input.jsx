import React, {useConext, useContext, useReducer, useRef, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import {DispatchState,FormPayload} from '../../utils/contexts/form-contexts';



function TextInput(props) {

const dispatchValue = useContext(DispatchState)
const state = useContext(FormPayload)
console.log("DISPASTCH VALUE",dispatchValue)
    return (
        <div className={`form-group + ${props.controlclass}`}>
        <input {...props} class="form-control" onBlur={ev=>dispatchValue(formAction("text", props.thisfield, ev.target.value))} onChange={(ev) => dispatchValue(formAction("text", props.thisfield, ev.target.value))} value={state[props.thisfield]["value"]} />
            <label >
                {props.label}
            </label>
            {state[props.thisfield].touched?<validation>{props.validation}</validation>:null}
        </div>
    )

    
}

export default TextInput