import React from 'react'
import styled from 'styled-components/native'
import {ProfilePic} from '../../ProfilePic';
import {colors} from "../../../../globals/colors";

const ChatRoomContainer = styled.View`
    width: 100%;
    padding: 10px;
    flex-direction: row;
    height: 100px;
`

const ProfilePicContainer = styled.View`
    justify-content: center;
`

const ProfileBox = styled.View`
   height:60px
   width:60px
   border-radius:30px
   background:${colors.blue}
    
`

const MessageOverviewContainer = styled.View`
    flex: 4;
    padding-left: 10px;
    flex-direction: column;
    justify-content: center;
`

const TopContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

const UsernameText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

const TimeIndicator = styled.Text`
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #4F5459;
`

const MessagePreview = styled.Text`
    padding-top: 5px;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #D1D1D1;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`

interface Props{

}

const ChatRoom: React.FC<Props> = () => {

    return (
        <ChatRoomContainer>
            <ProfilePicContainer>
                <ProfileBox>

                </ProfileBox>
            </ProfilePicContainer>
            <MessageOverviewContainer>
                <TopContainer>
                    <UsernameText>Username</UsernameText>
                    <TimeIndicator>22 min</TimeIndicator>
                </TopContainer>
                <MessagePreview numberOfLines={1} ellipsizeMode="tail">Preview: here goes the message preview :D</MessagePreview>
            </MessageOverviewContainer>
        </ChatRoomContainer>
    )

}

export default ChatRoom
