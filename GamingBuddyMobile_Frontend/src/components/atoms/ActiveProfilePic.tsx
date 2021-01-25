import React from 'react'
import styled from 'styled-components/native'

const ProfilePicDiv = styled.View`
    width: 100%;
    height: 100%;
`

const ProfilePic = styled.ImageBackground`
    width: 100%;
    height: 100%;
    background: #417FA0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
`

const ActiveCircleOuterBorder = styled.View`
    z-index: 1;
    width: 35px;
    height: 35px;
    top: -30px;
    right: -40px;
    background: black;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

const ActiveCircle = styled.View`
    width: 25px;
    height: 25px;
    margin: 5px;
    border-radius: 50px;
    background: #5AD95F;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    z-index: 2;
`

export default () => {
    return (
        <ProfilePicDiv>
            <ProfilePic source={require("../../assets/Antchi.png")} />
            <ActiveCircleOuterBorder>
                <ActiveCircle />
            </ActiveCircleOuterBorder>
        </ProfilePicDiv>
    )
}
