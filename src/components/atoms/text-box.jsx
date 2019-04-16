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
    

    return <label >{props.label}<br/><textarea   cols={width}  rows={height} onChange={e=>{dispatch(formAction("textbox",props.thisfield,`${e.currentTarget.value}`))}} width={500} /></label>
}