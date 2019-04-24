import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'
import {WrapperPayload} from '../../utils/contexts/form-contexts';


//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';
import sanitizeConfig from '../../utils/sanitize-config';







export default function FormWrapper(Element, config, saveFunction){



let newconfig={...config}
//check if customer is logged in 
if(localStorage.getItem("customer")){

    newconfig["fields"] = [...config['fields']]
    newconfig["fields"].unshift({thisfield:"greeting", type:"heading", value:`GREETINGS, ${localStorage.getItem("customer")}`})
}

let sanitized = sanitizeConfig(newconfig)



console.log("SAN",sanitized)





//we dont want this function being run on every render so we will use a usEffect Hook that we can run just the once by passingin an empty array 
//as the second argument

return (


<Element config={sanitized} />
)


}