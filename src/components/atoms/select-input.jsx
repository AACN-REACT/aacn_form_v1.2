import React, { useState, useRef, useEffect, useContext, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';
import { Allfields} from '../../utils/contexts/form-contexts';



export default function SelectInput(props){
    console.log("NNNN",props.thisfield,'<----------') 
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)
    let allfields = useContext(Allfields)
    let env="outside";
    const [count, setCount] = useState(0)
    let y = allfields.filter(el=>el.type===props.parent)[0].thisfield
    let x = state[y][1]
        console.log("NNNN parent: \n",props.options)
    let filterkey = x || null

    function filterOptions(filterkey){
        let optionsList=props.options
        if(x){
            console.log("NNNN x",x)
                optionsList = optionsList.filter(el=>el['key']===filterkey)
        }
        return (
            optionsList.map(el=><option >{el.name}</option>)
        )
    }
    
    

     return <label>{props.label || props.thisfield}  <select className={props.classes || 'form-control'} value={ state[props.thisfield][0]}
    onChange={e=>{let ans = props.options.filter(el=>el.name===e.target.value);setCount(0) ;
        dispatch(formAction("select",props.thisfield, [e.target.value, ans[0]['key']],env));} }>
        { filterOptions(filterkey)}
        </select>
    </label>  

}