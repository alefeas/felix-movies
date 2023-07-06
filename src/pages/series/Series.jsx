import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { firestoreFetchCategory } from "../../fetch/firestoreFetch.js"
import { MediaList } from "../../components/mediaList/MediaList.jsx"
import { Loader } from "../../components/loader/Loader.jsx"
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link } from 'react-router-dom';

export const Series = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    const [category, setCategory] = useState('')

    const handleChange = (event) => {
        setCategory(event.target.value);
    }
    
    useEffect(() => {
        firestoreFetchCategory(idCategory)
        .then(res => setData(res))
        .catch(err => console.log(err))
        if (idCategory !== undefined && idCategory !== 'animated' && idCategory !== 'drama' && idCategory !== 'comedy' && idCategory !== 'documentary') {
            window.history.replaceState(null, "New Page Title", "/404")
            window.location.reload()
        }
    }, [idCategory])

    return (
        <>
            {
                data.length > 0 ?
                <>
                    <h3>MOVIES</h3>
                    <Box sx={{ maxWidth: 320 }}>
                    <FormControl  style={{margin:'20px'}} fullWidth>
                        {
                        window.location.pathname === '/series' ?
                        <> 
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={category}
                        label="Category"
                        onChange={handleChange}
                        > 
                        <ul>
                        <li value={'all-series'}><Link to={`/series`}>All series</Link></li>
                        <li value={'animated'}><Link to={`/series/animated`}>Animated</Link></li>
                        <li value={'documentary'}><Link to={`/series/documentary`}>Documentary</Link></li>
                        <li value={'comedy'}><Link to={`/series/comedy`}>Comedy</Link></li>
                        <li value={'drama'}><Link to={`/series/drama`}>Drama</Link></li>
                        </ul>
                        </Select>
                        </>
                        : <Link to='/series'>Back</Link>
                        }
                    </FormControl>
                    </Box>
                    <MediaList media={data.filter(media => media.type === 'serie')}/>
                </>
                : <Loader/>
            }
        </>
    )   
}