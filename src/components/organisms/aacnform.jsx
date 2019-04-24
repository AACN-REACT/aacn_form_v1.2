import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'


//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';
import formReducer from '../../utils/reducers/form-reducer';
import formAction from '../../utils/actions/form-actions';
import {DispatchState,FormPayload,Allfields} from '../../utils/contexts/form-contexts';
// const formReducer = function(state,action){
//     return {...state,...action.payload}
// }


function generatePayload(state, sanitizedConfig){

}

function JSONCOMP (props){

   const  dispatch = useContext(DispatchState)
   const  formState = useContext(FormPayload)
    return (
        <>
        <pre> {JSON.stringify(formState,null,2)} </pre>
        </>
    )
}

function AACNFORM ({config}){

const[formState, dispatchState] = useReducer(formReducer,generateInitialState(config))

localStorage.setItem("customer", "Donald Duck")

const allfields = config.fields;
console.log("NNNN all fields:",allfields)
console.log("FORM STATE:", formState)

console.log("NEW FORM STATE:", formState)

    return (
       <div class>
       <FormPayload.Provider value={formState} > 
       <DispatchState.Provider value={dispatchState} > 
       <Allfields.Provider value={allfields} > 
    
        <form >   
        {generateMarkup(config)}
        <JSONCOMP />
        </form > 
        </Allfields.Provider>
       </DispatchState.Provider >
       </FormPayload.Provider >    
       </div>


  
    )


}

export default AACNFORM