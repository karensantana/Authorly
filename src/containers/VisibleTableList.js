import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSortedPublications } from '../selectors';
import PublicationsTable from '../components/Table'
import { selectedSortingKey,
     selectedSortingOrder, 
     selectedRowsPerPage,
     selectedPage
    } from '../actions';

class VisibleTableList extends Component {
    render() {   
        return (
            <div> 
                <PublicationsTable 
                selectedSortingKey = {this.props.selectedSortingKey}
                selectedSortingOrder = {this.props.selectedSortingOrder}
                sortingKey = {this.props.sortingKey}
                sortingOrder = {this.props.sortingOrder}
                publications={this.props.publications}
                page= {this.props.page}
                rowsPerPage= {this.props.rowsPerPage}
                selectedPage= {this.props.selectedPage}
                selectedRowsPerPage={this.props.selectedRowsPerPage}
                /> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        publications: getSortedPublications(state),
        sortingOrder: state.dataOrderParameters.sortingOrder,
        sortingKey: state.dataOrderParameters.sortingKey,
        page: state.dataOrderParameters.page,
        rowsPerPage: state.dataOrderParameters.rowsPerPage
    }
}

export default connect(
    mapStateToProps,
    {   selectedSortingKey,
        selectedSortingOrder,
        selectedPage,
        selectedRowsPerPage
    }
    )(VisibleTableList);