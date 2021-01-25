import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { RootStackParams } from './RootStackParams'
import Home from './Home'
import Welcome from './Welcome'
import MessageChatScreen from './MessageChatScreen/MessageChat/MessageChat';
import { registerRootComponent } from 'expo'

const Root = createStackNavigator<RootStackParams>()

const Index: React.FC = () => (
    <Root.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <Root.Screen name="Welcome" component={Welcome} />
        <Root.Screen name="Home" component={Home} />
        <Root.Screen name="MessageChatScreen" component={MessageChatScreen} />


    </Root.Navigator>
)

export default Index
