import * as React from 'react'
import styled from 'styled-components/native'

export const TextContainer = styled.View`
     align-content:flex-start
      margin-left:4%
      margin-right:4%
`

export const TextStyle = styled.Text`
   font-size:15px
   text-align: left
   color: white
   

`

interface Props {
    text: any
}


const SmallWhiteLeft: React.FC<Props> = ({text}) =>{

    return(
        <TextContainer>
            <TextStyle>{text}</TextStyle>
        </TextContainer>

    )
}

export default SmallWhiteLeft
