import React from 'react';
import './Footer.css';
import PhoneIcon from '@material-ui/icons/Phone';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__item">
                <div className="footer__logo">
                    <a href='/'>
                        <img src='https://d-themes.com/react/molla/demo-3/images/logo-footer.png' alt='logo'/>
                    </a>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos est quos animi nam culpa odio repellendus dicta fuga commodi</p>
                <div className="footer__contact">
                    <div className="footer__icon">
                        <PhoneIcon style={{color: '#fcb83b', fontSize: '3rem'}}/>
                    </div>
                    <div className="footer__phone">
                        <p>Got Question? Call us 24/7</p>
                        <h4>+84 150 825 08</h4>
                    </div>
                </div>
            </div>
            <div className="footer__item">
                <h5>Useful Links</h5>
                <ul>
                    <li><a href='/'>Our Services</a></li>
                    <li><a href='/'>How to shop on Molla</a></li>
                    <li><a href='/'>FAQ</a></li>
                    <li><a href='/'>Contact Us</a></li>

                </ul>
            </div>
            <div className="footer__item">
            <h5>Customer Service</h5>
                <ul>
                    <li><a href='/'>Payment Methods</a></li>
                    <li><a href='/'>Money-back guarantee</a></li>
                    <li><a href='/'>Return</a></li>
                    <li><a href='/'>Shipping</a></li>
                    <li><a href='/'>Terms and conditions</a></li>
                    <li><a href='/'>Privacy</a></li>
                </ul>
            </div>
            <div className="footer__item">
            <h5>Authentication</h5>
                <ul>
                    <li><a href='/'>Sign In</a></li>
                    <li><a href='/'>View Cart</a></li>
                    <li><a href='/'>Track My Order</a></li>
                    <li><a href='/'>Help</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;