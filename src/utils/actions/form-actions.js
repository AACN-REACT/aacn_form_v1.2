


export default function formAction( type, fieldname, value) {

    console.log("BOOOOYAHHHHH!!",value)
    return {type:type, payload: {[fieldname]: value}}
}