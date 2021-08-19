
import { IconButton, InputBase, Paper } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import ListDrawer from './ListDrawer';

const useStyles = makeStyles({
    drawer: {
        width: '280px',
    },
    drawerHeader: {
        padding: '20px '
    },
    search: {
        display: 'flex',
        width: '240px',
        height: '40px',
        borderRadius: '26px',
        paddingLeft: '20px',
        border : '2px solid #333333',
        '&:hover': {
            border : '2px solid #fcb83b'
        },
        
    },
    icon: {
        '&:hover': {
            color : '#fcb83b'
        }
    }
});

export default function SideDrawer({open, handleToggle}) {
  const classes = useStyles();
  const onClose = () => {
    handleToggle()
  }


  return (
    <div>
      <React.Fragment>
            <Drawer anchor="left" open={open} onClose={onClose}>
                <div className={classes.drawer}>
                    <div className={classes.drawerHeader}>
                        <Paper component="form" className={classes.search}>
                            <InputBase
                                placeholder="Search..."
                                elevation={0}
                            />
                            <IconButton type="submit" aria-label="search" className={classes.icon}>
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <div className={classes.drawerBody}>
                        <ListDrawer />
                    </div>
                </div>
            </Drawer>
        </React.Fragment>
    </div>
  );
}