import * as React from 'react'
import styled from 'styled-components/native'
import {Image} from 'react-native';

export const LogoContainer = styled.View`
  align-self:center
  height: 65px
  width:240px
`


interface Props {

}

const Logo: React.FC<Props> = ({}) => {

    return (
        <LogoContainer>
            <Image source={require("../../../assets/logo.png")}
                   style={{flex:1, height: undefined, width: undefined}}
                   resizeMode="stretch"/>
        </LogoContainer>
    )
}

export default Logo
