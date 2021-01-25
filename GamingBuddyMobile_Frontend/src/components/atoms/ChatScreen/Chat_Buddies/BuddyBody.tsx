import React from 'react'
import styled from 'styled-components/native'

import SearchBar from '../../SearchBar'
import BuddiesList from './BuddiesList'
import NewRequest from './NewRequest'
import {ScrollView} from "react-native";

const BuddyBodyContainer = styled.View`
    height: 90%
`

const SearchbarContainer = styled.View`
    margin-right:5%
    margin-left:5%
    margin: 7px;
    width: 100%;
    align-items: center;
`

const NewRequestContainer = styled.View`
    width:100%;
`

const BuddyListContainer = styled.ScrollView`
    width: 100%;
`

const BuddyBody: React.FC = () => {

    return (
        <BuddyBodyContainer>

            <SearchbarContainer>
                <SearchBar placeholder="Search" />
            </SearchbarContainer>
            <ScrollView>
                <NewRequestContainer>
                    <NewRequest />
                </NewRequestContainer>

                <BuddyListContainer>
                    <BuddiesList />
                </BuddyListContainer>
            </ScrollView>
        </BuddyBodyContainer>

    )

}

export default BuddyBody
