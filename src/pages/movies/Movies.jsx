import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { firestoreFetch } from "../../fetch/firestoreFetch.js"
import { MediaList } from "../../components/mediaList/MediaList.jsx"
import { Loader } from "../../components/loader/Loader.jsx"
import { CategorySelect } from "../../components/categorySelect/CategorySelect.jsx"

export const Movies = () => {
    const [data, setData] = useState([])
    const { idCategory } = useParams()
    
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [idCategory])
    return (
        <>
            {
            data.length > 0 ? 
            <>
            <h3>MOVIES</h3>
            <CategorySelect media={data}/>
            <MediaList media={data.filter(media => media.type === 'movie')}/>
            </>
            : <Loader/>
            }
        </>
    )   
}