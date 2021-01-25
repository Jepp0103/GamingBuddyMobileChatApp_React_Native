import * as React from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import { useState } from "react";

export const BigContainer = styled.View`
    margin-right:5%;
    margin-left:5%;
    flex-direction:row;
`

export const BoxContainer = styled.View`
    width:  35px;
    height: 35px;
    border-radius:5px;
    background: black;
    align-items:center;
`

export const BoxContent = styled.Text`
   font-size:25px;
   color: white;
   background: white;
`

export const TextInfo = styled.Text`
    color: white;
    font-size:13px;
    margin-left:5%;
`

interface Props {
    text: any
    onPress: () => void
}

const AgreeBoxCheck: React.FC<Props> = ({ text, onPress }) => {

    return (
        <BigContainer>
            <TouchableOpacity onPress={onPress}>
                <BoxContainer>
                    <BoxContent>✔</BoxContent>
                </BoxContainer>
            </TouchableOpacity>
            <TextInfo>{text}</TextInfo>
        </BigContainer>
    )
}

export default AgreeBoxCheck;