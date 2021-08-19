import { Button } from '@material-ui/core';
import React from 'react';
import './NewDeal.css'
function NewDeal() {
    return (
        <section className="new">
            <div className="new__container"> 
                <div className="new__title">
                    <h5 className="new__title__intro">New Deals</h5>
                    <h5 className="new__title__main">Start Daily at 12pm e.t.</h5>
                </div>
                <div className="new__content">
                    <div className="new__content__text">
                        <p>Get <span>FREE SHIPPING &amp; 5% rewards</span> on every order with Tenj technology shop rewards program</p>
                    </div>
                    <div className="new__content__action">
                        <Button variant="contained" color="primary">
                            <span style={{color: '#fff'}}>Add to Cart for $50.00/year</span>
                        </Button>
                    </div>
                </div>
                
            </div>
        </section>
    );
}

export default NewDeal;