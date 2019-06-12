import React, { useRef, useEffect, useContext, Component } from 'react';
import {Button} from 'react-bootstrap'

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';
import resetForm from '../../utils/reset-form';



export default function ButtonReset(props){
    
    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)

    let styles=Object.assign({},[props.styles])
    return (<Button className={props.classes || ""} style={props.styles} 
    onClick={e=>{e.preventDefault();dispatch({type:"reset"})}} >Reset</Button>
)
}