import * as React from 'react';
import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { navigate } from "../../../../utils/navigationRef";


const TopView = styled.View`
    margin-top: 10%;
    align-items: center;
    flex-direction: row;
    width: 100%;
    height: 60px;
    background: rgba(48, 52, 56, 0.95);
`;

const BackButton = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    width: 8%;
    margin-left: 5%;
    margin-right: 10%;
`;

//Had to use react native stylesheet for this.
const BackButtonTriangle = styled.View`
`;
const FillTriangle = styled.View`
`;

const ProfileBox = styled.View`
    flex: 1;
    width: 50px;
    height: 50px;
    align-self: center;
`;

const ChatMessageProfilePic = styled.Image`
    width: 45px;
    height: 45px;
    background: #417FA0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50;
    margin-left: 5%;
`;

const TitleBox = styled.View`
    flex: 3;
`;

const ChatTitle = styled.Text`  
    color: #fff;
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
`;

const ActiveText = styled.Text`
    color: #8E8E8E;
`;

const MessageChatTopView = () => {
    return (
        <TopView>
            <BackButton onPress={() => { navigate("Home") }}>
                <BackButtonTriangle style={style.backButton} />
                <FillTriangle style={style.fillTriangle} />
            </BackButton>
            <ProfileBox>
                <ChatMessageProfilePic />
            </ProfileBox>
            <TitleBox>
                <ChatTitle>USERNAME</ChatTitle>
                <ActiveText>Active X hrs ago</ActiveText>
            </TitleBox>
        </TopView >
    );
}

const style = StyleSheet.create({
    backButton: {
        width: 0,
        height: 0,
        marginRight: -20,
        marginLeft: 10,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 15,
        borderBottomWidth: 25,
        borderLeftWidth: 15,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'white',
        borderLeftColor: 'transparent',
        transform: [{ rotate: '-90deg' }],
        shadowOpacity: 0.25,
    },
    fillTriangle: {
        width: 0,
        height: 10,
        marginRight: 10,
        marginTop: 0,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 15,
        borderBottomWidth: 25,
        borderLeftWidth: 15,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'rgba(48, 52, 56, 0.95)',
        borderLeftColor: 'transparent',
        transform: [{ rotate: '-90deg' }],
    }
});

export default MessageChatTopView;