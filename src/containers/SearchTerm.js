import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchByTitle, selectedPage } from '../actions'
import InputBase from '@material-ui/core/InputBase';
import styled from 'styled-components';

const StyledInputBase = styled(InputBase)`
    &&{
        background: rgba(63, 81, 181, 0.90);
        color: rgba(255, 255, 255, 1);
        padding: 5px;
        border-radious: 5px;
    } 
`;

const StyledSearchWrapper = styled.div`
    &&{
        position: relative;
        background: white;
        margin-right: 0px;  
        color: white;
    }   
`;

class SearchTermContainer extends Component {
    handleChange = (title) => {
        this.props.searchByTitle(title);
    }
    render () {
        return (
            <StyledSearchWrapper>
                <StyledInputBase
                inputProps={{
                    value:  this.props.searchTitle,
                    placeholder: 'Enter title'
                }}
                onChange={(event) => {
                    this.handleChange(event.target.value)
                    this.props.selectedPage(0);
                }} />
            </StyledSearchWrapper> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchTitle: state.dataOrderParameters.searchByTitle
    };
}

export default connect(
    mapStateToProps,
    {   searchByTitle,
        selectedPage
    }
    )(SearchTermContainer)