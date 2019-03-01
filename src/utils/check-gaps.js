//here we are defining a function that will check for any missing fields which will then be filled
export default function checkGaps(config, type) {
    let filledFields = {};
    //let exisitingFields = Object.keys(returnedConfig); //extract the field names in the passed down config
  
    // check the type to see if it has been assigned, if it has fill the temp variable 'filledFields' type
    if (Array.isArray(type) && type.length > 0) {
      console.log(type[0]);
      filledFields.type = type[0];
      switch (type[0]) {
        case "address":
          filledFields.title = {
            text: "Address Form",
            classes: ["form-title"],
            styles: {}
          };
          break;
        case "billing":
          filledFields.title = {
            text: "Billing Form",
            classes: ["form-title"],
            styles: {}
          };
          break;
        case "card":
          filledFields.title = { text: "", classes: ["form-title"], styles: {} };
          break;
        default:
          throw SyntaxError(
            "'type' value passed to 'checkGaps' doesn not \n meet any default type",
            type[0]
          );
      }
      filledFields.endpoints = {"get":type[1]};
    } else {
      if (!"title" in config || config.title === "") {
        config.title = { text: "Form", classes: "form-title", style: {} };
      }
      if (!"endpoints" in config || config.endpoints === "") {
        throw ReferenceError("You need to specify endpoints, especically 'get' ");
      }
  
      if (!"type" in config && (!"fields" in config || config.fields === "")) {
        throw ReferenceError(
          "If you don't use a default type you will need to include fields property"
        );
      }
    }
    console.log("Config:", config, "Filled:", filledFields);
    return { ...config, ...filledFields };
  }
  
  