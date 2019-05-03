


export default function formAction( type, fieldname, value) {


    return {type:type, payload: {[fieldname]: value}}
}

