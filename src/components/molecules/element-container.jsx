import React, { Component } from 'react';
import TextInput from '../atoms/text-input'
import SelectInput from '../atoms/select-input'
import ContainerInput from '../atoms/container-input'


const ElementContainer = {
    number: "to be filled",
    //container: (props)=><ContainerInput {...props} />,
    text: (props)=><TextInput {...props} />,
   // select: (props)=> <SelectInput {...props} />,
    radio: (props)=> <TextInput {...props} />,
    telephone: (props)=> <TextInput {...props} />,
    autofill: (props)=> <TextInput {...props} />,


}

export default ElementContainer;