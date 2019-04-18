


export default function formAction( type, fieldname, value,env) {

    console.log("BOOOOYAHHHHH!! from ", env,"\n",fieldname,value)
    return {type:type, payload: {[fieldname]: value}}
}