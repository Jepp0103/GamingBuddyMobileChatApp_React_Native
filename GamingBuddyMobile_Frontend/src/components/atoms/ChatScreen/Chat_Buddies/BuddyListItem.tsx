import React from 'react'
import styled from 'styled-components/native'

import ActiveProfilePic from '../../ActiveProfilePic'
import {ProfilePic} from '../../ProfilePic'
import BuddyRequest from './BuddyRequest'
import Identifier from './Identifier'
import {colors} from "../../../../globals/colors";

const BuddyListItemContainer = styled.TouchableOpacity`
    width: 100%;
    height: 100px;
    flex-direction: row;
`

const ProfileBox = styled.View`
    height: 70px;
    width: 70px;
    border-radius:35px
    padding: 10px;
    margin-right:3%;
    margin-left:3%
    background:${colors.blue}
`

const BuddyRequestBox = styled.View`
    right: 15%;
`

interface  Props{
    isActive?: Boolean
    isBuddy?: Boolean
    button1?: () => void
    button2?: () => void
    button3?: () => void
}

const BuddyListItem: React.FC<Props> = ({ isActive, isBuddy , button1, button2, button3}) => {
    if (isActive && isBuddy) {
        return (
            <BuddyListItemContainer activeOpacity={0.7} onPress={button1}>
                <ProfileBox>

                </ProfileBox>
                <Identifier lastActive={0}/>
            </BuddyListItemContainer>
        )
    } else if (isActive && !isBuddy) {
        return (
            <BuddyListItemContainer activeOpacity={0.7} onPress={button2}>
                <ProfileBox>

                </ProfileBox>
                <Identifier lastActive={0}/>
                <BuddyRequestBox>
                    <BuddyRequest />
                </BuddyRequestBox>
            </BuddyListItemContainer>
        )
    } else {
        return (
            <BuddyListItemContainer activeOpacity={0.7} onPress={button3}>
                <ProfileBox>

                </ProfileBox>
                <Identifier lastActive={7} />

            </BuddyListItemContainer>

        )
    }
}

export default BuddyListItem
