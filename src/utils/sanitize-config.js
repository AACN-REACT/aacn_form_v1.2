/** test validity of form configuration  */
import isJSON from "./is-JSON";
import checkGaps  from "./check-gaps.js"




export default function sanitizeConfig(input) {
  let returnedConfig = {},
    formType = [];
  if (!input) {
    throw ReferenceError(
      "Please pass in a configuartion object or JSON or an array describing the default form"
    );
  }

  //first check if config is either an array, object or text, throw if another type
  else if (typeof input != "string" && typeof input != "object") {
    throw TypeError(
      "Please make sure the configuration input is either a string, array or an object"
    );
  }

  //check if it is a string and a JSON object
  if (typeof input === "string") {
    if (isJSON(input)) {
      returnedConfig = JSON.parse(input);
    } else {
      throw SyntaxError(
        "You should pass in a valid JSON object as a string \n or alternatively pass in an array or object"
      );
    }
  }

  //check if an array
  if (input.constructor === Array) {
    console.log("ARRAYlength", input.length);
    //check if has atleast 2 elements
    if (input.length < 2) {
      throw ReferenceError(
        "An array should have two values: \n i) the type of form \n ii) an endpoint to post the form"
      );
    }
    //check if any of the array elements are not strings
    else if (input.some(el => typeof el != "string")) {
      throw ReferenceError(
        "Both array values should be strings, the first is \n the type of form , the second is \n the GET endpoint"
      );
    } else if (
      !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        input[1]
      )
    ) {
      throw SyntaxError(
        "The second element should be a valid url, \n Please check to make sure you have typed it correctly "
      );
    }

    //Correct any capitalisation of the first element which is required to be the type of form
    input[0] = input[0].toLowerCase();

    // Check the type element to see if it fits one of the native form types, assign 'formtype'
    if (input[0] === "address" || "billing" || "card") {
      formType = [...input];
    } else {
      throw TypeError(
        "You passed in a string, please make sure it \n is written as one of the built-in form types ('address','billing' or 'card') \n or a JSON object fitting the required format"
      );
    }
  }
  //If the input isn't an array we presume it must be the config object, we assign it to 'returnedConfig' as well as adding endpoint
  else if (input.constructor === Object) {
    returnedConfig = { ...input };
  }

  console.log(returnedConfig, formType);
  return checkGaps(returnedConfig, formType);
}



    