import adder from '../../utils/test-util';
import guidGenarator from '../../utils/guid-generator';
import isIE11 from '../../utils/is-IE11'
import isJSON from '../../utils/is-JSON'
import  multiMount from '../../utils/multi-mount'
import  sanitizeConfig,{checkGaps} from '../../utils/sanitize-config'





// const myMock = jest.fn((x)=>x+5)

// console.log("this is my mock function:", myMock(79))

//  1. check sanitizeConfig will generate a config from an array of just form type and url = ['formtype','url']
test("check array address",()=>{

expect(sanitizeConfig(["address","http://thing.com/address"]))
.toEqual({type:"address", title:{text:"Address Form", classes:["form-title"], styles:{} }, endpoints:{get:"http://thing.com/address"}})

} )


// 2. Check sanitizeConfig will generate correct config for card default 

test("check array card",()=>{

    expect(sanitizeConfig(["card","http://thing.com/address"]))
    .toEqual({type:"card", title:{text:"", classes:["form-title"],styles:{} }, endpoints:{get:"http://thing.com/address"}})
    
    } )



    // 3. throw error on plain string, function needs to be wrapped before passing to expect
test("throw error on plain string entry", ()=>{


    expect(()=>sanitizeConfig("some string")).toThrow(SyntaxError)
})



//  4. throw error on incorrect url format for get property
test("throw error on non url for get value", ()=>{

expect(()=>{sanitizeConfig(["address", "dfs"])}).toThrow()
})

//5. throw error on incorrect default form type property

test("throw error on non url for get value", ()=>{

    expect(()=>{sanitizeConfig(["adres", "http://thing.com/address"])}).toThrow()
    })
    
