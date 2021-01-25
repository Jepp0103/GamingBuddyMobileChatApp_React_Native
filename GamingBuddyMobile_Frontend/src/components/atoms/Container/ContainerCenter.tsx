import * as React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import {colors} from '../../../globals/colors'

type Props = {
    background?: string
}

const ContainerView = styled.View<{background?: string}>`
    align-items:center
    background: ${(props) => { return (props.background) ? props.background : colors.main }};
`

const ContainerCenter: React.FC<Props> = ({ children,background }) => {

    return (
        <ContainerView background={background}>
            {children}
        </ContainerView>
    )
}

export default ContainerCenter
