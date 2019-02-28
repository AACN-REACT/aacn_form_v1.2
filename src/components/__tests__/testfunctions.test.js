import adder from '../../utils/test-util';
import guidGenarator from '../../utils/guid-generator';
import isIE11 from '../../utils/is-IE11'
import isJSON from '../../utils/is-JSON'
import  multiMount from '../../utils/multi-mount'
import  sanitizeConfig,{checkGaps} from '../../utils/sanitize-config'




test("adds 4 + 6", ()=>{
    expect(adder(4,6)).toBe(10)
}) 


test("sanity check", ()=>{

    expect("some text").toBe("some text")

})


test("check sanitize",()=>{

expect(sanitizeConfig(["fxgfd","fdgdfg"])).toEqual({title:"Address Form"})

} )