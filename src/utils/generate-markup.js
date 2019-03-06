import React, { Component } from 'react';
import checkField from './check-field.js'
import writeToState from './write-to-state.js'
import ElementContainer from '../components/molecules/element-container'



function generateMarkup (fields){
    
let empty = []
let Markup = writeToState(fields,empty,true)
console.log("tempObj:", Markup)


return Markup
    
    }


export default generateMarkup