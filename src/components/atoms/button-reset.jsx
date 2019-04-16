import React, { useRef, useEffect, useContext, Component } from 'react';

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';



export default function ButtonReset(props){
    
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)

    let styles=Object.assign({},[props.styles],{margin:"5px"})
    return <button className={props.classes || "btn btn-primary"} style={styles} onClick={props.callback} >RESET</button>
}