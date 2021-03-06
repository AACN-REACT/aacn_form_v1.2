import checkField from './check-field.js'

function writeToState ( fields,state,markup) {


    if(markup){
        console.log("MARKUP", state.constructor)
        fields.forEach(field=>
            field.type==="container"? 
            state = [...state,...writeToState(field["contents"],[],true) ]:
            state = [...state, ...checkField(field,true)] )
        }
        
        else {
            console.log("PAYLOAD STATE")
        fields.forEach(field=>
            field.type==="container"? 
            state = {...state,...writeToState(field["contents"],state)}:
             state = {...state, ...checkField(field)} )
        }
     console.log("THIS IS THE STATE:", state)   
    return state
    }


export default writeToState