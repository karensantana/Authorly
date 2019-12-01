import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from '@material-ui/core/Avatar';
import SearchTerm from '../containers/SearchTerm';
import styled from 'styled-components';

//Overriding Styles
const StyledDiv = styled.div`
    flex-grow: 1;
`;

const StyledTypography = styled(Typography)`
    flex-grow: 1;
`;

export default function SearchAppBar() {

  return (
    <StyledDiv>
      <AppBar position="static">
        <Toolbar>
            <Avatar>
                <AssignmentIcon />
            </Avatar>
          <StyledTypography  variant="h6" noWrap>
             Authorly
          </StyledTypography>
          <div>

            <SearchTerm />
          </div>
        </Toolbar>
      </AppBar>
    </StyledDiv>
  );
}