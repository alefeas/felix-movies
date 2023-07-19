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

export const Series = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()

    useEffect(() => {
        firestoreFetchCategory(idCategory)
        .then(res => setData(res))
        .catch(err => console.log(err))
        if (idCategory !== undefined && idCategory !== 'drama' && idCategory !== 'comedy' && idCategory !== 'documentary' && idCategory !== 'action') {
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
                    <h3 className="typeTitle">SERIES</h3>
                    <Select placeholder="Categories" className="categorySelect">
                        <Link to='/series/action'><Option value="action">Action</Option></Link>
                        <Link to='/series/comedy'><Option value="comedy">Comedy</Option></Link>
                        <Link to='/series/documentary'><Option value="documentary">Documentary</Option></Link>
                        <Link to='/series/drama'><Option value="drama">Drama</Option></Link>
                    </Select>
                    </div>
                    : <h3 className="backToMedia"><Link className="mediaLink" to='/series'>SERIES</Link> <ChevronRightIcon className="ChevronRightIcon"/> {idCategory.toUpperCase()}</h3>
                    }
                    <MediaList media={data.filter(media => media.type === 'serie')}/>
                </>
                : <Loader/>
            }
        </>
    )   
}