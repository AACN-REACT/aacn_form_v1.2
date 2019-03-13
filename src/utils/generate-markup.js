import React, { Component } from 'react';
import checkField from './check-field.js'
import writeToState from './write-to-state.js'
import ElementContainer from '../components/molecules/element-container'

const extractFields = function(finalArr) { 
    
    
    
    return (finalArr.map(field=>[field[Object.keys(field)[0]].type,field[Object.keys(field)[0] ]]).
map(type=>{console.log("SS", type); return typeof ElementContainer[type[0]]==="function"?
ElementContainer[type[0]](type[1]):ElementContainer[type[0]]}) )}


function generateMarkup (config){
    
const formFields = config.fields || config;
let Markup =[]
let newArr= []
let finalArr = writeToState(formFields,Markup,true);
console.log("FinalArr",finalArr)
finalArr = extractFields(finalArr)
// finalArr = finalArr.map(field=>[field[Object.keys(field)[0]].type,field[Object.keys(field)[0] ]]).
//                     map(type=>{console.log("SS", type); return typeof ElementContainer[type[0]]==="function"?
//                     ElementContainer[type[0]](type[1]):ElementContainer[type[0]]})
                //filter(component=>component!==undefined)
console.log("Gnerate Markup" , finalArr)                
return finalArr

}
    



export default generateMarkup