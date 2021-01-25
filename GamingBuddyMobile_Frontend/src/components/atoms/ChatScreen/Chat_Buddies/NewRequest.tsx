import React from 'react'
import styled from 'styled-components/native'

import NewRequestBox from './NewRequestBox'

const NewRequestContainer = styled.View`
    width: 100%;
    background: #303438;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`

const NewRequestHeaderBox = styled.View`
    height: 50px;
    padding: 10px;
`

const NewRequestHeader = styled.Text`
    color: white;
    font-weight: bold;
    font-size: 16px;
    line-height: 25px;
`

const NewRequest: React.FC = () => {

    return (
        <NewRequestContainer>
            <NewRequestHeaderBox>
                <NewRequestHeader> Incoming requests </NewRequestHeader>
            </NewRequestHeaderBox>
            <NewRequestBox />
            <NewRequestBox />
        </NewRequestContainer>
    )

}

export default NewRequest
