import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import * as React from 'react'
import Container from '../../../components/atoms/Container'
import { WelcomeStackParams } from "../WelcomeStackParams";
import ContainerCenter from "../../../components/atoms/Container/ContainerCenter";
import ContainerContent from "../../../components/atoms/Container/ContainerContent";
import { SmallMargin } from "../../../components/atoms/Spacing/SmallMargin";
import Form from "../../../components/atoms/Form/Form";
import { colors } from "../../../globals/colors";
import Logo from "../../../components/atoms/Logo";
import { BlueButton } from "../../../components/atoms/Button/BlueButton";
import AgreeBoxCheck from '../../../components/atoms/AgreeBoxCheck';

import { useState } from "react";
import ContainerItemNextTo from "../../../components/atoms/Container/ContainerItemNextTo";
import WhiteBoldCenter from "../../../components/atoms/Text/WhiteBoldCenter";
import CustomMargin from "../../../components/atoms/Spacing/CustomMargin";
import SignInLink from "../../../components/atoms/Sign_In/SignInLink";
import SignInLinkBottom from "../../../components/atoms/Sign_In/SignInLinkBottom";
import Circles from "../../../components/atoms/Sign_In/Circles";
import ContainerRight from "../../../components/atoms/Container/ContainerRight";
import {navigate} from "../../../utils/navigationRef";
import BottomTab from "../../../components/atoms/BottomTab";


type ScreenRouteProp = RouteProp<WelcomeStackParams, 'SignIn'>
type ScreenNavigationProp = StackNavigationProp<WelcomeStackParams, 'SignIn'>
type Props = {
    route: ScreenRouteProp
    navigation: ScreenNavigationProp
}


const SignIn: React.FC<Props> = (p) => {

    function setCheckBox() {
        console.log("Hi");
    }


    const [isSelected, setSelection] = useState(false);

    return (

        <Container>
            <CustomMargin amount={'50'} />
            <ContainerCenter >
                <Logo />
            </ContainerCenter>
            <CustomMargin amount={'20'} />
            <ContainerContent background={colors.lightBlack}>
                <SmallMargin />
                <WhiteBoldCenter text={"Log In"} size={"30"} />
                <SmallMargin />
                <Form placeholder={"Email"} />
                <CustomMargin amount={5} />
                <Form placeholder={"Password"} />
                <SmallMargin />
                <ContainerRight>
                    <ContainerItemNextTo>
                        <AgreeBoxCheck
                            text={"Keep me logged in"}
                            onPress={setCheckBox}
                        />
                        {/* <CheckBox
                            value={isSelected}
                            onValueChange={setSelection} />
                        <WhiteBoldCenter text={"Keep me logged in"} />  */}
                    </ContainerItemNextTo>
                </ContainerRight>
                <CustomMargin amount={20} />
                <BlueButton text={"Log In"} onPress={() => {navigate("Home") }} />
            </ContainerContent>
            <ContainerCenter>
                <ContainerItemNextTo>
                    <SignInLink text={"Forgot your password?"} linkURL={"https://www.gamingbuddy.gg/forgotten-password"} />
                    <SignInLink text={"Create Account"} linkURL={"https://www.gamingbuddy.gg/create-account"} />
                </ContainerItemNextTo>
                <Circles />
            </ContainerCenter>

            <SignInLinkBottom text={"Terms and conditions"} linkURL={"https://www.gamingbuddy.gg/terms-and-conditions"} right={110} />
            <SignInLinkBottom text={"Privacy policy"} linkURL={"https://www.gamingbuddy.gg/privacy-policy"} left={110} />
        </Container>
    )
}

export default SignIn
