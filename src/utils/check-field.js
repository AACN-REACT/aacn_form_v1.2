    
    function checkField(field,markup){
        if (field.type==="select"){
          console.log("ZZZ :","<<",field.thisfield,">>" ,field.options)
        }
        
            try {
        
                if (field.thisfield === undefined  ) throw (`A field is missing a "thisfield" reference property, \n every field should have one`)
        else { return( 
            markup?[{[field.thisfield]:field}]:
            field.type==="select"?
            {[field.thisfield]:[field.idkey, field.options.filter(el=>el.selected)[0]]}:
            {[field.thisfield]:field["value"] })
            } }
          catch (e) { console.log(e) }
        
        }

        export default checkField