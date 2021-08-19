
import { Container, Hidden, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Slide from '@material-ui/core/Slide';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { HeaderWidth } from '../../constant/HeaderWidth';
import SearchInput from '../responsibility/SearchInput';
import Status from '../responsibility/Status';
import SideDrawer from '../sections/drawer/SideDrawer';
import NavBar from '../sections/navBar/NavBar';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => {
    return { 
        menuIcon: {
          marginRight: theme.spacing(1),
          cursor: 'pointer'
        },
        toolbar: {
            justifyContent: 'space-between',
            height: HeaderWidth,
        }
    }
})

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}
HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

export default function Header(props) {
  const [openMenu , setOpenMenu] = useState(false);
  const handleToggle = () => {
  setOpenMenu(!openMenu)
  }
  
  const classes = useStyles();
  return (
    <header className="header">
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar color="secondary" elevation={0}>
            <Container >
              <Toolbar className={classes.toolbar}>
                <div>
                  <Hidden mdUp>
                    <MenuIcon className={classes.menuIcon} onClick={handleToggle}/>
                  </Hidden>
                  <a className="header__logo" href="/">
                      <img src="/logo.png" alt="Molla log"></img>
                  </a>
                </div>
                <Hidden smDown>
                  <SearchInput placeholder='Search product...' icon={<SearchIcon/>}/> 
                </Hidden>
                <Status />
              </Toolbar>
            </Container>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <Hidden smDown>
        <NavBar />
      </Hidden>
      <SideDrawer open={openMenu} handleToggle={handleToggle}/>
    </header>
  );
}

