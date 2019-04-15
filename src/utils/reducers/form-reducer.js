




export default function formReducer (state,action){


    switch (action.type) {

            case "text": 
            case "number":
            case "textbox":
            case "telephone":
            return {...state,...action.payload} 
            case "select":
            case "radio":
            return {...state,...action.payload}
            default:
            return state



    }



}