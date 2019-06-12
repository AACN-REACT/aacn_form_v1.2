


export default function formAction( type, fieldname, val) {


    return {type:type, payload: {[fieldname]: {value:val,touched:true}}}
}

