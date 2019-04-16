import React, { useRef, useEffect, useContext, Component } from 'react';

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';


export default function ButtonSave(props){
    console.log("CLASS OF SAVE:", props.classes)
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)
    let styles=Object.assign({},[props.styles],{margin:"5px"})
    return <button className={props.classes || "btn btn-primary"} onClick={e=>e.preventDefault()} style={styles} >SAVE</button>
}