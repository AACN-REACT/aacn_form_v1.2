import React ,{useMemo,useContext} from 'react';

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';
import formAction from '../../utils/actions/form-actions';

export default function TextBox(props){

    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)
    let  width =  useMemo(()=>props.width?parseInt(props.width):"400px", [props.width]);
    let  height =  props.height?parseInt(props.height):"400px";
    
    console.log("WIDTH:", width, "\n", "HEIGHT:", height)
    

    return (
        <div className={`form-group + ${props.controlclass}`}>
           
            <textarea  value={state[props.thisfield].value} onFocus={ev=>dispatch(formAction("textbox", props.thisfield, ev.target.value))} className={props.classes || "form-control"} placeholder={props.placeholder} maxlength={props.maxlength} cols={width} rows={height} onChange={e => { dispatch(formAction("textbox", props.thisfield, `${e.currentTarget.value}`)) }} width={500} />
            <label>{props.label}</label>
            <validation>{props.validation}</validation>
        </div>
        )
}