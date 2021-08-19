import { Grid } from '@material-ui/core';
import React from 'react';
import './Categories.css'

function Categories() {
    return (
        <section className="categories" >
            <h2 className="categories__title">Explore Categories</h2>
            <Grid container >
                <Grid item xs={6} sm={4} lg={2}>
                    <a href='/list'>
                        <div className="categories__media">
                            <span className="category__img">
                                <img className="category__pic" src="https://d-themes.com/react/molla/demo-4/images/home/cats/1.png" alt="cate"></img>
                            </span>
                        </div>
                        <p className="category__title">Laptop</p>
                    </a>
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                    <a href='/list'>
                        <div className="categories__media">
                            <span className="category__img">
                                <img className="category__pic" src="https://d-themes.com/react/molla/demo-4/images/home/cats/2.png" alt="cate"></img>
                            </span>
                        </div>
                        <p className="category__title">Digital cameras</p>
                    </a>
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                    <a href='/list'>
                        <div className="categories__media">
                            <span className="category__img">
                                <img className="category__pic" src="https://d-themes.com/react/molla/demo-4/images/home/cats/3.png" alt="cate"></img>
                            </span>
                        </div>
                        <p className="category__title">Smart phone</p>
                    </a>
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                    <a href='/list'>
                        <div className="categories__media">
                            <span className="category__img">
                                <img className="category__pic" src="https://d-themes.com/react/molla/demo-4/images/home/cats/4.png" alt="cate"></img>
                            </span>
                        </div>
                        <p className="category__title">Televisions</p>
                    </a>
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                    <a href='/list'>
                        <div className="categories__media">
                            <span className="category__img">
                                <img className="category__pic" src="https://d-themes.com/react/molla/demo-4/images/home/cats/5.png" alt="cate"></img>
                            </span>
                        </div>
                        <p className="category__title">Audio</p>
                    </a>
                </Grid>
                <Grid item xs={6} sm={4} lg={2}>
                    <a href='/list'>
                        <div className="categories__media">
                            <span className="category__img">
                                <img className="category__pic" src="https://d-themes.com/react/molla/demo-4/images/home/cats/6.png" alt="cate"></img>
                            </span>
                        </div>
                        <p className="category__title">Smart Watches</p>
                    </a>
                </Grid>
            </Grid>
        </section>
    );
}

export default Categories;