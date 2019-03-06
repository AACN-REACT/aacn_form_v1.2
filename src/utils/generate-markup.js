import React, { Component } from 'react';
import ElementContainer from '../components/molecules/element-container'



function generateMarkup (fields){
    
        let markup = fields.map(el=><ElementContainer[el.type]/> )

        return markup 
    
    }


