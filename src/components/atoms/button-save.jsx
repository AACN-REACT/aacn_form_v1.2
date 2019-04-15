import React, { useRef, useEffect, useContext, Component } from 'react';

import { FormPayload } from '../../utils/contexts/form-contexts';
import { DispatchState} from '../../utils/contexts/form-contexts';


export default function ButtonSave(props){

    let state = useContext(FormPayload)
    let dispatch = useContext(DispatchState)

    return <button className={props.classes} onClick={props.callback} type="number" range={props.range || 10}>SAVE</button>
}