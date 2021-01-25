import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { HomeStackParams } from './HomeStackParams'
import Buddies from "./Message/Buddies";
import Chats from "./Message/Chats";
import Settings from "./Settings/Settings";
import Profile from "./Profile/Profile";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";



const BottomTab = createBottomTabNavigator<HomeStackParams>();

const IndexBottomUser: React.FC = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                tabBarVisible : false
            }}
        >
            <BottomTab.Screen name="Chats" component={ChatStack}  />
            <BottomTab.Screen name="Buddies" component={BuddyStack}/>

        </BottomTab.Navigator>

    )
}


const ChatStackNav = createStackNavigator<HomeStackParams>()

const ChatStack: React.FC = () => (
    <ChatStackNav.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <ChatStackNav.Screen name="Chats" component={Chats} />

    </ChatStackNav.Navigator>
)


const BuddyStackNav = createStackNavigator<HomeStackParams>()

const BuddyStack: React.FC = () => (
    <BuddyStackNav.Navigator
        screenOptions={{
            headerShown: false,
        }}>
        <BuddyStackNav.Screen name="Buddies" component={Buddies} />

    </BuddyStackNav.Navigator>
)

export default IndexBottomUser
