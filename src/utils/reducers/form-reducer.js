import resetForm from '../reset-form'

export default function formReducer (state,action){


    switch (action.type) {

            case "text": 
            case "number":
            case "textbox":
            case "telephone":
            return {...state,...action.payload} 
            case "select":
            return {...state,...action.payload} 
            case "radio":
            return {...state,...action.payload}
            case "reset":
            return resetForm(state)
            default:
            return state



    }



}