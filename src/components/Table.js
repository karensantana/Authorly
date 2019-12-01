import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const  PublicationsTable = props => {
  const rows = props.publications;
  const sortingOrder = props.sortingOrder;
  const sortingKey = props.sortingKey;
  const selectedSortingKey = props.selectedSortingKey;
  const selectedSortingOrder = props.selectedSortingOrder;
  const page = props.page;
  const rowsPerPage = props.rowsPerPage;
  const selectedPage = props.selectedPage;
  const selectedRowsPerPage = props.selectedRowsPerPage;
  return (
    <div>
        <Table aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align ="left">Title</TableCell>
                <TableCell align ="left">
                    Publication Date
                    <TableSortLabel
                        active = { sortingKey === 'date' ? true : false }
                        direction = { sortingOrder }
                        onClick = {() => {
                            selectedSortingKey('date');
                            selectedSortingOrder(sortingOrder === 'asc'? 'desc': 'asc');
                        }}
                    >
                    </TableSortLabel>
                </TableCell>
                <TableCell align="left">
                    Author
                    <TableSortLabel
                        active = { sortingKey === 'authorEmail' ? true : false }
                        direction = { sortingOrder }
                        onClick = {() => {
                            selectedSortingKey('authorEmail');
                            selectedSortingOrder(sortingOrder === 'asc'? 'desc': 'asc');
                        }}
                    >
                    </TableSortLabel>
                </TableCell>
                </TableRow>
            </TableHead>
        <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => (
            <TableRow key={row.name}>
                <TableCell 
                    align="left"
                    sortDirection= 'asc'
                >
                    {row.title}
                </TableCell>
                <TableCell align="left">
                    {row.date}
                </TableCell>
                <TableCell align="left">
                    {row.authorEmail}
                </TableCell>
            </TableRow>
            ))}
        </TableBody>
    </Table>
    <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={ (event, newPage) => {selectedPage(newPage)}}
        onChangeRowsPerPage={event => { 
            selectedRowsPerPage(parseInt(event.target.value, 10));
            selectedPage(0);
          }}
  />
    </div>
  );
}

export default PublicationsTable;