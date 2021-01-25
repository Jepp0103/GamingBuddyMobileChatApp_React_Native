import * as React from 'react'
import { Text} from 'react-native'
import styled from 'styled-components/native'

export const TextContainer = styled.View`
     align-content:flex-start
      margin-left:6%
      margin-right:6%
   
     
`

export const TextStyle = styled.Text<{size:any, direction?:any, color?:any}>`
   font-size:${(props) => (props.size) ? props.size : "20" }px
   text-align:${(props) => (props.direction) ? props.direction : "center" }
   color: ${(props) => (props.color) ? props.color : "white" }
   font-weight: bold;

`



interface Props {
    text: any
    size?:any
    direction?:any
    color?:any


}

const WhiteBoldCenter: React.FC<Props> = ({text, size, direction, color}) =>{

    return(
        <TextContainer>
            <TextStyle size={size} direction={direction} color={color}>{text}</TextStyle>
        </TextContainer>

    )
}

export default WhiteBoldCenter
