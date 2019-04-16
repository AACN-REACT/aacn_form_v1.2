
import {rooms,flowers,countries,states,fruits,bands}  from './myoptions.js'


const field1 = [

                {thisfield:"container1", type:"container", classes:[],style:{},
                            contents:[  
                                        {thisfield:"name heading" , type:"heading", value:"NAMES"},
                                        {thisfield:"name", type:"text", length:null , 
                                        classes:[],styles:{},label:"First name",placeholder:"first name", 
                                        id:"", value:null, validation:""},
                                        {thisfield:"container2", type:"container", classes:[],style:{},
                                                            contents:[ {thisfield:"appartment22", type:"number", length:null, classes:[],styles:{},
                                                                        label:"House/Apartment number", placeholder:"house/apt number",  id:"", value:"10", validation:""},
                                
                                                                        {thisfield:"street", placeholder:"street" , type:"text", classes:[],styles:{},label:"street", id:"",
                                                                         value:null, validation:""},
                                                                    ]},

                                        {thisfield:"surname", type:"text", length:null , classes:[],styles:{},
                                        label:"Surname", id:"",placeholder:"surname", value:null, validation:""},
                                        
                                        {thisfield:"email", type:"email", length:null , classes:[],styles:{},
                                        label:"Email", id:"",placeholder:"email", value:null, validation:""},
                                        
                                    ]},


        

 
                {thisfield:"country", type:"select", idkey:"111",  options:countries , classes:[],styles:{},label:"Country", id:"", value:null, validation:""},
                {thisfield:"state", parent:"country" , idkey:"222", type:"select",  options:states,  classes:[],styles:{},label:"States", id:"", value:null, validation:""},
                {thisfield:"bands", parent:"state" , idkey:"333", type:"select",  options:bands,  classes:[],styles:{},label:"Bands", id:"", value:null, validation:""},
                {thisfield:"name", parent:"country",  idkey:"444", type:"radio", options:rooms, classes:[],styles:{},label:"Name", id:"", value:null, validation:""},
                {thisfield:"telephone", type:"telephone", parent:"country", patterns:"", classes:[],styles:{},label:"Name", id:"", value:null, validation:""},
                
                {thisfield:"flower", parent:"country",type:"radio", options:flowers, classes:[],styles:{},label:"Flowers", id:"", value:null, validation:""},
                {thisfield:"message",width:"15", rows:"10", type:"textbox", patterns:"" ,classes:[],styles:{},label:"Comments", id:"", value:null, validation:""},
                
                {thisfield:"buttons", type:"container", classes:[],style:{},
                 
                 contents: [
                     
                {thisfield:"button1", type:"heading", classes:[],styles:{},label:"Save", id:"", value:"This Is the Heading", validation:""},
                {thisfield:"button1", type:"save",styles:{},label:"Save", id:"", value:null, validation:""},
                {thisfield:"button2", type:"submit", classes:[],styles:{},label:"Submit", id:"", value:null, validation:""},
                {thisfield:"button3", type:"reset",styles:{},label:"reset", id:"", value:null, validation:""}
            ]},


]

export default field1