import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': { backgroundColor: alpha(theme.palette.common.white, 0.25) },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: { width: '20ch' },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>Travel Advisor</Typography>
        <Box display='flex'>
          <Typography variant='h6' className={classes.title}>
            Explore new places
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
