import React, {useConext, useContext, useReducer, useRef, Component } from 'react';

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';
import formAction from '../../utils/actions/form-actions';





export default function NumberInput(props){
    let dispatch = useContext(DispatchState);
    let state = useContext(FormPayload);

    return <label >{props.label} <br/><input   className={props.classes || ""} defaultValue={props.value} onChange={e=>{dispatch(formAction("number",props.thisfield,`${e.currentTarget.value}`))}}  className={props.classes} type="number" range={props.range || 10} /></label>
}