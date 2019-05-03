import React, {useState, useReducer, useContext, useRef,useEffect,createContext,createFactory, Component } from 'react';
import ReactDOM from 'react-dom';
import ElementContainer from '../molecules/element-container'
import {WrapperPayload} from '../../utils/contexts/form-contexts';


//import utils

import generateMarkup from '../../utils/generate-markup'
import generateInitialState from '../../utils/generate-initial-state';
import sanitizeConfig from '../../utils/sanitize-config';



function getCustomerKey(filterprop='CID='){


    let url = window.location.href;
    let re= new RegExp(`(${filterprop})([\w|-]+)`,'g')
    console.log(re.exec(url))
    return re.exec(url)
}



export default function FormWrapper(Element, config, saveFunction){



let newconfig={...config}
//check if customer is logged in 
if(localStorage.getItem("customer")){

    newconfig["fields"] = [...config['fields']]
    newconfig["fields"].unshift({thisfield:"greeting", type:"heading", value:`GREETINGS, ${localStorage.getItem("customer")}`})
}

let sanitized = sanitizeConfig(newconfig)

function initialGET (){
    let mykey = getCustomerKey();
    console.log("LINK KEY",mykey)
    let myURL = `http://nfdev:9023/api/customers/${mykey}/addresses/new`
    fetch(myURL,{headers:{"username":mykey, "isTypescriptClient":"false"}}).
    then(res=>res.json()).
    then(res=>{console.log("LINKS:",JSON.stringify(res.links,0,1))}).
    catch(err=>{console.log("LINK ERROR",err)})
}

console.log("SAN",sanitized)


initialGET()


//we dont want this function being run on every render so we will use a usEffect Hook that we can run just the once by passingin an empty array 
//as the second argument

return (


<Element config={sanitized} />
)


}