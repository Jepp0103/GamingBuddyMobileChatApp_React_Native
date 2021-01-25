import React from 'react'
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { MessageChatStackParams } from "../MessageChatStackParams";
import MessageChatMainView from "../../../components/atoms/ChatScreen/Message_Chat/MessageChatMainView";

type ScreenRouteProp = RouteProp<MessageChatStackParams, 'MessageChatScreen'>
type ScreenNavigationProp = StackNavigationProp<MessageChatStackParams, 'MessageChatScreen'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}

const MessageChat: React.FC<Props> = (p) => {
    return (
        <MessageChatMainView />
    )
}

export default MessageChat