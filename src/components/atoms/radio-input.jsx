import React, { useRef, useEffect, useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';

//let keyx=0
export default function RadioInput(props){

let state = useContext(FormPayload)
let dispatch = useContext(DispatchState)

function filterOptions( formstate, options, parent){

    //selected={el.selected?true:false}
 if(parent){
     console.log("THIS RADIO SHOULD NOT HAVE A PARENT")
     console.log("RADIO PARENT", parent, formstate)
    let thiskey = formstate[parent][1]
 return options.filter(el=>el.Parentkey===thiskey).map((el,i)=><><label key={i}> <input  type="radio" name={props.thisfield} value={[el.name, el.key]} />{el.name}</label><br/></>);
 }
 else {

     return options.map((el,i)=><><label key={i}>{el.name} <input type="radio" checked={el.selected} name={props.thisfield} value={[el.name, el.key]} /></label><br/></>)
 }


return  null


}
console.log("III", state)
return <label>{props.label || props.thisfield}<div 
onChange={e=>{alert("hello")
    dispatch(formAction("radio",props.thisfield, e.target.value)); } }>
    {filterOptions(state,props.options,props.parent)}
    </div>
    </label>
}