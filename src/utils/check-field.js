    
    function checkField(field,markup){
        if (field.thisfield==="select"){
          console.log("This is a select :",field.thisfield, field.thisfield.key)
        }
        
            try {
        
                if (field.thisfield === undefined  ) throw (`A field is missing a "thisfield" reference property, \n every field should have one`)
        else { return( 
            markup?[{[field.thisfield]:field}]:
            field.type==="select"?
            {[field.thisfield]:[field.key, field.value]}:
            {[field.thisfield]:field["value"] })
            } }
          catch (e) { console.log(e) }
        
        }

        export default checkField