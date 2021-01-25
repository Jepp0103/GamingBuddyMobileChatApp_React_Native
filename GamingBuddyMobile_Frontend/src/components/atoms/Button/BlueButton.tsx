import * as React from 'react'
import { Text } from 'react-native'
import styled from 'styled-components/native'
import {colors} from "../../../globals/colors";


export const BlueButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    background: ${colors.blue}
    padding:2.5%
    
`
export const BlueButtonText = styled.Text`
    text-align: center;
    color: ${colors.white}
    font-size:23px;
    font-weight: bold;
    margin: 10px;
    
    
    
`

interface Props {
    text: string
    onPress: () => void
}

export const BlueButton: React.FC<Props> = ({ text, onPress }) => {

    return (
            <BlueButtonContainer onPress={onPress}>
                <BlueButtonText>{text}</BlueButtonText>
            </BlueButtonContainer>
    )
}
