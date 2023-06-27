import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export const MoviesOption = () => {
    return (
        <>
        <Link to={`/movies`}><MenuItem value={'all-movies'}>All movies</MenuItem></Link>
        <Link to={`/movies/animated`}><MenuItem value={'animated'}>Animated</MenuItem></Link>
        <Link to={`/movies/documentary`}><MenuItem value={'documentary'}>Documentary</MenuItem></Link>
        <Link to={`/movies/fantasy`}><MenuItem value={'fantasy'}>Fantasy</MenuItem></Link>
        <Link to={`/movies/comedy`}><MenuItem value={'Comedy'}>Comedy</MenuItem></Link>
        <Link to={`/movies/science-fiction`}><MenuItem value={'science-fiction'}>Science fiction</MenuItem></Link>
        <Link to={`/movies/super-heros`}><MenuItem value={'super-heros'}>Super heros</MenuItem></Link>
        </>
    )
}