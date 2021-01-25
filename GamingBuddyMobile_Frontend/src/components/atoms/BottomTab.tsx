import React from 'react'
import styled from 'styled-components/native'
import {Image, TouchableOpacity} from "react-native";
import WhiteBoldCenter from "./Text/WhiteBoldCenter";

const Container = styled.View`
    height: 9%
    width:100%
    background: #303438
    margin-top: auto
    margin-bottom: 0px
`

const IconContainer = styled.View`
    flex-direction:row
    justify-content:space-between
    align-items: center
    margin-right: 15%
    margin-left: 15%
    top: 4%
`

const ChatContainer = styled.TouchableOpacity`
    align-items:center
    align-self:center
    justify-content:center
`

const BuddyContainer = styled.TouchableOpacity`
    align-items:center
`

interface Props {
    chatPress?: () => void
    buddyPress?: () => void
}

const BottomTab: React.FC<Props> = ({ chatPress, buddyPress}) => {

    return (
       <Container>
            <IconContainer>
                <ChatContainer onPress={chatPress}>
                    <Image source={require("../../assets/bottomNavIcon-chats.png")}/>
                    <WhiteBoldCenter text={"Chat"} color={'#6A7178'} size={'15'} />
                </ChatContainer>

                <BuddyContainer onPress={buddyPress}>
                    <Image source={require("../../assets/bottomNavIcon-buddies.png")}/>
                    <WhiteBoldCenter text={"Buddies"} color={'#6A7178'} size={'15'} />
                </BuddyContainer>
            </IconContainer>
       </Container>
    )
}
export default BottomTab
