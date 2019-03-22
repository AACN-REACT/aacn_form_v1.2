import React, { useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';


export default function SelectInput(props){
  
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)
    console.log("THIS IS A SELECT:", state, props.options, props.parent)
    function filterOptions( formstate, options, parent){
     if(parent){
         
            console.log("PARENT", options.forEach(el=>{console.log("PARENT 1",el["Parentkey"], ">>" , [formstate[parent]][0], "<<")}   ));
            return options.filter(el=>el["Parentkey"] === [formstate[parent]][0]).map(el=><option key={el.key}>{el.name || el}</option>)
     }
     else {
         return options.map(el=><option key={el.key}>{el.name || el}</option>)
     }

    }

    return <label>{props.label || props.thisfield}<select onChange={e=>dispatch(formAction("select",props.thisfield, [e.target.value, e.target.key ]))}>{filterOptions(state,props.options,props.parent)}</select></label>

}