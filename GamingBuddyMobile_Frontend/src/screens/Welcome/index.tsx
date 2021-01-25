import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import First from './First/First'
import { WelcomeStackParams } from './WelcomeStackParams'
import SignIn from "./SignIn/SignIn";

const WelcomeStack = createStackNavigator<WelcomeStackParams>()

const Welcome: React.FC = () => (
    <WelcomeStack.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <WelcomeStack.Screen name="SignIn" component={SignIn} />
        <WelcomeStack.Screen name="First" component={First} />


          </WelcomeStack.Navigator>
)

export default Welcome
