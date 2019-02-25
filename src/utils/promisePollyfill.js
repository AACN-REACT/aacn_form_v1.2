// These comments may ultimately be removed and replaced by i) jsdoc comments ii) separate reference document


// This utility is to a polyfill for missing promise and fectch support


import {fetch as fetchfill} from 'whatwg-fetch'  //make sure what-wg is installed as a dependency in package.json  

function promisePolyfill(){ 
if(!window.Promise){
    console.log("This is IE11")
    require('es6-promise').polyfill();
     window.fetch = fetchfill;  
}
else{
    console.log("this browser already supports promises")
}
return "pollyfilled"
}
export default promisePolyfill