import React, { Component } from 'react';
import TextInput from '../atoms/text-input'
import SelectInput from '../atoms/select-input'


const ElementContainer = {
    number: <input type="number" />,
    container: <div> this is  a test jsx component </div>,
    text: (props)=><TextInput {...props} />,
    select: (props)=> <TextInput {...props} />,
    radio: (props)=> <TextInput {...props} />,
    telephone: (props)=> <TextInput {...props} />,
    autofill: (props)=> <TextInput {...props} />,

}

export default ElementContainer;