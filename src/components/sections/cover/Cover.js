import { Grid } from '@material-ui/core';
import React from 'react';
import Slide from './coverLeft/Slide';
import Banner from './coverRight/Banner';


function Cover() {
    return (
        <section className="cover" style={{ marginBottom: '40px'}}>
            <Grid container spacing={3}>
                <Grid item sm={12} md={8} >
                    <Slide />
                </Grid>
                <Grid item xs={12} sm={12} md={4} >
                    <Banner />
                </Grid>
            </Grid>
        </section>
    );
}

export default Cover;