import React from 'react'; 

import getCustomerID from '../../utils/get-customer-key'
import sanitizedConfig from '../../utils/sanitize-config'


// test customerKey = ad790f32-f501-4838-8e4a-c1b057c44f30

export default function Wrapper2 (comp,config){

    //extract the comp

    const Comp = comp
    //find customer ID , if doen't exist set to null

    const customerID = getCustomerID()

    let customerData = {};
    let endpointCollection = []

    //function that parses the endpoints

    function extractEndpoints(collection){

        const newCollection = collection.map(el=>({[el["rel"]]:el["href"]}))
        config.endpoints = newCollection
        console.log("CCCCCendpoints",config.endpoints)
        return newCollection
    }

    //check type of component

    const MyComponentType = comp.name

    //sanitize config

    const sanitizeconfig = sanitizedConfig(config)

    console.log("CCCCCCCC",sanitizeconfig)

    if(customerID){
        if(sanitizeconfig.type==="address"){
        fetch(`http://nfdev:9023/api/customers/${customerID}/addresses/new`, {headers: {  "username": "tertert" ,"isTypescriptClient": "false"}}).
        then(res=>res.json()). 
        then(res=>{customerData = res.result;extractEndpoints(res.links) ;return res.result}).
        then(res=>console.log("CCCCCC",customerData,endpointCollection))
    }

 
    // now we go about extracting the endpoints
        //sanitizeconfig.


}

}