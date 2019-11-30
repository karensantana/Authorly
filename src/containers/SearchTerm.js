import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextInput from '../components/TextInput'
import { searchByTitle } from '../actions'

class SearchTermContainer extends Component {
    handleChange = (title) => {
        this.props.searchByTitle(title);
    }

    render () {
        return (
            <TextInput value={this.props.searchTitle} handleChange={this.handleChange}/>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        searchTitle: state.dataOrderParameters.searchByTitle
    };
}

export default connect(
    mapStateToProps,
    { searchByTitle }
    )(SearchTermContainer)