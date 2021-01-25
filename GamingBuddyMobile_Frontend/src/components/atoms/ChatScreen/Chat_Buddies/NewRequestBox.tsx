import React from 'react'
import styled from 'styled-components/native'
import Identifier from './Identifier'
import {colors} from "../../../../globals/colors";

const NewRequestContainer = styled.View`
    width: 100%;
    height: 95px;
    justify-content: space-around;
    flex-direction: row;
`

const ProfileBox = styled.View`
    margin-right:5%
    margin-left:5%
    height: 70px;
    width: 70px;
    border-radius:35px
 
    background:${colors.blue}
    
`

const HandleRequestBox = styled.View`
    width: 100px;
    height: 90px;
    right:5%
    flex-direction: row;
`

const AcceptIconBox = styled.View`
    width: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const DeclineIconBox = styled.View`
    width: 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const AcceptIcon = styled.ImageBackground`
    width: 30px;
    height: 30px;
`

const DeclineIcon = styled.ImageBackground`
    width: 25px;
    height: 25px;
`

const NewRequestBox: React.FC = () => {

    return (
        <NewRequestContainer>
            <ProfileBox>
            </ProfileBox>
            <Identifier lastActive={""} />
            <HandleRequestBox>
                <AcceptIconBox><AcceptIcon source={require("../../../../assets/AcceptRequest.png")} /></AcceptIconBox>
                <DeclineIconBox><DeclineIcon source={require("../../../../assets/DeclineRequest.png")} /></DeclineIconBox>
            </HandleRequestBox>
        </NewRequestContainer>
    )

}

export default NewRequestBox
