import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  listItem: {
    transition: 'all .3s ease',
    '&:hover': {
      color : '#fcb83b'
    }
  },
  listText: {
    display: 'flex',
    flex: 1
  },
  listIcon: {
    marginTop: '2px',
    marginRight: '10px'
  }
}));

export default function ListDrawer() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="mailbox folders">
      <a href='/'>
        <ListItem button className={classes.listItem}>
          <div className={classes.listText}>
            <HomeOutlinedIcon className={classes.listIcon} />
            <ListItemText primary="Home" />
          </div>
          <KeyboardArrowRightIcon />
        </ListItem>
      </a>

      <Divider />
      <a href='/list'>
        <ListItem button divider className={classes.listItem}>
          <div className={classes.listText}>
            <ListAltOutlinedIcon className={classes.listIcon} />
            <ListItemText primary="Product List" />        
          </div>
          <KeyboardArrowRightIcon />
        </ListItem>
      </a>

      <Divider light />
      <a href='/cart'>
        <ListItem button className={classes.listItem}>
          <div className={classes.listText}>
            <ShoppingCartOutlinedIcon className={classes.listIcon} />
            <ListItemText primary="Shopping Cart" />        
          </div>        
          <KeyboardArrowRightIcon />
        </ListItem>
      </a>

      <Divider light />

  
    </List>
  );
}