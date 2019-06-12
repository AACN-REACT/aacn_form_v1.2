import React, {useConext, useContext, useReducer, useRef, Component } from 'react';

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';
import formAction from '../../utils/actions/form-actions';





export default function NumberInput(props){
    let dispatch = useContext(DispatchState);
    let state = useContext(FormPayload);

    return (
    <div class="form-group col-sm-12">
        <label>{props.label}</label>
        <input className={props.classes || " form-control"} defaultValue={props.value} onChange={e => { dispatch(formAction("number", props.thisfield, `${e.currentTarget.value}`)) }} className={props.classes} type="number" range={props.range || 10} />
        
    </div>
        )
}