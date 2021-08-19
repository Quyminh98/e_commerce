import { IconButton, InputBase, makeStyles, Paper } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        borderRadius: '26px',
        paddingLeft: '20px',
        width: '400px',
        height: '44px'
    },
    input: {
        flex: 1
    },
    icon: {
        '&:hover': {
            color : '#fcb83b'
        }
    }
})

function SearchInput({placeholder, icon}) {
    const classes = useStyles();
    return (
        <div className="header__search">
            <Paper component="form" className={classes.form}>
                <InputBase
                    className={classes.input}
                    placeholder={placeholder}
                />
                <IconButton type="submit" aria-label="search" className={classes.icon}>
                    {icon}
                </IconButton>
            </Paper>
        </div>
    );
}

export default SearchInput;