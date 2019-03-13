
import {rooms,flowers,countries,states,fruits,bands}  from './myoptions.js'


const field1 = [

                {thisfield:"container1", type:"container", classes:["container"],style:{},
                            contents:[  
                                        {thisfield:"name heading" , type:"heading", value:"NAMES"},
                                        {thisfield:"name", type:"text", length:null , 
                                        classes:[],styles:{},label:"First name",placeholder:"first name", 
                                        id:"", value:null, validation:""},
                                        {thisfield:"container2", type:"container", classes:[],style:{},
                                                            contents:[ {thisfield:"appartment22", type:"number", length:null, classes:[],styles:{},
                                                                        label:"House/Apartment number", placeholder:"house/apt number",  id:"", value:null, validation:""},
                                
                                                                        {thisfield:"street", placeholder:"street" , type:"text", classes:[],styles:{},label:"street", id:"",
                                                                         value:null, validation:""},
                                                                    ]},

                                        {thisfield:"surname", type:"text", length:null , classes:[],styles:{},
                                        label:"Surname", id:"",placeholder:"surname", value:null, validation:""}
                                    ]},


        

 
                {thisfield:"country", type:"select", key:"111",  options:countries , classes:[],styles:{},label:"Country", id:"", value:null, validation:""},
                {thisfield:"state", parent:"country" , key:"222", type:"select",  options:states,  classes:[],styles:{},label:"Name", id:"", value:null, validation:""},
                {thisfield:"bands", parent:"states" , key:"333", type:"select",  options:bands,  classes:[],styles:{},label:"Name", id:"", value:null, validation:""},
                {thisfield:"name", parent:"states",  key:"444", type:"radio", options:rooms, classes:[],styles:{},label:"Name", id:"", value:null, validation:""},
                {thisfield:"telephone", type:"telephone", parent:"country", patterns:"", classes:[],styles:{},label:"Name", id:"", value:null, validation:""},
                
                {thisfield:"flower", type:"autofill", options:flowers, classes:[],styles:{},label:"Save", id:"", value:null, validation:""},
                {thisfield:"message", type:"textbox", patterns:"" ,classes:[],styles:{},label:"Name", id:"", value:null, validation:""},
                
                {thisfield:"buttons", type:"container", classes:[],style:{},
                 
                 contents: [
                     
                {thisfield:"button1", type:"heading", classes:[],styles:{},label:"Save", id:"", value:"This Is the Heading", validation:""},
                {thisfield:"button1", type:"save", classes:[],styles:{},label:"Save", id:"", value:null, validation:""},
                {thisfield:"button2", type:"submit", classes:[],styles:{},label:"Submit", id:"", value:null, validation:""},
                {thisfield:"button3", type:"clear", classes:[],styles:{},label:"clear", id:"", value:null, validation:""}
            ]},


]

export default field1