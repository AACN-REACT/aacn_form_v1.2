import React, { useRef, useEffect, useContext, Component } from 'react';

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';
import resetForm from '../../utils/reset-form';



export default function ButtonReset(props){
    
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)

    let styles=Object.assign({},[props.styles],{margin:"5px"})
    return <button className={props.classes || "btn btn-primary"} style={props.styles} 
    onClick={e=>{e.preventDefault();dispatch({type:"reset"})}} >RESET</button>
}