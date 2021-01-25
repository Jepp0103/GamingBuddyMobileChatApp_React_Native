import React from 'react'
import ChatHeader from "../../../components/atoms/ChatScreen/ChatHeader";
import ChatBody from "../../../components/atoms/ChatScreen/Chat_Messages/ChatBody";
import Container from "../../../components/atoms/Container/Container";
import ChatBottom from "../../../components/atoms/Container/ChatBottom";
import {RouteProp} from "@react-navigation/native";
import {HomeStackParams} from "../HomeStackParams";
import {StackNavigationProp} from "@react-navigation/stack";
import BottomTab from "../../../components/atoms/BottomTab";
import {navigate} from "../../../utils/navigationRef";
import { SafeAreaView } from 'react-native';

type ScreenRouteProp = RouteProp<HomeStackParams, 'Chats'>
type ScreenNavigationProp = StackNavigationProp<HomeStackParams, 'Chats'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const Chats: React.FC<Props> = (p) => {



    return (
        <SafeAreaView>
            <Container>
                <ChatHeader title={"Chats"} />
                <ChatBody />
                <BottomTab chatPress={() => {navigate("Chats")}}
                           buddyPress={() => {navigate("Buddies")}}
                           />
            </Container>
        </SafeAreaView>
    )

}

export default Chats

