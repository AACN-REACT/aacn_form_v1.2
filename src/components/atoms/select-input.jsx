import React, { useRef, useEffect, useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';

const myref = React.createRef();
export default function SelectInput(props){
  
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)
    console.log("THIS IS A SELECT:", state, props.options, props.parent)
    function filterOptions( formstate, options, parent){
       
     if(parent){
         console.log("parent key",formstate[parent] )
        let thiskey = formstate[parent][1].key
        console.log("parent key key", thiskey)
     return options.filter(el=>el.Parentkey===thiskey).map(el=><option >{el.name || el}</option>);
     }
     else {
         return options.map(el=><option key={el.key}>{el.name || el}</option>)
     }

    }

    return <label>{props.label || props.thisfield}<select  onChange={e=>{dispatch(formAction("select",props.thisfield, [e.target.value, e.target.key ]))   ;  console.log("XXXREF", myref.current) } }>{filterOptions(state,props.options,props.parent)}</select></label>

}