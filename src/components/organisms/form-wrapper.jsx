import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'
import {WrapperPayload} from '../../utils/contexts/form-contexts';


//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';
import sanitizeConfig from '../../utils/sanitize-config';
import getCustomerKey from '../../utils/get-customer-key';




function HOC(props){



const Comp  = props.comp

    return (
        <Comp />
    ) 
}


export default function FormWrapper(Element, config, saveFunction){




   
let newconfig={...config,saveFunction:saveFunction}
//check if customer is logged in 
if(localStorage.getItem("customer")){

    newconfig["fields"] = [...config['fields']]
    newconfig["fields"].unshift({thisfield:"greeting", type:"heading", value:`GREETINGS, ${localStorage.getItem("customer")}`})
}

let sanitized = sanitizeConfig(newconfig)

//this initialGet function , getCustomerKey will check if there is a cuntomer key in the url
function initialGET (){
    let mykey = getCustomerKey()
    console.log("LINK KEY",mykey)
    let myURL = `http://nfdev:9023/api/customers/${mykey}/addresses/new`
    fetch(myURL,{headers:{"username":mykey, "isTypescriptClient":"false"}}).
    then(res=>res.json()).
    then(res=>{}).
    catch(err=>{console.log("LINK ERROR",err)})
}

initialGET()


//we dont want this function being run on every render so we will use a usEffect Hook that we can run just the once by passingin an empty array 
//as the second argument

return (


<Element config={sanitized} />
)


}