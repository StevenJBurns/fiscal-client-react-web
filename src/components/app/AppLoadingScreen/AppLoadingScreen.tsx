import React from 'react';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress'

const AppLoadingScreen = () => {
  return (
    <Container maxWidth="xl">
      <CircularProgress />
    </Container>
  );
};

export default AppLoadingScreen;
