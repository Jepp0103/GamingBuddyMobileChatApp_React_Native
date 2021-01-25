import * as React from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components/native'
import {colors} from '../../../globals/colors'

type Props = {
    background?: string
}

const ContainerView = styled.View<{background?: string}>`
     flex: 1;
    border: 3px #fff;
`

const ChatBottom: React.FC<Props> = ({ children, background }) => {

    return (
        <ContainerView>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </ContainerView>
    )
}

export default ChatBottom
