    import * as React from 'react'
import styled from 'styled-components/native'
import {useState} from "react";
    import {colors} from "../../../globals/colors";

export const FormContainer = styled.View`
    margin-right:5%;
    margin-left:5%
    padding:2%
   
    
`

export const TextCont = styled.Text`
    width: 80%;
    padding-bottom:4%
    height:auto
   
`

export const FormCont = styled.TextInput`
    padding:3%
    background-color: ${colors.secondary}
    shadow-radius: 200px
    elevation:5
    opacity:1
`

    interface Props {
        onChangeText?: any
        value?: any
        placeholder?:string
    }


    const Form: React.FC<Props> = ({onChangeText, value, placeholder}) =>{

    return(

        <FormContainer>
            <FormCont
            style={{color:"#DCDCDC"}}
            placeholderTextColor={"#DCDCDC"}
            placeholder={placeholder}
           />
        </FormContainer>

    )
}

export default Form
