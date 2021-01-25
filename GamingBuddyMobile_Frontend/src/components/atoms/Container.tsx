import * as React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import {colors} from "../../globals/colors";

type Props = {
    background?: string
}

const ContainerView = styled.View<{background?: string}>`
    height: 100%;
    width: 100%;
    background: ${(props) => { return (props.background) ? props.background : colors.main }};
`

const Container: React.FC<Props> = ({ children, background }) => {
    
    return (
        <ContainerView background={background}>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </ContainerView>
    )
}

export default Container
