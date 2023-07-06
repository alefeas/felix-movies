import { useState, useEffect } from 'react';
import { firestoreFetchCategory } from '../../fetch/firestoreFetch.js';
import { MediaList } from '../mediaList/MediaList.jsx';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import { Loader } from '../loader/Loader.jsx';

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


export const SearchBar = () => {
    const [data, setData] = useState([])
    const [wordEntered, setWordEntered] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    
    useEffect(() => {
        firestoreFetchCategory()
        .then(res => setData(res))
        .catch(err => console.log(err))
    }, [])

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
        return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
        setFilteredData(data);
        } else {
        setFilteredData(newFilter);
        }
    };

    return (
        <>
        {
            data.length !== 0 || filteredData.length !== 0?
            <>
            <Search>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className='inputSearch'
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={wordEntered}
            onChange={handleFilter}
            />
            </Search>
            {
            filteredData.length !== 0 || wordEntered === "" ?
            <div className='searchList'>
            {
                wordEntered !== '' ? 
                <MediaList media={filteredData}/>
                : <MediaList media={data}/>                    
            }
            </div>
            : <span>No results found for "{wordEntered}"</span>
            }
            </> 
        : <Loader/>
        }
        </>
    )
}