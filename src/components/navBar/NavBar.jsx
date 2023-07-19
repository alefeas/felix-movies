import * as React from 'react';
import { Link } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import ListIcon from '@mui/icons-material/List';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import HomeIcon from '@mui/icons-material/Home';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';

export const NavBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
    <nav className='navBarHome'>
        <div className='linksNavContainer'>
            <Link to='/' className="" href="#"><span className='logoNav'>FELIX</span></Link>
            <div className='iconLinkContainer'>
                <Link to='/' className="textLink" href="#">Home</Link>
                <Link to='/movies' className="textLink" href="#">Movies</Link>
                <Link to='/series' className="textLink" href="#">Series</Link>
                <Link to='/my-list' className="textLink" href="#">My list</Link>
                <Link to='/' className="iconLink" href="#"><HomeIcon/></Link>
                <Link to='/my-list' className="iconLink" href="#"><ListIcon/></Link>
                <div className="iconLink">
                    <button className='moreOptionsButton'
                        onClick={handleClick}
                    >
                        <MoreVertIcon/>
                    </button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <Link to='/'><MenuItem onClick={handleClose}><MovieIcon className='moreOptionsIcon'/>Movies</MenuItem></Link>
                        <Link to='/'><MenuItem onClick={handleClose}><TvIcon className='moreOptionsIcon'/>Series</MenuItem></Link>
                    </Menu>
                </div>
            </div>
        </div>
        <Toolbar className='searchContainer'>
            <Link to='/search'>
                <SearchIcon className='searchIcon'/>
            </Link>
        </Toolbar>
    </nav>
    );
}