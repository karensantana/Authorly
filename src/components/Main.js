import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AuthorList from '../containers/AuthorList';
import VisibleTableList from '../containers/VisibleTableList';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

//Overriding Styles
const StyledBody = styled.div`
    max-width: 1440px;
    margin: 0 auto;
`;

const StyledContainer = styled(Container)`
    margin-top: 60px;
`;

const StyledGrid = styled(Grid)`
    &&{
        @media (max-width: 959px) {
            max-width: 100%;
            flex-basis: 100%;
        }
    } 
`;

//Body components tree - including Publications table and Sidebar with Authors
const Main = () => {

  return (
    <StyledBody>
        <StyledContainer>
            <Grid container spacing={3}>
                <StyledGrid item xs={10}>
                    <Paper>
                        <VisibleTableList />
                    </Paper>
                </StyledGrid>
                <StyledGrid item xs={2}>
                    <Paper>
                        <AuthorList />
                    </Paper>
                </StyledGrid>
            </Grid>
        </StyledContainer>
      
    </StyledBody>
  );
}

export default Main;