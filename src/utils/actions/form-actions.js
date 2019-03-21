


export default function formAction( type, fieldname, value) {

    console.log("BOOOOYAHHHHH!!",arguments)
    return {type:type, payload: {[fieldname]: value}}
}