import * as React from 'react'
import styled from 'styled-components/native'
import {colors} from "../../../globals/colors";

type Props = {
    children: any
}


const ContainerView = styled.View<{background?: string}>`
    margin-left:4%
    margin-right:4%
    width:auto
    flexDirection: row

`


const ContainerItemNextTo: React.FC<Props> = ({children}) => {

    return (

        <ContainerView >
            {children}
        </ContainerView>
    )
}

export default ContainerItemNextTo
