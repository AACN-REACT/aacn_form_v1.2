import React, { Component } from 'react';
import checkField from './check-field.js'
import writeToState from './write-to-state.js'
import ElementContainer from '../components/molecules/element-container'



function generateMarkup (config){
    
const formFields = config.fields;
let Markup =[]
formFields.forEach(field => {
    Markup = [...Markup, ...writeToState(field,Markup,true)]
    
});

return Markup
    
    }


export default generateMarkup