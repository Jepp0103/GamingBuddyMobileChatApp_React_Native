import React from 'react'
import styled from 'styled-components/native'

import SearchBar from '../../SearchBar'
import ChatRoom from './ChatRoom'
import { navigate } from "../../../../utils/navigationRef";

const ChatContainer = styled.View`
    align-items: center;
`

const SearchbarContainer = styled.View`
    margin: 7px;
    margin-right:5%
    margin-left:5%
    width: 100%;
    align-items: center;
`

const ChatListContainer = styled.ScrollView`
    width: 100%;
`

const TouchhableChatRoom = styled.TouchableOpacity`
`

interface Props {

}

const ChatBody: React.FC<Props> = () => {

    return (
        <ChatContainer>
            <SearchbarContainer>
                <SearchBar placeholder="Search" />
            </SearchbarContainer>
            <ChatListContainer showsVerticalScrollIndicator={false}>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
                <TouchhableChatRoom onPress={() => { navigate("MessageChatScreen") }}>
                    <ChatRoom />
                </TouchhableChatRoom>
            </ChatListContainer>
        </ChatContainer>
    )

}

export default ChatBody
