import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container';
import { Form } from "react-bootstrap";



//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';
import formReducer from '../../utils/reducers/form-reducer';
import formAction from '../../utils/actions/form-actions';
import { DispatchState, FormPayload, Allfields, ThemeContext } from '../../utils/contexts/form-contexts';

// const formReducer = function(state,action){
//     return {...state,...action.payload}
// }


function generatePayload(state, sanitizedConfig){

}

function JSONCOMP (props){

   const  dispatch = useContext(DispatchState)
   const  formState = useContext(FormPayload)
    return (
        <div>
        <pre> {JSON.stringify(formState,null,2)} </pre>
        </div>
    )
}

function AACNFORM ({config}){

const[formState, dispatchState] = useReducer(formReducer,generateInitialState(config))
const [theme, setTheme]= useState("education")
localStorage.setItem("customer", "Donald Duck")

const allfields = config.fields;


    return (
        <div className={theme}>
       <FormPayload.Provider value={formState} > 
       <DispatchState.Provider value={dispatchState} > 
       <Allfields.Provider value={allfields} > 
        <ThemeContext.Provider value={setTheme}>
        <Form className={config.globalFormClasses} style={config.globalFormStyles} >
        {theme}   
        {generateMarkup(config)} 
        </Form > 
        <JSONCOMP />
        </ThemeContext.Provider>
        </Allfields.Provider>
       </DispatchState.Provider >
       </FormPayload.Provider >    
       </div>


  
    )


}

export default AACNFORM