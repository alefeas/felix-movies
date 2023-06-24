import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import { useState } from 'react';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export const NavBar = () => {
  const [color, setColor] = useState(false)
  
  const changeHeaderColor = () => {
    if (window.scrollY >= 300) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeHeaderColor )

  return (
    <nav className={color ? 'navBar darkNavBar' : 'navBar'}>
        <div className='linksNavContainer'>
            <Link to='/' className="" href="#"><span className='logoNav'>FELIX</span></Link>
            <div>
              <Link to='/' className="" href="#">Home</Link>
              <Link to='/movies' className="" href="#">Movies</Link>
              <Link to='/series' className="" href="#">Series</Link>
              <Link to='/category' className="" href="#">Categories</Link>
              <Link to='/favorites' className="" href="#">My list</Link>
            </div>
        </div>
        <Toolbar className='searchContainer'>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                
            >
            </Typography>
            <Search>
                <SearchIconWrapper>
                <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase className='inputSearch'
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </Search>
          <PersonIcon className='userIcon'/>
        </Toolbar>
    </nav>
  );
}