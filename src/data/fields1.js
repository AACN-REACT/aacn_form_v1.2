
import { rooms, flowers, countries, states, fruits, bands, snakes } from './myoptions.js'

function doSave() {
    alert("this is a external ref")
}
const field1 = [

    {
        thisfield: "container1", type: "container", classes: ['row top'], style: {},
        contents: [
            {
                thisfield: "large-title", type: "heading", classes: ["large-title col-sm-12"], value: "Customer Name and Address"
            },
            {
                thisfield: "first-name", type: "text", length: null, controlclass: "col-sm-12", styles: {}, label: "First Name",
                placeholder: "First Name", id: "", value: null, required:"required", validation: "Field is required."
            },
            {
                thisfield: "last-name", type: "text", length: null, controlclass: "col-sm-12", styles: {},
                label: "Last Name", id: "", placeholder: "Last Name", value: null, required: "required", validation: "Field is required."
            },
        ]
    },

    {
        thisfield: "address", type: "container", classes: ['row middle'], style: {},

        contents: [
            {
                thisfield: "street", placeholder: "Address", type: "text", controlclass: "col-sm-9", styles: {}, label: "Address", id: "",
                value: "", validation: "Field is required."
            },

            {
                thisfield: "appartment", type: "text", length: null, controlclass: "col-sm-3", styles: {},
                label: "Apartment/Suite", placeholder: "Apt/Suite", id: "", value: "", validation: ""
            },

            {
                thisfield: "email", type: "email", length: null, controlclass: "col-sm-6", styles: {},
                label: "Email", id: "", placeholder: "email", value: null, validation: "Please use valid email."
            },
         
            {
                thisfield: "tel", type: "telephone", parent: "country", patterns: "", controlclass: 'col-sm-6', styles: {},
                label: "Telephone", id: "", placeholder: "Telephone", value: null, pattern: "[0-9]{3}-[0-9]{3}-[0-9]{4}", validation: "Please use valid phone number xxx-xxx-xxxx."
            },
        ]
    },

 


    {
        thisfield: "container2", type: "container", classes: ['row radio'], style: {},
        contents: [


            { thisfield: "country", type: "select", idkey: "111", options: countries, classes: [], styles: {}, label: "Country", id: "", value: null, validation: "" },
            { thisfield: "state", parent: "country", idkey: "222", type: "select", options: states, classes: [], styles: {}, label: "State", id: "", value: null, validation: "" },
            { thisfield: "bands", parent: "state", idkey: "333", type: "select", options: bands, classes: [], styles: {}, label: "Bands", id: "", value: null, validation: "" },

            { thisfield: "Flowers and Stuff",  parent:"country", type: "radio", options: flowers, controlclass: 'col-sm-6', styles: {}, label: "", idkey: "", value: null, validation: "Please select a flower" },
            { thisfield: "Snakes are Cool",  type: "checkbox", options: snakes, controlclass: 'col-sm-6', childrenStyles:'showborder',  styles: {}, label: "", id: "", value: null, validation: "Please select a snake" },
            { thisfield: "message", width: "15", rows: "10", type: "textbox", patterns: "", maxlength:150, controlclass: 'col-sm-12', styles: {}, label: "Your Message", placeholder:"Your Message", id: "", value: null, validation: "250 character maximum" },

        ]

    },

    {
        thisfield: "buttons", type: "container", classes: ["row buttons"], style: {},

        contents: [

            { thisfield: "button0", type: "heading", classes: ['col-sm-12'], styles: {}, label: "", id: "", value: "Save to Continue or Reset", validation: "Please fix errors" },
            { thisfield: "button1", saveFunction: doSave, type: "save", styles: {}, label: "", id: "", value: null, validation: "" },
            { thisfield: "button2", type: "submit", classes: [], styles: {}, label: "", id: "", value: null, validation: "" },
            { thisfield: "button3", type: "reset", classes: ["link-only"], styles: {}, label: "", id: "", value: null, validation: "" }
        ]
    }
    ]

export default field1