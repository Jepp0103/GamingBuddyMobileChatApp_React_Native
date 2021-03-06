import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import { Text } from 'react-native'

import Container from '../../../components/atoms/Container'
import { colors } from '../../../globals/colors'
import { WelcomeStackParams } from '../WelcomeStackParams'

type ScreenRouteProp = RouteProp<WelcomeStackParams, 'First'>
type ScreenNavigationProp = StackNavigationProp<WelcomeStackParams, 'First'>

type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const First: React.FC<Props> = (p) => {
    return (
        <Container background={colors.main}>
            <Text>Welcome</Text>
        </Container>
    )
}

export default First
