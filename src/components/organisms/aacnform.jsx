import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'


//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';

const formReducer = function(state,action){
    return {...state,...action.payload}
}

const FormContext = createContext()

function generatePayload(state, sanitizedConfig){

}

function JSONCOMP (props){

   const  formState = useContext(FormContext)
    return (
        <pre> {JSON.stringify(formState,null,2)} </pre>
    )
}

function AACNFORM ({config}){

const[formState, dispatch] = useReducer(formReducer,generateInitialState(config))

console.log("FORM STATE:", formState)

console.log("NEW FORM STATE:", formState)

    return (
       <div>
       <FormContext.Provider value={formState} >    
       <button name="terry" onClick={(ev)=>{dispatch({payload: {name:ev.target.name}})}} > dispatch</button>
       <select name="bands" onChange={(ev)=>{dispatch({payload: {[ev.target.name]:ev.target.value}})}} > 
       <option value="stone roses">Stone roses</option>
       <option value="smiths"> Smiths </option>
       </select>
       {generateMarkup(config)}
       <JSONCOMP />
       </FormContext.Provider >    
       </div>


  
    )


}

export default AACNFORM