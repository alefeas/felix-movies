import * as React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

export const NavBar = () => {
    return (
    <nav className='navBarHome'>
        <div className='linksNavContainer'>
            <Link to='/' className="" href="#"><span className='logoNav'>FELIX</span></Link>
            <div>
                <Link to='/' className="" href="#">Home</Link>
                <Link to='/movies' className="" href="#">Movies</Link>
                <Link to='/series' className="" href="#">Series</Link>
                <Link to='/my-list' className="" href="#">My list</Link>
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
            <Link to='/search'>
                <SearchIcon className='searchIcon'/>
            </Link>
            <PersonIcon className='userIcon'/>
        </Toolbar>
    </nav>
    );
}