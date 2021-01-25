import * as React from 'react';
import styled from 'styled-components/native';
import {View} from "react-native";




const CircleLeft = styled.View`
    position:absolute
    background: rgba(25, 50, 50, 1.0);
    width:200px
    height:200px
    border-radius: 400px
    right:50%
    opacity:0.7
    top:3%
`;

const CircleRight = styled.View`
    background:#155439
    justify-content:center
    align-items:center
    width:120px
    height:120px
    border-radius: 240px
    opacity:0.7
    left:50%
    top:15%
`;

const CircleRightSmaller = styled.View`
    position:absolute
    background:  rgba(25, 50, 50, 1.0);
    width:80px
    height:80px
    border-radius: 160px
    
`;

const Circles = () => {
    return (
          <View>
            <CircleLeft />
            <CircleRight>
                <CircleRightSmaller/>
            </CircleRight>
          </View>
    )
}

export default Circles;
