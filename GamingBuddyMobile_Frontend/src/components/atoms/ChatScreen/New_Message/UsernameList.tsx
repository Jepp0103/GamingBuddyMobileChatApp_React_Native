import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import styled from 'styled-components/native';
import {ProfilePic} from '../../ProfilePic';
import Identifier from '../Chat_Buddies/Identifier';
import ActiveProfilePic from '../../ActiveProfilePic';

const ProfileBox = styled.View`
    height: 90px;
    width: 90px;
    padding: 10px;
    margin-right: 5px;
`;


export default ({ isActive }) => {

    if (isActive) {
        return (
            <ProfileBox>
                <ActiveProfilePic/>
            </ProfileBox>
            <Identifier lastActive={0}/>
        );
    } else {
        return (
            <ProfileBox>
                <ProfilePic/>
            </ProfileBox>
            <Identifier lastActive={5}/>
        );
    }

}
