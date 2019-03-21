import React, { useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';


export default function SelectInput(props){
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)

    function filterOptions( state, options, parent){
     if(parent){
            let key = state[parent]
         
            console.log("PARENT",props.thisfield,options.filter(el=>{    console.log("PARENT 1",el["Parentkey"]); return el["Parentkey"] === [state[parent]][0]}).map(el=>el.name))
            return options.filter(el=>el["Parentkey"] === [state[parent]][0]).map(el=><option>{el.name || el}</option>)
     }
     else {
         return options.map(el=><option>{el.name || el}</option>)
     }

    }

    return <label>{props.label || props.thisfield}<select onChange={e=>dispatch(formAction("select",props.thisfield, e.target.value))}>{filterOptions(state,props.options,props.parent)}</select></label>

}