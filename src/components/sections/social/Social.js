import React from 'react';
import './Social.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Fab} from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import { blue, pink, red } from '@material-ui/core/colors';
import InstagramIcon from '@material-ui/icons/Instagram';
import SearchInput from '../../responsibility/SearchInput';
import SendIcon from '@material-ui/icons/Send';

function Social() {
    return (
        <section className="social">
            <div className="social__container">
                <div className="social__left">
                    <div className="social__title">
                        <h5>Shop Social</h5>
                        <p>Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.</p>
                    </div>
                    <div className="social__icon"> 
                        <Fab size="small" style={{ backgroundColor: blue[500], marginRight: '10px', marginTop: '10px' }} aria-label="add"> 
                            <FacebookIcon style={{ color: '#fff' }}/>
                        </Fab> 
                        <Fab size="small" style={{ backgroundColor: red[500], marginRight: '10px', marginTop: '10px' }} aria-label="add"> 
                            <YouTubeIcon style={{ color: '#fff' }}/>
                        </Fab> 
                        <Fab size="small" style={{ backgroundColor: pink[500], marginRight: '10px', marginTop: '10px'  }} aria-label="add"> 
                            <InstagramIcon style={{ color: '#fff' }}/>
                        </Fab>
                        <Fab size="small" style={{ backgroundColor: blue[300], marginRight: '10px', marginTop: '10px'  }} aria-label="add"> 
                            <TwitterIcon style={{ color: '#fff' }}/>
                        </Fab>
                    </div>
                </div>
                <div className="social__right">
                    <div className="social__title">
                        <h5>Get the Latest Deals</h5>
                        <p>and receive <span>$20 coupon</span> for first shopping</p>
                    </div>
                    <div className="social__input">
                        <SearchInput placeholder='Enter your Email Address' icon={<SendIcon/>}/>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Social;