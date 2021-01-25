import React, { Component } from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

import MessageChatTopView from './MessageChatTopView';
import { io } from "socket.io-client";
import { colors } from '../../../../globals/colors';

const OverAllView = styled.View`
    background-color: black;
    width: 100%;
    height: 100%;
`;

const InputConst = styled.TextInput`
    height: 40px;
    width: 75%;
    padding: 8px;
    font-size: 16px;
    background-color: #202020;
    align-self: center;
    margin-left: 5%;
    margin-right: 3%;
    margin-bottom: 5%;
    color: #FFF;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const ScrollView = styled.ScrollView`
    background: black;
    width: 100%;
    margin-bottom: 3%;
`;

const MessagesContainerReceiver = styled.View`
    background: black;
    width: 40%;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 5%;
    align-self: flex-start;
    margin-right: 10%;
`;

const MessagesContainerSender = styled.View`
    background: black;
    width: 40%;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 5%;
    align-self: flex-end;
    margin-right: 5%;

`;

const MessageTimeTextReceiver = styled.Text`
    font-size: 12px;
    color: #8C8C8C;
    margin-left: 5%;
    font-weight: bold;
`;

const MessageTimeTextSender = styled.Text`
    font-size: 12px;
    align-self: flex-end;
    color: #8C8C8C;
    margin-right: 5%;
    font-weight: bold;
`;

const MessageBoxReceiver = styled.View`
    font-style: normal;
    background: #4C9F88;
    margin-left: 5%;
    margin-top: 5%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
`;

const MessageBoxSender = styled.View`
    font-style: normal;
    background: #517FA0;
    margin-right: 5%;
    margin-top: 5%;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    align-self: flex-end;
    justify-content: center;
    align-items: center;
`;

const MessageText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    margin: 3%;
`;

const SendMessageContainer = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SendButtonBox = styled.TouchableOpacity`
    background: ${colors.lightBlue};
    width: 42px;
    height: 42px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    margin-right: 5%;
    margin-bottom: 5%;
`;

const MessageInnerContainer = styled.View`
`;

const SendTriangle = styled.View`
`;

const FillTriangle = styled.View`
`;

let timeDate = new Date();
let minuteTime = ('0' + timeDate.getMinutes()).slice(-2);
let hoursTime = timeDate.getHours();
let monthTime = timeDate.getMonth();
console.log("month time?", monthTime)

function convertNumberMonthToName(month: number) {
    if (month === 0)
        return "jan";
    else if (month === 1)
        return "feb";
    else if (month === 2)
        return "mar";
    else if (month === 3)
        return "apr";
    else if (month === 4)
        return "may";
    else if (month === 5)
        return "jun";
    else if (month === 6)
        return "jul";
    else if (month === 7)
        return "aug";
    else if (month === 8)
        return "sep";
    else if (month === 9)
        return "oct";
    else if (month === 10)
        return "nov";
    else if (month === 11)
        return "dec";
}

let currentMessage = "";

export default class MessageChat extends Component<any, any> {
    socket: any;
    constructor(props: any) {
        super(props);
        this.state = {
            chatMessage: "",
            chatSenderMessages: [],
            chatReceiverMessages: [],
            height: 0
        };
    }

    componentDidMount() {
        this.socket = io("http://192.168.0.34:3000"); //Own ip for now
        this.socket.on("chat message", (msg: any) => {
            if (msg === currentMessage) {
                this.setState({ chatSenderMessages: [...this.state.chatSenderMessages, msg] })
            } else {
                this.setState({ chatReceiverMessages: [...this.state.chatReceiverMessages, msg] })
            }
        });
    }

    submitChatMessage() {
        if (this.state.chatMessage.length > 0) {
            this.socket.emit("chat message", this.state.chatMessage);
            this.setState({ chatMessage: "" })
            currentMessage = this.state.chatMessage
        }
    }

    render() {
        const chatSenderMessages = this.state.chatSenderMessages.map(
            (chatSendMessage: any) =>
                <MessageInnerContainer>
                    <MessageBoxSender>
                        <MessageText key={chatSendMessage}>{chatSendMessage}</MessageText>
                    </MessageBoxSender>
                    <MessageTimeTextSender>{
                        timeDate.getDate() + ". " +
                        convertNumberMonthToName(monthTime) +
                        " " + hoursTime + ":" + minuteTime
                    }</MessageTimeTextSender>
                </MessageInnerContainer>
        );

        const chatReceiverMessages = this.state.chatReceiverMessages.map(
            (chatReceiveMessage: any) =>
                <MessageInnerContainer>
                    <MessageBoxReceiver>
                        <MessageText key={chatReceiveMessage}>{chatReceiveMessage}</MessageText>
                    </MessageBoxReceiver>
                    <MessageTimeTextReceiver>{
                        timeDate.getDate() + ". " +
                        convertNumberMonthToName(timeDate.getMonth()) +
                        " " + hoursTime + ":" + minuteTime
                    }</MessageTimeTextReceiver>
                </MessageInnerContainer>
        );

        return (
            <OverAllView>
                <MessageChatTopView />
                <ScrollView contentContainerStyle={{ flexDirection: 'row-reverse' }} >
                    <MessagesContainerSender>
                        {chatSenderMessages}
                    </MessagesContainerSender>
                    <MessagesContainerReceiver>
                        {chatReceiverMessages}
                    </MessagesContainerReceiver>
                </ScrollView>
                <SendMessageContainer>
                    <InputConst
                        placeholder="Aa"
                        placeholderTextColor="#BFBFBF"
                        multiline={true}
                        numberOfLines={50}
                        autoCorrect={false}
                        value={this.state.chatMessage}
                        onChangeText={chatMessage => {
                            this.setState({ chatMessage })
                        }}
                        onContentSizeChange={(event) => {
                            this.setState({ height: event.nativeEvent.contentSize.height })
                        }}
                        style={{ height: Math.max(35, this.state.height) }}
                    >
                    </InputConst>
                    <SendButtonBox onPress={() => this.submitChatMessage()}>
                        <SendTriangle style={style.sendButtonTriangle} />
                        <FillTriangle style={style.fillTriangle} />
                    </SendButtonBox>
                </SendMessageContainer>
            </OverAllView >
        );
    }
}

const style = StyleSheet.create({
    sendButtonTriangle: {
        width: 0,
        height: 0,
        marginRight: -20,
        marginLeft: 3,
        marginTop: 3,
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
        transform: [{ rotate: '-60deg' }],
        shadowOpacity: 0.25,
    },
    fillTriangle: {
        width: 0,
        height: 10,
        marginLeft: 3,
        marginTop: -23,
        borderStyle: 'solid',
        borderTopWidth: 0,
        borderRightWidth: 6,
        borderBottomWidth: 25,
        borderLeftWidth: 11,
        borderTopColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#5CB2E0',
        borderLeftColor: 'transparent',
        transform: [{ rotate: '-65deg' }],
    }
});