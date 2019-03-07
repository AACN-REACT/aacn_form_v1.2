import React, { Component } from 'react';
import checkField from './check-field.js'
import writeToState from './write-to-state.js'
import ElementContainer from '../components/molecules/element-container'



function generateMarkup (config){
    
const formFields = config.fields;
let Markup =[]
//let temp =  writeToState(formFields,Markup,true)
let newArr= []
let finallArr = writeToState(formFields,Markup,true).
                map(field=>(ElementContainer[field[Object.keys(field)[0]].type])(field)).
                filter(component=>component!==undefined).
                forEach(el=>newArr.push(el))
return newArr

};
    



export default generateMarkup