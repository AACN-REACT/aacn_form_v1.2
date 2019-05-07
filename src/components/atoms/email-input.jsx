import React, { useContext, useReducer, useRef, Component } from 'react';
import formAction from '../../utils/actions/form-actions'
import {DispatchState,FormPayload} from '../../utils/contexts/form-contexts';



export default function EmailInput(props) {


    return (<label >{props.label} <input  type="email" /></label>)
}