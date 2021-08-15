import React from 'react';
import { AppBar, Toolbar, makeStyles, Box, InputBase } from '@material-ui/core';
import logo from './image/logo.png';
import SearchIcon from '@material-ui/icons/Search';
import { ArrowLeft } from '@material-ui/icons';

const useStyle = makeStyles({
  header: {
    background: '#000',
    padding: 10,
    // height: 100,
  },
  image: {
    width: 100
  },
  search: {
    background: 'rgba(255,255,255,0.15)',
    marginLeft: 100,
    borderRadius: 5,
    position: 'relative',

  },
  inputBox: {
    color: 'inherit',
    margin: '0 50px'
  },
  searchIcon: {
    position: 'absolute',
    marginLeft: 10,
    top: 3
  },
})

const Header = ({getText}) => {
  const classes = useStyle();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <img className={classes.image} src={logo} alt="logo" />
        <Box className={classes.search}>
          <Box className={classes.searchIcon}>
            <SearchIcon />

          </Box>

          <InputBase
            placeholder= "Search by name"
            autoFocus
            classes={{ root: classes.inputBox }}
            onChange={(e)=> getText(e.target.value)}
          />
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
