
/** test validity of form configuration  */
import isJSON from './is-JSON'

export default function sanitizeConfig(input){

    let returnedConfig , formType
    //first check if config is an object or text
    if(!input){
                throw ReferenceError("Please pass in a configuartion object or a string describing the default form ")
    }
    else if (typeof input != "string" && !(input.constructor === Object)) {
                throw TypeError( "Please make sure the configuration input is either a string or an object")
    }

    if(typeof input === "string" && isJSON(input) ) {

        returnedConfig = JSON.parse(input)
    }

    else if (typeof input === "string" ){
        input = input.toLowerCase();
        returnedConfig = null;
        if(input === "address") {
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
    return [returnedConfig, formType]
}


