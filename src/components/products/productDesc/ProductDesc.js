import { Button, Grid, IconButton, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import './ProductDesc.css';
import ReactStars from "react-rating-stars-component";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';

import { useRouteMatch } from "react-router-dom";
import productList from '../../../assets/productList'
import { toast } from 'react-toastify';
import { addProducts} from '../../../app/reducer/cartSlice.js'
import { useDispatch } from "react-redux";

function ProductDesc() {

    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const handelChange = () => {
        return count;
    }
    const location = useRouteMatch();
    
    const product = productList.find(item => {
        return item.id === +location.params.id
    })
    
    const addProduct = () => {
        toast.success("✔ Item added to cart!",  {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        const item = {
            ...product,
            quantity: count
        }
        const action = addProducts(item);
        dispatch(action)
    }

    return (
        <Grid container style={{alignItems: 'center', marginBottom: '20px', marginTop: '20px'}}>
            <Grid item xs={12} md={4}>
                <Paper >
                    <Carousel
                        emulateTouch={true}
                        showArrows={false}
                        swipeable={true}
                        showStatus={false}
                        autoPlay={true}
                        showThumbs={false}
                        infiniteLoop={true}
                        showIndicators={true}
                    >
                        <img src={product.img1} alt="slide-2"/>
                        <img src={product.img2} alt="slide-1"/>
                    </Carousel>

                </Paper>
            </Grid>
            <Grid item xs={12} md={8}>
                <div className="product__action">
                    <div className="product__container">
                        <h2 className="product__name">{product.name}</h2>
                        <ReactStars value={6} count={5} size={30} color={"#f4c10f"}></ReactStars>
                        <div style={{color: '#fcb83b', fontSize: '1.4rem'}}>$<span>{product.price}</span></div>
                        <p>Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,</p>
                        <div className="product__quantity">
                            <span className="quantity__title">QTY: </span>
                            <div className="quantity__handle">
                                <button className="quantity__subtract" onClick={() => count > 1 && setCount(count - 1)}>─</button>
                                <button className="quantity__add" onClick={() =>  count < 8 && setCount(count + 1)}>╋</button>
                                <input 
                                    className="quantity__input" 
                                    value={count}
                                    onChange={handelChange}
                                >

                                </input>
                            </div>
                        </div>
                        <Button variant="contained" color="primary" onClick={addProduct}>
                            <span style={{color: '#fff'}}>Add to cart</span>
                        </Button>
                    </div>
                    <div className="product__footer">
                        <p className="product__category">
                            <span className="product__category-title">Category: </span>
                            <span className="product__category-content">{product.category}</span>
                        </p>
                        <div className="product__social">
                            <span className="product__social-title">Share: </span>
                            <IconButton aria-label="facebook" size="small">
                                <FacebookIcon />
                            </IconButton>
                            <IconButton aria-label="instagram" size="small">
                                <InstagramIcon />
                            </IconButton>
                            <IconButton aria-label="youtube" size="small">
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton aria-label="twitter" size="small">
                                <TwitterIcon />
                            </IconButton>
                        </div>
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default ProductDesc;

