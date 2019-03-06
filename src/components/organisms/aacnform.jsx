import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'


//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';



function generatePayload(state, sanitizedConfig){

}



function AACNFORM ({config}){



    return (
        <form>
        {JSON.stringify(generateInitialState(config),null,2)},
        <pre>{JSON.stringify(generateMarkup(config), null,"\t")} </pre>

        </form>
    )


}

export default AACNFORM