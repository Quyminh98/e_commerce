import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import Categories from '../sections/categories/Categories';
import Cover from '../sections/cover/Cover';
import Deals from '../sections/deals/Deals';
import NewDeal from '../sections/newDeal/NewDeal';
import Services from '../sections/services/Services';
import Social from '../sections/social/Social';
import Trending from '../sections/trending/Trending';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            [theme.breakpoints.down('lg')]: {
                marginTop: theme.spacing(3)  
            },
            [theme.breakpoints.down('sm')]: {
                marginTop: theme.spacing(5)  
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: theme.spacing(7)  
            },
        }
        
    }
})

function Home() {
    const classes= useStyles();
    return (
        <Container className={classes.root}>
            <Cover />
            <Categories />
            <Trending />
            <NewDeal />
            <Deals />
            <Services />
            <Social />
        </Container>
    );
}

export default Home;