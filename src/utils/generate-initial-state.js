export default function  generateInitialState(config){

    const formFields = config.fields;
    const {title, endpoints, globalClasses, globalStyles} = config // spread with shortcut object names may not work with ie11
    
    
    
    function checkField(field){
    
    
        try {
    
            if (field.thisfield === undefined  ) throw (`A field is missing a "thisfield" reference property, \n every field should have one`)
    else { return { [field.thisfield] : field["value"] } 
        } }
      catch (e) { console.log(e) }
    
    }
    
    let  state = {}; 
    
    function writeToState ( fields,state ) {
    fields.forEach(field=>field.type==="container"? state = {...state,...writeToState(field["contents"],state)}: state = {...state, ...checkField(field) } )
    return state
    }
    
    return writeToState(formFields,state)
    }
