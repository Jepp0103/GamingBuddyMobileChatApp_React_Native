import * as React from 'react'
import { View } from 'react-native'
import styled from 'styled-components/native'

export const CustomMargin = styled.TouchableOpacity<{amount:any}>`
  margin: ${(props) => (props.amount) ? props.amount : '0' }px 0px
`

interface Props {
    amount:any
}

export const BlueButton: React.FC<Props> = ({ amount }) => {

    return (
       <CustomMargin amount={amount}/>
    )
}

export default CustomMargin
