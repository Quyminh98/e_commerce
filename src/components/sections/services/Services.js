import React from 'react';
import './Services.css';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import HistoryIcon from '@material-ui/icons/History';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import HelpIcon from '@material-ui/icons/Help';

function Services() {
    return (
        <section className="services">
            <div className="services__title">
                <h2>Amazing Services</h2> 

            </div>
            <div className="services__items">
                <div className="services__item">
                    <div className="services__symbol">
                        <LocalShippingIcon fontSize="large"/>
                    </div>
                    <div className="services__context">
                        <h5>Free Shipping</h5>
                        <p>Orders $50 or more</p>
                    </div>
                </div>
                <div className="services__item">
                    <div className="services__symbol">
                        <HistoryIcon fontSize="large"/>
                    </div>
                    <div className="services__context">
                        <h5>Free Returns</h5>
                        <p>Within 30 days</p>
                    </div>
                </div>
                <div className="services__item">
                    <div className="services__symbol">
                        <AssignmentIndIcon fontSize="large"/>
                    </div>
                    <div className="services__context">
                        <h5>Get 20% Off 1 Item</h5>
                        <p>When you sign up</p>
                    </div>
                </div>
                <div className="services__item">
                    <div className="services__symbol">
                        <HelpIcon fontSize="large"/>
                    </div>
                    <div className="services__context">
                        <h5>We Support</h5>
                        <p>24/7 services</p>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Services;