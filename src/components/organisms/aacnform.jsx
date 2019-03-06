import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'


//import utils

import generateMarkup from '../../utils/generate-markup'



function generatePayload(state, sanitizedConfig){

}



function AACNFORM ({config}){



    return (
        <form>
        {JSON.stringify((generateMarkup(config.fields)).values(),0,2)}
        </form>
    )


}

export default AACNFORM