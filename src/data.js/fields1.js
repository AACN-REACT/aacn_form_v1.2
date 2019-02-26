

const field1 = [

                {thisfield:"container1", type:"container", classes:[],style:{},
                            contents:[  {thisfield:"name", type:"text", length:null , 
                                        classes:[],styles:{},label:"First name",placeholder="first name", 
                                        id="", value=null, validation:""},

                                        {thisfield:"surname", type:"text", length:null , classes:[],styles:{},
                                        label:"Surname", id="",placeholder="surname", value=null, validation:""}
                                    ]},


                {thisfield:"container2", type:"container", classes:[],style:{},
                                    contents:[ {thisfield:"appartment", type:"number", length:null, classes:[],styles:{},
                                                label:"House/Apartment number", placeholder:"house/apt number" id="", value=null, validation:""},
        
                                                {thisfield:"street", type:"text", classes:[],styles:{},label:"street", id="",
                                                 value=null, validation:""},
                                            ]},
        

 
                {thisfield:"country", type:"select", key:"111",  options:importedfields1 , classes:[],styles:{},label:"Country", id="", value=null, validation:""},
                {thisfield:"state", parent:"country" , key:"222", type:"select",  options:importedfields2,  classes:[],styles:{},label:"Name", id="", value=null, validation:""},
                {thisfield:"state", parent:"state" , key:"333", type:"select",  options:importedfields3,  classes:[],styles:{},label:"Name", id="", value=null, validation:""},
                {thisfield:"name", parent:"state",  key:"444", type:"radio", options:radioOptions, classes:[],styles:{},label:"Name", id="", value=null, validation:""},
                {thisfield:"telephone", type:"telephone", parent:"country", patterns:countryPatterns, classes:[],styles:{},label:"Name", id="", value=null, validation:""},
                
                
                {thisfield:"buttons", type:"container", classes:[],style:{},
                 contents: [ {thisfield:"button", type:"save", classes:[],styles:{},label:"Save", id="", value=null, validation:""},
                {thisfield:"button", type:"submit", classes:[],styles:{},label:"Submit", id="", value=null, validation:""},
                {thisfield:"button", type:"clear", classes:[],styles:{},label:"clear", id="", value=null, validation:""}
            ]},
            
            {thisfield:"message", type:"textbox", patterns:countryPatterns ,classes:[],styles:{},label:"Name", id="", value=null, validation:""},
                

]