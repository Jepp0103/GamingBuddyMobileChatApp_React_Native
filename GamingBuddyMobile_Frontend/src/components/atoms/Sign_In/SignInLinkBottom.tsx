import * as React from 'react';
import { Linking } from 'react-native';
import styled from 'styled-components/native';

const LinkContainer = styled.View<{left?:any, right?:any}>`
    position:absolute
    bottom: 20px
    margin:3%
    left: ${(props) => (props.left) ? props.left : "0" }px
    right: ${(props) => (props.right) ? props.right : "0" }px
`;

const LinkText = styled.Text`
    font-size: 13px;
    text-align:center
    color: #bdbdbd;
`;


interface Props {
    text: any
    linkURL:string
    left?:any
    right?:any
}

    const SignInLinkBottom: React.FC<Props> = ({text, linkURL, left, right}) =>{

    return (
        <LinkContainer left={left} right={right}>
             <LinkText onPress={() => Linking.openURL(linkURL)}>{text}</LinkText>
        </LinkContainer>
        )
    }

export default SignInLinkBottom
