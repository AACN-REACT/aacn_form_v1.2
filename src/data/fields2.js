

import {rooms,flowers,countries,states,fruits,bands}  from './myoptions.js'

function doSave(){
    alert("this is a external ref")
}
const field2 = [

    {
        thisfield: "container1", type: "container", classes: ['col-xs-12 col-sm-10'], style: {},
        contents: [
            {
                thisfield: "large-title", type: "heading", classes: ["large-title"], value: "Create an Active AACN Membership"
            },
            {
                thisfield: "sub-title", type: "heading", classes: ["sub-title"], value: "Your Information"
            },
            {
                thisfield: "first-name", type: "text", length: null, controlclass: "col-sm-12", styles: {}, label: "First Name",
                placeholder: "First Name", id: "", value: null, required: "required", validation: "Field is required."
            },
            {
                thisfield: "last-name", type: "text", length: null, controlclass: "col-sm-12", styles: {},
                label: "Last Name", id: "", placeholder: "Last Name", value: null, required: "required", validation: "Field is required."
            },
        ]
    },

   

]

export default field2