import {rooms,flowers,countries,states,fruits,bands}  from './myoptions.js'

let importedCOuntries
fetch("http://nfdev:9023/api/countries/types").then(res=>res.json()).then(res=>)
const renewform = [

    {thisfield:"yourinfo", type:"heading", value: "Your Information",classes:[],styles:{}},
    {thisfield:"genderblock", type:"container", styles:[], contents:[  {thisfield:"gender", type:"radio",options:[{name:"male"},{name:"female"}],classes:[],styles:{}}
    ]},
    {thisfield:"tel", type:"text",classes:[],styles:{},placeholder:"Phone Number"},
    {thisfield:"mailingaddress", type:"heading", value: "Mailing Address",classes:[],styles:{} },
    {thisfield:"line1",label:"Address1", type:"text",classes:[],styles:{}},
    {thisfield:"line1",label:"Address2", type:"text",classes:[],styles:{}},
    {thisfield:"city",label:"city", type:"text",classes:[],styles:{}},
    {thisfield:"state", type:"select",classes:[],styles:{},options:states},
    {thisfield:"mailingaddress", type:"heading", value: "Tell Us About Yourself",classes:[],styles:{} },
    {thisfield:"experience", label:"Your Experience in Acute/Critical Care Nursing", type:"select",classes:[],styles:{},options:states},
    {thisfield:"primaryArea",  label:"Primary Area Employed", type:"select",classes:[],styles:{},options:states},
    {thisfield:"primaryPosition",label:"Primary Area EMployed", type:"select",classes:[],styles:{},options:states},
    {thisfield:"why",label:"Primary Area EMployed", type:"select",classes:[],styles:{},options:states},




 

]

export default renewform