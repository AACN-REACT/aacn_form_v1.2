import React, { useState, useRef, useEffect, useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload, DispatchState, Allfields } from '../../utils/contexts/form-contexts';




export default function SelectInput(props){



    const  allfields = useContext(Allfields)
     const dispatch = useContext(DispatchState)
     const state = useContext(FormPayload)
     
console.log("NNN props \n",props.thisfield);
console.log("NNN allfields \n", allfields);
console.log("NNN dispatch \n", dispatch);
console.log("NNN state \n", state);

let options_list = [];
let filter_key = null;

function getFilterKey(parent,state){
    return state[parent][1]
}

state.refs=7
if(props.parent) {filter_key = getFilterKey(props.parent,state); 
                                console.log("NNNN key", filter_key,props.options.filter(el=>el.Parentkey === filter_key))
                                options_list = props.options.filter(el=>el.Parentkey === filter_key)}

else {
    options_list = props.options
}

let markup = options_list.map(el=><option>{el.name}</option>)
return (
          <div class="dropdown col-sm-4">
                    <select className={props.classes } defaultValue={state[props.thisfield][0]} onChange={e=>{dispatch({type:"select", payload:{[props.thisfield]:[e.currentTarget.value, options_list.filter(el=>el.name===e.currentTarget.value)[0].key] }} )}}>
                        {markup}
                    </select>

          </div>
)


}