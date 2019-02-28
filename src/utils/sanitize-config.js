
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
        
        //check if has atleast 2 elements
        if(input.length<2){
            throw ReferenceError("An array should have two values: \n i) the type of form \n ii) an endpoint to post the form")
        }
        //check if any of the array elements are not strings
        else if( input.some(el=>typeof el!="string")){
            throw ReferenceError( "Both array values should be strings, the first is \n the type of form , the second is \n the GET endpoint")

        }
        else if ( !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(input[1])) {
            throw SyntaxError("The second element should be a valid url, \n Please check to make sure you have typed it correctly ")
          }

        //Correct any capitalisation of the first element which is required to be the type of form
        input[0] = input[0].toLowerCase();
        
        returnedConfig = {};

       // Check the type element to see if it fits one of the native form types, assign 'formtype' 
      if(input[0] === "address") {
            formType = "address"
        }
        else if( input[0] === "billing"){
            formType =  "billing"
        }

        else if ( input[0] === "card") {
            formType = "card"
        }
        else {
            throw TypeError("You passed in a string, please make sure it \n is written as one of the built-in form types ('address','billing' or 'card') \n or a JSON object fitting the required format")
        }

    }
    //If the input isn't an array we presume it must be the config object, we assign it to 'returnedConfig' as well as adding endpoint
    else returnedConfig = {...input,...{endpoint:input[1]}}

}
checkGaps([returnedConfig,formType])
}


   //here we are defining a function that will check for any missing fields which will then be filled
 export   function checkGaps([config, type]) {
    
            let filledFields = {}
            //let exisitingFields = Object.keys(returnedConfig); //extract the field names in the passed down config
    
                // check the type to see if it has been assigned, if it has fill the temp variable 'filledFields' type 
                if(type!= undefined || ""){
                    filledFields.type = type;
                    switch (type) {
                        case "address":
                        filledFields.title = {text:"Address Form" , classes:["form-title"], styles:{}}; 
                        break;
                        case "billing" :
                        filledFields.title = {text:"Billing Form"  , classes:["form-title"], styles:{}};
                        break;
                        case "card" :
                        filledFields.title = {text: "" , classes:["form-title"], styles:{}};
    
                    }
    
                
            }
            else {
                //let exisitingFields = Object.keys(config)?Object.keys(config):[]; //extract the field names in the passed down config
                
                

            }
         
        return {...config, ...filledFields}
        
    
    }
        


    