import React from 'react'
import styled from 'styled-components/native'

const IdentifierBox = styled.View`
    width: 200px;
    height: 90px;
    flex-direction: column;   
    justify-content: center;
`

const Username = styled.Text`
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    margin: 3px;
`

const LastActive = styled.Text`
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #D1D1D1;
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    margin: 3px;
`

interface Props {
    lastActive:any
}

const Identifier: React.FC<Props> = ({ lastActive }) => {
    if (lastActive > 0) {
        return (
            <IdentifierBox>
                <Username>USERNAME</Username>
                <LastActive>Active {lastActive} hrs ago</LastActive>
            </IdentifierBox>
        )
    } else {
        return (
            <IdentifierBox>
                <Username>USERNAME</Username>
                <LastActive>Active </LastActive>
            </IdentifierBox>
        )
    }

}

export default Identifier
