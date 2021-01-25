import React from 'react'
import styled from 'styled-components/native'
import ChatHeader from '../ChatHeader'
import BuddyBody from './BuddyBody'

const BuddyView = styled.View`
    background: #181A1C;
`

export default ({ title }) => {

    return (
        <BuddyView>
            <ChatHeader title={title} />
            <BuddyBody />
        </BuddyView>
    )

}
