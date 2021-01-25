import React from 'react'
import styled from 'styled-components/native'

import ActiveProfilePic from '../../ActiveProfilePic'
import ProfilePic from '../../ProfilePic'
import Identifier from '../Chat_Buddies/Identifier'

const UsernameListContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    flex-direction: row;
    align-items: center;
`

const ProfileBox = styled.View`
    height: 90px;
    width: 90px;
    padding: 10px;
    margin-right: 5px;
`

export default ({ isActive }) => {

    if (isActive) {
        return (
            <UsernameListContainer activeOpacity={0.7} onPress={console.log('button clicked 1')}>
                <ProfileBox>
                    <ActiveProfilePic/>
                </ProfileBox>
                <Identifier lastActive={0}/>
            </UsernameListContainer>
        )
    } else {
        return (
            <UsernameListContainer activeOpacity={0.7} onPress={console.log('button clicked 2')}>
                <ProfileBox>
                    <ProfilePic/>
                </ProfileBox>
                <Identifier lastActive={5}/>
            </UsernameListContainer>
        )
    }

}
