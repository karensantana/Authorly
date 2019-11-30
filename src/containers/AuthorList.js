import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedAuthor } from '../actions'

class AuthorList extends Component {
    renderList(){
        return this.props.authors.authorsList.map( author => {
            return (
                <li key={ author.email }onClick={()=> this.props.selectedAuthor(author)}> {author.firstName} </li>
            );
        });
    }

    render(){
        return (
            <ul>
                { this.renderList() }
            </ul>
        );
    }
}

const mapStateToProps = state => {
    return { authors: state.authors};
}

export default connect(
    mapStateToProps,
    { selectedAuthor }
) (AuthorList);