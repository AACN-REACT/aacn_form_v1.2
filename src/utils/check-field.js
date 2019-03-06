    
    function checkField(field){
        
        
            try {
        
                if (field.thisfield === undefined  ) throw (`A field is missing a "thisfield" reference property, \n every field should have one`)
        else { return { [field.thisfield] : field["value"] } 
            } }
          catch (e) { console.log(e) }
        
        }

        export default checkField