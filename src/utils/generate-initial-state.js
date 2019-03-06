import checkField from './check-field.js'



export default function  generateInitialState(config){

    const formFields = config.fields;
    const {title, endpoints, globalClasses, globalStyles} = config // spread with shortcut object names may not work with ie11
    
    

    
    let  state = {}; 
    
    function writeToState ( fields,state ) {
    fields.forEach(field=>field.type==="container"? state = {...state,...writeToState(field["contents"],state)}: state = {...state, ...checkField(field) } )
    return state
    }
    
    return writeToState(formFields,state)
    }
