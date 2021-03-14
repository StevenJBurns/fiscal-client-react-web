import React from 'react';
import { Switch, Route, Link as RouterLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { Pages } from 'components/pages';
import { useStyles } from './App.styles';

enum TabValues {
  Home = 0,
  Accounts,
  Reports,
};

const App = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = React.useState<TabValues>(TabValues.Home);

  const handleTabChange = (e: unknown, newValue: TabValues) => setCurrentTab(newValue);

  return (
    <>
      <AppBar
        position="static"
        style={{ justifyContent: 'center', padding: '1rem', backgroundColor: 'darkgreen' }}>
        <Typography variant="h3">FISCAL</Typography>
        <Hidden xsDown>
          <Typography variant="h6">DESKTOP</Typography>
        </Hidden>
        <Hidden smUp>
          <Typography variant="h6">MOBILE</Typography>
        </Hidden>
        </AppBar>
        <Container className={classes.root} maxWidth="lg">
        <Tabs value={currentTab} onChange={handleTabChange} className={classes.tabs}>
          <Tab label="HOME" value={TabValues.Home} />
          <Tab label="ACCOUNTS" value={TabValues.Accounts}/>
          <Tab label="REPORTS" value={TabValues.Reports}/>
        </Tabs>
        <Box component="main">
          <Switch>
            <Route exact path="/">
              <h1>HOME</h1>
            </Route>
            <Route exact path="/accounts">
              <h1>ACCOUNT LIST</h1>
            </Route>
            <Route exact path="/accounts/:id">
              <h1>ACCOUNT DETAIL</h1>
            </Route>
            <Route exact path="/investments">
              <h1>INVESTMENTS</h1>
            </Route>
            <Route>
              <Pages.Page404 />
            </Route>
          </Switch>
        </Box>
      </Container>
    </>
  )
};

export default App;
