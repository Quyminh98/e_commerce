import { Badge, makeStyles } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            marginTop: '6px' 
        },
        icon: {
            color: '#ffffff',
            fontSize: '28px', 
            marginLeft: '24px',
            '&:hover': {
                color: '#fcb83b',
            },
            [theme.breakpoints.down('xs')]: {
                marginLeft: '10px',
      
            },
        }

    }
})

function Status() {
    const cart = useSelector(state => state.cart)
    const classes = useStyles();
    return (
        <div className='header__icon'>
            <div className={classes.wrapper}>
                <Badge badgeContent={0} color="primary">
                    <NotificationsNoneIcon className={classes.icon} />
                </Badge>  
              
                <a href='/cart'>
                    <Badge badgeContent={cart.length} color="primary">
                        <ShoppingCartOutlinedIcon className={classes.icon}/>
                    </Badge>  
 
                </a>

            </div>
        </div>
    );
}

export default Status;