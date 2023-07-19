import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { firestoreFetchCategory } from "../../fetch/firestoreFetch.js"
import { MediaList } from "../../components/mediaList/MediaList.jsx"
import { Loader } from "../../components/loader/Loader.jsx"
import * as React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export const Movies = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        firestoreFetchCategory(idCategory)
            .then(res => setData(res))
            .catch(err => console.log(err))
            if (idCategory !== undefined && idCategory !== 'satire' && idCategory !== 'action' && idCategory !== 'adventure' && idCategory !== 'super-heros' && idCategory !== 'fantasy' && idCategory !== 'science-fiction' && idCategory !== 'romance' && idCategory !== 'suspense' && idCategory !== 'comedy') {
                window.history.replaceState(null, "New Page Title", "/404")
                window.location.reload()
            }   
    }, [idCategory])

    return (
        <>
            {
            data.length > 0 ? 
            <>
                {
                    idCategory === undefined ?
                    <div className="titleSelectContainer">
                    <h3 className="typeTitle">MOVIES</h3>
                    <Select placeholder="Categories" className="categorySelect">
                        <Link to='/movies/action'><Option value="action">Action</Option></Link>
                        <Link to='/movies/adventure'><Option value="adventure">Adventure</Option></Link>
                        <Link to='/movies/comedy'><Option value="comedy">Comedy</Option></Link>
                        <Link to='/movies/fantasy'><Option value="fantasy">Fantasy</Option></Link>
                        <Link to='/movies/romance'><Option value="romance">Romance</Option></Link>
                        <Link to='/movies/satire'><Option value="satire">Satire</Option></Link>
                        <Link to='/movies/science-fiction'><Option value="science-fiction">Science fiction</Option></Link>
                        <Link to='/movies/super-heros'><Option value="super-heros">Super heros</Option></Link>
                        <Link to='/movies/suspense'><Option value="suspense">Suspense</Option></Link>
                    </Select>
                    </div>
                : 
                <div>
                    <h3 className="backToMedia"><Link className="mediaLink" to='/movies'>MOVIES</Link> <ChevronRightIcon className="ChevronRightIcon"/> {idCategory.toUpperCase()}</h3>
                </div>
                }
            <MediaList media={data.filter(media => media.type === 'movie')}/>
            </>
            : <Loader/>
            }
        </>
    )   
}