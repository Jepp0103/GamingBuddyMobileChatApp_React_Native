import React from 'react'
import styled from 'styled-components/native'

const SearchBox = styled.TextInput`
    background-color: #303438;
    color: #fff;
    font-size: 16px;
    height: 42px;
    width: 90%;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);
    border-radius: 7px;
    border: 0px;
    padding-left: 15px;
`

interface Props {
    placeholder: string
}

const SearchBar: React.FC<Props> = ({ placeholder }) => {

    return (
        <SearchBox
            placeholder={placeholder}
            returnKeyType="search"
            placeholderTextColor="#fff"/>
    )
}
export default SearchBar
