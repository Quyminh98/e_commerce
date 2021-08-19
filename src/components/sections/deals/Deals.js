import { Button } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import React from 'react';
import './Deals.css';

function Deals() {
    return (
        <section className="deals">
            <div className="deals__title">
                <h2>Deals &amp; Outlet</h2>
                <p>Today's deal and more</p>
            </div>
            <div className="deals__container">
                <div className="deal" style={{backgroundImage: 'url(https://d-themes.com/react/molla/demo-4/images/home/deals/bg-1.jpg)'}}>
                    <div className="deal__container">
                        <div className="deal__header">
                            <h5 className="deal__header__title">Deal of the Day.</h5>
                            <p className="deal__header__subtitle">Limited quantities.</p>
                        </div>
                        <div className="deal__body">
                            <div className="deal__body__content">
                                <a href="/">Home Smart Speaker with Google Assistant</a>
                            </div>
                            <div className="deal__body__price">
                                <span className="deal__body__newPrice">$129.00</span>
                                <span className="deal__body__oldPrice">$150.99</span>
                            </div>
                            <div className="deal__body__btn">
                                <Button variant="contained" color="primary"><span>Shop Now</span></Button>
                            </div>
                        </div>
                        <div className="deal__coutDown">
                            <div className="deal__countDown__item">0</div>:
                            <div className="deal__countDown__item">0</div>:
                            <div className="deal__countDown__item">0</div>:
                            <div className="deal__countDown__item">0</div>
                        </div>

                    </div>
                </div>
            
        
            
                <div className="deal" style={{backgroundImage: 'url(https://d-themes.com/react/molla/demo-4/images/home/deals/bg-2.jpg)'}}>
                    <div className="deal__container">
                        <div className="deal__header">
                            <h5 className="deal__header__title">Your Exclusive Offers.</h5>
                            <p className="deal__header__subtitle">Sign in to see amazing deals.</p>
                        </div>
                        <div className="deal__body">
                            <div className="deal__body__content">
                                <a href="/">Certified Wireless Charging Pad for iPhone / Android</a>
                            </div>
                            <div className="deal__body__price">
                                <span className="deal__body__newPrice">$29.00</span>
                            </div>
                            <div className="deal__body__btn">
                                <Button variant="contained" color="primary"><span>Sign in and Save money</span></Button>
                            </div>
                        </div>
                        <div className="deal__coutDown">
                            <div className="deal__countDown__item">0</div>:
                            <div className="deal__countDown__item">0</div>:
                            <div className="deal__countDown__item">0</div>:
                            <div className="deal__countDown__item">0</div>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="deals__btn">
                <a href='/list'>
                    <Button variant="outlined" color="primary" endIcon={<ArrowRightIcon/>}>Shop more outlet deals</Button>
                </a>
            </div>
        </section>
    );
}

export default Deals;