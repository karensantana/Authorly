import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedAuthor } from '../actions'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


class AuthorList extends Component {
    renderList(){
        return this.props.authors.authorsList.map( author => {
            return (
                <ListItem button>
                    <ListItemText onClick={()=> this.props.selectedAuthor(author)} primary={author.firstName + ' ' + author.lastName} />
                </ListItem>
                //<li key={ author.email }onClick={()=> this.props.selectedAuthor(author)}> {author.firstName} </li>
            );
        });
    }

    render(){
        return (
            <List component="nav" aria-label="secondary mailbox folders">
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