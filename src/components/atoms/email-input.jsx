import React, { useContext, useReducer, useRef, Component } from 'react';
import formAction from '../../utils/actions/form-actions';
import { DispatchState, FormPayload } from '../../utils/contexts/form-contexts';




export default function EmailInput(props) {

    return (
        <div className={`form-group + ${props.controlclass}`}>
        
            <input className="form-control" type="email" placeholder="Email" />
            <label>{props.label}</label>
            <validation>{props.validation}</validation>
        </div>
    )
}