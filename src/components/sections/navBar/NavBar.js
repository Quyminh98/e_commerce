import { Container } from '@material-ui/core';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';


function NavBar() {
    const location = useLocation();
    
    const navItem = [
        {
            title: 'Home',
            path: '/'
        },
        {
            title: 'Product list',
            path: '/list'
        },
        {
            title: 'Shopping Cart',
            path: '/cart'
        }, 
        
    ]

    return (
        <div className="nav">
            <Container>
                <div className="nav__container">
                    <ul className="nav__list">
                        {
                            navItem.map(item => {
                                return (
                                    <li key={item.title} className={location.pathname === item.path ? 'nav__item active' : "nav__item"}>
                                        <Link to={item.path} className={location.pathname === item.path ? 'nav__link active' : "nav__link"}>{item.title}</Link>
                                    </li>

                                )
                            })
                        }
                    </ul>
                    <div className="nav__freeship">
                        <span>🛒 Free Shipping on Orders Over $100</span>
                    </div>
                </div>
            </Container>
            
        </div>
    );
}

export default NavBar;