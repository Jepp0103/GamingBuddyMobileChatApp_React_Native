import React from 'react'
import styled from 'styled-components/native'
import { MiniProfilePic } from '../MiniProfilePic'
import { ProfilePic } from '../ProfilePic'
import {colors} from "../../../globals/colors";


const ChatHeaderContainer = styled.View`
     flex-direction: row;
     justify-content: space-between;
     align-items: center;
     width: 100%;
     padding:5%
`

const TitleBox = styled.View`
    flex: 5;
    align-items: center;
    justify-content: center;
`

const ProfileBox = styled.View` 
    align-items: center;
    justify-content: center;
`

const ProfileContainer = styled.View`
    width: 40px;
    height: 40px;
    background:${colors.blue}
    border-radius:20px
`

const IconBox = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

const ChatTitle = styled.Text`  
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
`

const ChatIcon = styled.ImageBackground`
    width: 35px;
    height: 35px;
`

interface Props {
    title:string
}

const ChatHeader: React.FC<Props> = ({ title }) => {

    return (
        <ChatHeaderContainer>
            <ProfileBox>
                <ProfileContainer>

                </ProfileContainer>
            </ProfileBox>
            <TitleBox>
                <ChatTitle>{title}</ChatTitle>
            </TitleBox>
            <IconBox>
                <ChatIcon source={require('../../../assets/chat-writeIcon.png')}/>
            </IconBox>
        </ChatHeaderContainer>
    )
}

export default ChatHeader
