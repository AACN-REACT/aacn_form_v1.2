import React, { Component } from 'react';
import checkField from './check-field.js'
import writeToState from './write-to-state.js'
import ElementContainer from '../components/molecules/element-container'



function generateMarkup (config){
    
const formFields = config.fields;
let Markup =[]
let temp =  writeToState(formFields,Markup,true)
console.log("TEsMPP", temp)
let newArr= []
let finalArr = writeToState(formFields,Markup,true);
console.log("FinalArr",finalArr)
finalArr = finalArr.map(field=>field[Object.keys(field)[0]].type).
                    map(type=>{console.log("SS", type); return typeof ElementContainer[type]==="function"?
                    ElementContainer[type]():ElementContainer[type]})
                //filter(component=>component!==undefined)
console.log("Gnerate Markup" , finalArr)                
return finalArr

}
    



export default generateMarkup