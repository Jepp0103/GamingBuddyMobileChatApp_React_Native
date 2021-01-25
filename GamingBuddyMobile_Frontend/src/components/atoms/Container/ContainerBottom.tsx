import * as React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import {colors} from '../../../globals/colors'

type Props = {
    background?: string
}

const ContainerView = styled.View<{background?: string}>`
    
    background: ${(props) => { return (props.background) ? props.background : colors.main }};
   
`

const SafeArea = styled.SafeAreaView`
    width:auto
    height:100%
`


const ContainerBottom: React.FC<Props> = ({ children, background }) => {

    return (
        <ContainerView background={background}>
            <SafeArea>
                {children}
            </SafeArea>
        </ContainerView>
    )
}


export default ContainerBottom
