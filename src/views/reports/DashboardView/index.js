import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import TotalAgents from './TotalAgents';
import AccountingFirm from './AccountingFirm';
import Faq from './Faq';
import Articles from './Articles';
import AccountClaim from './AccountClaim';
import LatestArticles from './LatestArticles';
import Sales from './Sales';
import TrafficByDevice from './TrafficByDevice';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <TotalAgents />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <AccountingFirm />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Faq />
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Articles />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Sales />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <TrafficByDevice />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestArticles />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <AccountClaim />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
