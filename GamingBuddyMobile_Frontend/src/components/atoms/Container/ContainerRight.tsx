import * as React from 'react'
import styled from 'styled-components/native'
import {colors} from "../../../globals/colors";

type Props = {
    children: any
}


const ContainerView = styled.View<{background?: string}>`
    left:4%  
`


const ContainerRight: React.FC<Props> = ({children}) => {

    return (

        <ContainerView >
            {children}
        </ContainerView>
    )
}

export default ContainerRight
