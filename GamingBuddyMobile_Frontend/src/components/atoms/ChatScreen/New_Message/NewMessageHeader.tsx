import React from 'react'
import styled from 'styled-components/native'

import gobackIcon from '../../../../../../assets/GoBack-icon.png'

const HeaderContainer = styled.View`
    width: 100%;
    background: rgba(48, 52, 56, 0.95);
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const HeaderTitleBox = styled.View`
    flex: 6;
    justify-content: center;
    align-items: center;
    margin-right: 35px;
`

const HeaderTitle = styled.Text`
    font-weight: bold;
    font-size: 18px;
    line-height: 23px;
    color: #FFFFFF;
`

const GoBackContainer = styled.TouchableOpacity`
    flex: 1;
    width: 30px;
    height: 100%;
    justify-content: center;
    align-items: center; 
`

const GoBackIconDiv = styled.ImageBackground`
    width: 16px;
    height: 24px;
`

export default () => {

    return (
        <HeaderContainer>
            <GoBackContainer activeOpacity={0.7} onPress={console.log('button clicked 1')}>
                <GoBackIconDiv source={gobackIcon} />
            </GoBackContainer>
            <HeaderTitleBox>
                <HeaderTitle>New message</HeaderTitle>
            </HeaderTitleBox>
        </HeaderContainer>
    )

}
