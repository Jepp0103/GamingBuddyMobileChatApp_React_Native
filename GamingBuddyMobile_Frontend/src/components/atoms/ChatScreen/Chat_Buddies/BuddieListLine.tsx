import React from 'react'
import styled from 'styled-components/native'


const BuddiesLineContainer = styled.View`
    height: 30px;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px; 
    flex-direction: row;
`

const BuddiesLine = styled.ImageBackground`
    margin: 10px;
    width: 30%;
    height: 3px;    
`

const BuddiesTitle = styled.Text`
    font-weight: 900;
    font-size: 16px;
    line-height: 20px;
    color: #555C64;
    opacity: 0.5;
    margin-left: 20px;
    margin-right: 20px;
`

export default () => {

    return (
        <BuddiesLineContainer>
            <BuddiesLine source={require("../../../../assets/Line.png")} />
            <BuddiesTitle>BUDDIES</BuddiesTitle>
            <BuddiesLine source={require("../../../../assets/Line.png")} />
        </BuddiesLineContainer>
    )

}
