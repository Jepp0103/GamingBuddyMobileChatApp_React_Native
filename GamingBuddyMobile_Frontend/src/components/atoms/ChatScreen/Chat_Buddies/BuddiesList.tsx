import React from 'react'
import styled from 'styled-components/native'

import BuddiesListLine from './BuddieListLine'
import BuddyListItem from './BuddyListItem'

const BuddiesListContainer = styled.View`
    
`


const BuddiesList: React.FC = () => {

    return (
        <BuddiesListContainer>
            <BuddiesListLine />
                <BuddyListItem isActive={false} />
                <BuddyListItem isActive />
                <BuddyListItem isActive />
                <BuddyListItem isActive />
        </BuddiesListContainer>
    )

}

export default BuddiesList
