import { Button } from '@material-ui/core';
import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className="cover__right">
            <div className="banner__card">
                <img className="banner__img" src="https://d-themes.com/react/molla/demo-3/images/home/banners/banner-1.jpg" alt="Edifier Stereo Blutetooth"></img>
                <div className="banner__content">
                    <p className="banner__subtitle">Top Product</p>
                    <p className="banner__title">Edifier Stereo Bluetooth</p>
                </div>
                <div className="banner__overlay">
                    <a href='/list'>
                        <Button variant="contained" color="primary">
                            <span className="banner__shopNow">Shop now</span>
                        </Button>
                    
                    </a>
                </div>
            </div> 
            <div className="banner__card">
                <img className="banner__img" src="https://d-themes.com/react/molla/demo-3/images/home/banners/banner-2.jpg" alt="Edifier Stereo Blutetooth"></img>
                <div className="banner__content">
                    <p className="banner__subtitle">Clearance</p>
                    <p className="banner__title">GoPro-Fusion 360</p>
                </div>
                <div className="banner__overlay">
                    <a href='/list'>
                        <Button className="banner__btn" variant="contained" color="primary">
                            <span className="banner__shopNow">Shop now</span>
                        </Button>

                    </a>
                </div>
            </div> 
            <div className="banner__card">
                <img className="banner__img" src="https://d-themes.com/react/molla/demo-3/images/home/banners/banner-3.jpg" alt="Edifier Stereo Blutetooth"></img>
                <div className="banner__content">
                    <p className="banner__subtitle">Featured</p>
                    <p className="banner__title">Apple Watch 4</p>
                </div>
                <div className="banner__overlay">
                    <a href='/list'>
                        <Button variant="contained" color="primary">
                            <span className="banner__shopNow">Shop now</span>
                        </Button>
                    </a>
                </div>
            </div> 
        </div>
    );
}

export default Banner;