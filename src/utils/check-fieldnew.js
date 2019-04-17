    
     function findFilter(fields, field) {
      let filterKey=null;
        if (field.options){
          if(field['parent']!==undefined){
            filterKey= findFilter(fields, field) 
            console.log("YESS has parent", filterKey) }

            else{

               filterKey= field.options.filter(el=>el.selected)[0].key
              }
            }
            console.log("YESS no OPtions", field['thisfield'],filterKey)
          return filterKey
        }
    
    
    function checkField(fields, field,markup){
        // first check if its a type with options, then we can extract the parent key if one exists
        console.log("YESS THIS is a field", field)
        let filterKey = findFilter(fields,field)
  
       
        console.log("YESS FINAL", field['thisfield'], filterKey)
  return( 
              markup?[{[field.thisfield]:field}]:
              field.options!==undefined?
              {[field.thisfield]: [ filterKey!==null?
                                          field.options.filter(el=>el.Parentkey===filterKey).filter(el=>el.selected? el.selected:el)[0].name: 
                                          field.options.filter(el=>el.selected)[0].name,
                                    filterKey?
                                          field.options.filter(el=>el.Parentkey===filterKey).filter(el=>el.selected?el.selected:el)[0].key: 
                                          field.options.filter(el=>el.selected)[0].key]}:
              {[field.thisfield]:field["value"] })
              
  
          
          }
  
          export default checkField