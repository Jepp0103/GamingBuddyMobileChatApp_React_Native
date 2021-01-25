import React from 'react'
import ChatHeader from "../../../components/atoms/ChatScreen/ChatHeader";
import BuddyBody from "../../../components/atoms/ChatScreen/Chat_Buddies/BuddyBody";
import Container from "../../../components/atoms/Container/Container";
import {RouteProp} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {HomeStackParams} from "../HomeStackParams";
import BottomTab from "../../../components/atoms/BottomTab";
import {navigate} from "../../../utils/navigationRef";
import { SafeAreaView } from 'react-native';


type ScreenRouteProp = RouteProp<HomeStackParams, 'Buddies'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Buddies'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Buddies: React.FC<Props> = (p) => {


    return (
        <SafeAreaView>
            <Container>
                <ChatHeader title={"Buddies"}/>
                <BuddyBody />
                <BottomTab chatPress={() => {navigate("Chats")}}
                           buddyPress={() => {navigate("Buddies")}}
                />
            </Container>
        </SafeAreaView>
    )

}

export default Buddies
