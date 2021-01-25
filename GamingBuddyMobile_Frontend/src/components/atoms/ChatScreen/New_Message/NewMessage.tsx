import React from 'react'
import styled from 'styled-components/native'

import SearchBar from '../../SearchBar'
import NewMessageBody from './NewMessageBody'
import NewMessageHeader from './NewMessageHeader'

const NewMessageView = styled.View`
    background: #181A1C;
`

const BodyContainer = styled.View`
    flex: 9;
    align-items: center;
`

const SearchbarContainer = styled.View`
    flex: 1;
    margin: 7px;
    width: 100%;
    align-items: center;
    justify-content: center;
`

const MessageBodyContainer = styled.ScrollView`
    flex: 12;
    width: 100%;
`

export default () => {

    return (
        <NewMessageView>
            <NewMessageHeader />
            <BodyContainer>
                <SearchbarContainer>
                    <SearchBar placeholder="Search" />
                </SearchbarContainer>
                <MessageBodyContainer>
                    <NewMessageBody isActive={false} />
                    <NewMessageBody isActive={false} />
                    <NewMessageBody isActive />
                    <NewMessageBody isActive={false} />
                    <NewMessageBody isActive />
                    <NewMessageBody isActive={false} />
                    <NewMessageBody isActive={false} />
                    <NewMessageBody isActive={false} />
                </MessageBodyContainer>
            </BodyContainer>

        </NewMessageView>
    )

}
