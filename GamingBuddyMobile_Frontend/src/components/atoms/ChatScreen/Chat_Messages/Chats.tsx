import React from 'react'
import styled from 'styled-components/native'

import ChatHeader from '../ChatHeader'
import ChatBody from './ChatBody'

const ChatView = styled.View`
        background: #181A1C;
`

const ChatBottom = styled.View`
        flex: 1;
        border: 3px #fff;
`

export default () => {

    return (
        <ChatView>
            <ChatHeader title="Chats" />
            <ChatBody />
            <ChatBottom />
        </ChatView>

    )

}
