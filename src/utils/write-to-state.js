import checkField from './check-field.js'

function writeToState ( fields,state,markup ) {
    if(markup){
        fields.forEach(field=>field.type==="container"? state = [...state,writeToState(field["contents"],state,true)]: state = [...state, ...[checkField(field,true)] ] )
    }
    else {
        
        fields.forEach(field=>field.type==="container"? state = {...state,...writeToState(field["contents"],state)}: state = {...state, ...checkField(field) } )
    }
    return markup?new Set(state.flat()):state
    }


export default writeToState