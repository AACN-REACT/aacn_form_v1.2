import React, { Component } from 'react';
import checkField from './check-field.js'
import writeToState from './write-to-state.js'
import ElementContainer from '../components/molecules/element-container'



function generateMarkup (config){
    
const formFields = config.fields;
let Markup =[]
//let temp =  writeToState(formFields,Markup,true)

let finallArr = writeToState(formFields,Markup,true).map(el=>ElementContainer[el[Object.keys(el)[0]].type]).filter(el=>el!==undefined)

let newArr= []
finallArr.forEach(el=>newArr.push(el(el)))

console.log(newArr)
return newArr

};
    



export default generateMarkup