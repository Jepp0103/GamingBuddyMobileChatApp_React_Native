import * as React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';


const LinkText = styled.Text`
    font-size: 15px;
    color: #bdbdbd;
    margin: 2%;
`;


interface Props {
    text: any
    linkURL: string
}

const SignInLink: React.FC<Props> = ({ text, linkURL }) => {

    return (
        <LinkText onPress={() => Linking.openURL(linkURL)}>{text}</LinkText>
    )
}

export default SignInLink
