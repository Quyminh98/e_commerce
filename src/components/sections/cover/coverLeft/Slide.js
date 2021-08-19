import React from 'react';
import './Slide.css'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button, Hidden } from '@material-ui/core';

function Slide() {
    return (
        <div className="cover__left">
            <Carousel
                emulateTouch={true}
                showArrows={false}
                swipeable={true}
                showStatus={false}
                showThumbs={false} 
                autoPlay={true}
                infiniteLoop={true}
            >
                <div>
                    <img className="carousel__img" src="https://d-themes.com/react/molla/demo-3/images/home/sliders/slide-2.jpg" alt="slide-2"/> 
                    <div className="carousel__content">
                        <p className="carousel__subtitle">Deals and Promotion</p>
                        <p className="carousel__title">Echo Dot 3rd Gen</p>
                        <span className="carousel__oldPrice">$499</span>
                        <span className="carousel__newwPrice">$299</span>
                        <Hidden xsDown>
                            <Button className="carousel__btn" variant="contained" color="primary" endIcon={<ArrowRightAltIcon />}>
                                Click Here
                            </Button>

                        </Hidden>
                    </div>
                </div>
                <div>
                    <img className="carousel__img" src="https://d-themes.com/react/molla/demo-3/images/home/sliders/slide-1.jpg" alt="slide-1"/> 
                    <div className="carousel__content">
                        <p className="carousel__subtitle">Daily Deals</p>
                        <p className="carousel__title">AirPods Earphones</p>
                        <span className="carousel__oldPrice">$299</span>
                        <span className="carousel__newwPrice">$247</span>
                        <Hidden xsDown>
                            <Button className="carousel__btn" variant="contained" color="primary" endIcon={<ArrowRightAltIcon />} >
                                Click Here
                            </Button>

                        </Hidden>
                    </div>

                </div>
            </Carousel>

        </div>
    );
}


export default Slide;
