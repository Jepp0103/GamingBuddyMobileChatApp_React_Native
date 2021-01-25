import React from 'react'
import styled from 'styled-components/native'


const BuddyRequestContainer = styled.View`
    height: 100%;
    width: 80px;
    justify-content: center;
    align-items: center;
`

const GreenCircle = styled.View`
    width: 50px;
    height: 50px;
    background: #4C9F88;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

const GreyCircle = styled.View`
    width: 50px;
    height: 50px;
    background: grey;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`

const BRIcon = styled.ImageBackground`
    width: 70%;
    height: 70%;
`

interface Props{
    isRequestSent?:Boolean
}

const BuddyRequest: React.FC<Props> =  ({ isRequestSent }) => {

        return(
        <>
            {isRequestSent ?
            <BuddyRequestContainer>
                <GreyCircle>
                    <BRIcon source={require("../../../../assets/BuddyRequestIcon.png")} />
                </GreyCircle>
            </BuddyRequestContainer>
                :
            <BuddyRequestContainer>
                <GreenCircle>
                    <BRIcon source={require("../../../../assets/BuddyRequestIcon.png")} />
                </GreenCircle>
            </BuddyRequestContainer>}
        </>
    )
}

export default BuddyRequest
