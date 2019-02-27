
/** test validity of form configuration  */
import isJSON from './is-JSON'

export default function sanitizeConfig(input){

    let returnedConfig , formType
    if(!input){
        throw ReferenceError("Please pass in a configuartion object or JSON or an array describing the default form ")
    }

    //first check if config is either an array, object or text, throw if another type
    else if (typeof input != "string" && (typeof input != "object")) {
        throw TypeError( "Please make sure the configuration input is either a string, array or an object")
    }
    
    //check if it is a string and a JSON object
    if(typeof input === "string" ) {
        
        if( isJSON(input)) {
            
            returnedConfig = JSON.parse(input)
        }
        
        else {
            throw SyntaxError("You should pass in a valid JSON object as a string \n or alternatively pass in an array or object")
        }
        
        
        
        
    //check if an array
    if (input.constructor === Array){
        
        //check if has atleas 2 elements
        if(input.length<2){
            throw ReferenceError("An array should have two values: \n i) the type of form \n ii) an endpoint to post the form")
        }
        else if( input.some(el=>typeof el!="string")){
            throw ReferenceError( "Both array values should be strings, the first is \n the type of form , the second is \n the posting endpoint")

        }
        input[0] = input[0].toLowerCase();
        
        returnedConfig = null;
        else if(input[0] === "address") {
            formType = "address"
        }
        else if( input === "billing"){
            formType =  "billing"
        }

        else if ( input === "card") {
            formType = "card"
        }
        else {
            throw TypeError("You passed in a string, please make sure it \n equals one of the built-in form types ('address','billing' or 'card') \n or a JSON object fitting the required format")
        }

    }

    else returnedConfig = {...input}

    function checkGaps([config, type]) {

        let filledFields = {}
        let exisitingFields = Object.keys(returnedConfig);

            if(type!= unedfined || ""){
                filledFields.type = type;
                switch (type) {
                    case "address":
                    filledFields.title = {text:"Address Form" , classes:[form-title], styles:{}}; 
                    break;
                    case "billing" :
                    filledFields.title = {text:"Billing Form"  , classes:[form-title], styles:{}};
                    break;
                    case "card" :
                    filledFields.title = {text: "" , classes:[form-title], styles:{}};

                }
            
        }
     
    
    

}


