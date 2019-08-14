import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 3rem;
`;

const Search = styled.input`
    outline: none;
    border: none;
    margin-left: 2rem;
`;

class SearchBar extends Component {

    render() {
        return (
            <Container>
                <Search type='text' placeholder='search' />
            </Container>
        );
    }
}

export default SearchBar;