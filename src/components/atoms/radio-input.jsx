import React, { useRef, useEffect, useContext, Component } from 'react';

import formAction from '../../utils/actions/form-actions';
import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState } from '../../utils/contexts/form-contexts';




function Checkfield(props){
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)
    const myref = useRef();
    return (<div key={props.keyy} className="custom-control custom-radio" value={[props.name,props.keyy]} 
    onClick={e=>{myref.current.checked=!myref.current.checked;dispatch(formAction("radio",props.thisfield, [props.name,props.keyy]))}} >
    {props.name}
    <input className="custom-control-input" key={props.name} ref={myref} type="radio"  checked={props.checked} />
    <label  for="custom-radio"  className="custom-control-label"  ></label>
    
    </div>)
}



export default function RadioInput(props) {

    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)

    function filterOptions(formstate, options, parent){

        let res;
        if(parent){
            let thiskey = formstate[parent][1]
            res = options.filter(el => el.Parentkey === thiskey)
        }

        else {
            res = options
        }


        return res.map(option=><Checkfield keyy={option.key} thisfield={props.thisfield} name={option.name} checked={option.checked} /> )
    }


    return (<div className={`form-group + ${props.controlclass}`}><p>{props.label || props.thisfield} </p>
    {filterOptions(state,props.options,props.parent)}
</div>)
}
