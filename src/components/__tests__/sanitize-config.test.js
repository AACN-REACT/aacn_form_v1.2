import adder from '../../utils/test-util';
import guidGenarator from '../../utils/guid-generator';
import isIE11 from '../../utils/is-IE11'
import isJSON from '../../utils/is-JSON'
import  multiMount from '../../utils/multi-mount'
import  sanitizeConfig,{checkGaps} from '../../utils/sanitize-config'







// check sanitizeConfig will generate a config from an array of just form type and url = ['formtype','url']
test("check array address",()=>{

expect(sanitizeConfig(["address","http://thing.com/address"]))
.toEqual({type:"address", title:{text:"Address Form", classes:["form-title"],styles:{} }, endpoints:{get:"http://thing.com/address"}})

} )

test("check array card",()=>{

    expect(sanitizeConfig(["card","http://thing.com/address"]))
    .toEqual({type:"card", title:{text:"", classes:["form-title"],styles:{} }, endpoints:{get:"http://thing.com/address"}})
    
    } )



// check sanitizeConfig throwing an error on a string

// test("throws on non json string",()=>{

//     expect(sanitizeConfig("random string"))
//     .toThrow()})
