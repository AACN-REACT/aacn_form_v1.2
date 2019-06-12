

import {rooms,flowers,countries,states,fruits,bands}  from './myoptions.js'

function doSave(){
    alert("this is a external ref")
}
const field2 = [

    {thisfield:"name", type:"text", label:"name" ,className:"", value:"Peter", required:true},
    {thisfield:"Details", type:"heading", value:"Address"},
    {thisfield:"line1", type:"text",  label:"house number" ,className:"", value:"101"},
    {thisfield:"line2", type:"text",  label:"Street" ,className:"", value:"Columbia Road"},
    {thisfield:"postcode", type:"number",  label:"POSTCODE" ,className:"", value:"000000"},
    {thisfield:"country", type:"select" , label:"Country" ,className:"", value:"", options:countries},
    {thisfield:"state", type:"select" , parent:"country" ,label:"State" ,className:"", value:"", options:states},
    {thisfield:"reset", type:"save" , label:"RESET" ,className:""},
    {thisfield:"reset", type:"reset" , label:"RESET" ,className:""},


]

export default field2