    
    function checkField(field,markup){
        
        
            try {
        
                if (field.thisfield === undefined  ) throw (`A field is missing a "thisfield" reference property, \n every field should have one`)
        else { return markup?[{[field.thisfield ]: field.type}]:{[field.thisfield]:field["value"] }
            } }
          catch (e) { console.log(e) }
        
        }

        export default checkField