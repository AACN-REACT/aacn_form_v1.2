import React, { Component } from 'react';
import TextInput from '../atoms/text-input'
import SelectInput from '../atoms/select-input'
import ContainerInput from '../atoms/container-input'
import NumberInput from '../atoms/number-input';
import Heading from '../atoms/heading';
import TextBox from '../atoms/text-box';
import ButtonSave from '../atoms/button-save';



const ElementContainer = {
    number: (props)=><NumberInput {...props}/>,
    container: (props)=><ContainerInput {...props} />,
    text: (props)=><TextInput {...props} />,
    textbox: (props)=><TextBox {...props} />,
    heading:(props)=><Heading {...props} />,
   select: (props)=> <SelectInput {...props} />,
    radio: (props)=> <TextInput {...props} />,
    telephone: (props)=> <TextInput {...props} />,
    autofill: (props)=> <TextInput {...props} />,
    save: (props)=> <ButtonSave  {...props} />,


}

export default ElementContainer;