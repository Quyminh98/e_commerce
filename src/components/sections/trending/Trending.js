import { Button, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import PropTypes from 'prop-types';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import featuredList from '../../../assets/featuredList';
import onSale from '../../../assets/onSale';
import topRated from '../../../assets/topRated';
import ProductCard from '../../products/productCard/ProductCard';
import './Trending.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography component={'span'}>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#fafafa',
    width: '100%',
  },
  title: {
    fontSize: '1.6rem',
    textAlign: 'center',
    fontWeight: 500
  },
  appBar: {
    backgroundColor: "#fafafa"
  },
  button: {
    textAlign: 'center',
  }
}));

export default function Trending() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <section className="trending">
      <h2 className={classes.title}>Trending products</h2>
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static" elevation={0}>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab label=" Featured" {...a11yProps(0)} />
            <Tab label="On Sale" {...a11yProps(1)} />
            <Tab label="Top Rated" {...a11yProps(2)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid container spacing={2}>
              {featuredList.map(item => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <ProductCard item={item}/>
                  </Grid>
                )
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid container spacing={2}>
              {onSale.map(item => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <ProductCard item={item}/>
                  </Grid>
                )
              })}
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid container spacing={2}>
              {topRated.map(item => {
                return (
                  <Grid item xs={12} sm={6} md={3} key={item.id}>
                    <ProductCard item={item}/>
                  </Grid>
                )
              })}
            </Grid>
          </TabPanel>
        </SwipeableViews>
      </div>
      <div className={classes.button} >
          <a href='/list'>
            <Button variant="outlined" color="primary" endIcon={<ArrowForwardIcon/>}>
              More Product
            </Button>
          </a>
      </div>
    </section>
  );
}