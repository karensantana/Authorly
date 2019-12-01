import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedAuthor } from '../actions'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

//Generates Author List and dispatches action when user selects an author
class AuthorList extends Component {
    renderList(){
        return this.props.authors.authorsList.map( author => {
            return (
                <ListItem button key={author.email}  onClick={()=> this.props.selectedAuthor(author)}>
                    <ListItemText primary={author.firstName + ' ' + author.lastName} />
                </ListItem>   
            );
        });
    }

    render(){
        return (
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button key="clear" onClick={()=> this.props.selectedAuthor('')} >
                    <ListItemText primary='Clear Selection'/>
                </ListItem>
                { this.renderList() }  
            </List>    
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