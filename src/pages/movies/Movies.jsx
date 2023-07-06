import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { firestoreFetchCategory } from "../../fetch/firestoreFetch.js"
import { MediaList } from "../../components/mediaList/MediaList.jsx"
import { Loader } from "../../components/loader/Loader.jsx"
import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import { Link } from 'react-router-dom'

export const Movies = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    const [category, setCategory] = useState('')

    const handleChange = (event) => {
        setCategory(event.target.value)
    };
    
    useEffect(() => {
        firestoreFetchCategory(idCategory)
            .then(res => setData(res))
            .catch(err => console.log(err))
            if (idCategory !== undefined && idCategory !== 'satire' && idCategory !== 'action' && idCategory !== 'adventure' && idCategory !== 'super-heros' && idCategory !== 'fantasy' && idCategory !== 'science-fiction') {
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
                idCategory === undefined ?
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
                    <li value={'action'}><Link to='/movies/action'>Action</Link></li>
                    <li value={'adventure'}><Link to='/movies/adventure'>Adventure</Link></li>
                    <li value={'animated'}><Link to='/movies/animated'>Animated</Link></li>
                    <li value={'fantasy'}><Link to='/movies/fantasy'>Fantasy</Link></li>
                    <li value={'satire'}><Link to='/movies/satire'>Satire</Link></li>
                    <li value={'science-fiction'}><Link to='/movies/science-fiction'>Science fiction</Link></li>
                    <li value={'super-heros'}><Link to='/movies/super-heros'>Super heros</Link></li>
                </ul>
                </Select>
                </>
                : <Link to='/movies'>Back</Link>
                }
            </FormControl>
            </Box>
            <MediaList media={data.filter(media => media.type === 'movie')}/>
            </>
            : <Loader/>
            }
        </>
    )   
}