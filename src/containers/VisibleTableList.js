import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSortedPublications } from '../selectors';

class VisibleTableList extends Component {
    renderList(){
        return this.props.publications.map( publication => {
            return (
                <li > {publication.title} </li>
            );
        });
    }

    render() {
        return (
            <div> { this.renderList()} </div>
        );
    }
}

const mapStateToProps = state => {
    console.log(state);
    return {
        publications: getSortedPublications(state)
       
    }
}

export default connect(mapStateToProps)(VisibleTableList);