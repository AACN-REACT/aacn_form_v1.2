    
    function checkField(fields, field,markup){
      // first check if its a type with options, then we can extract the parent key if one exists
      let filterKey=null;
      console.log("YESS", fields)
        if (field.options){
          if(field.parent){
            filterKey = fields.filter(el=>el['thisfield']===field.parent)[0].options.filter(el=>el.selected)[0].key
            console.log("OOOO \n","\n  ------this field \n",field.thisfield, "\n  ------fields parent: \n ", field.parent, " \n ------filter key: \n", filterKey)
          }
        }
        
            try {
        
                if (field.thisfield === undefined  ) throw (`A field is missing a "thisfield" reference property, \n every field should have one`)
        else { return( 
            markup?[{[field.thisfield]:field}]:
            field.options!==undefined?
            {[field.thisfield]: [ filterKey!==null?
                                        field.options.filter(el=>el.Parentkey===filterKey).filter(el=>el.selected? el.selected:el)[0].name: 
                                        field.options.filter(el=>el.selected)[0].name,
                                  filterKey?
                                        field.options.filter(el=>el.Parentkey===filterKey).filter(el=>el.selected?el.selected:el)[0].key: 
                                        field.options.filter(el=>el.selected)[0].key]}:
            {[field.thisfield]:field["value"] })
            } }
          catch (e) { console.log(e) }
        
        }

        export default checkField