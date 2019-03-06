
import writeToState from './write-to-state.js'



export default function  generateInitialState(config){

    const formFields = config.fields;
    const {title, endpoints, globalClasses, globalStyles} = config // spread with shortcut object names may not work with ie11

    let  state = {};     
    return writeToState(formFields,state)
    }
